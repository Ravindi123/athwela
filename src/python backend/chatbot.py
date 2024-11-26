import os
from dotenv import load_dotenv
import google.generativeai as genai
from langchain_community.utilities import SQLDatabase
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain.memory import ConversationBufferMemory

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# Load environment variables
load_dotenv()
# Initialize conversation memory
memory = ConversationBufferMemory(return_messages=True)

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    try:
        print(f"Received message: {request.message}")
        response = chat_with_llm(request.message)
        print(f"Response: {response}")
        return ChatResponse(response=response)
    except Exception as e:
        print(f"Error in chat_endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    
def initialize_gemini():
    gemini_api_key = os.getenv("GEMINI_API_KEY")
    if not gemini_api_key:
        raise ValueError("GEMINI_API_KEY is not set in the environment variables.")
    genai.configure(api_key=gemini_api_key)
    
    generation_config = {
        "temperature": 0.7,
        "top_p": 0.9,
        "top_k": 40,
        "max_output_tokens": 4096,
        "response_mime_type": "text/plain",
    }
    
    model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
    )
    return model

def summarize_conversation(user_message: str, bot_response: str, model) -> str:
    summary_prompt = f"""Please provide a brief summary of this conversation exchange:
    User: {user_message}
    Bot: {bot_response}
    
    Summarize the key points in 1-2 sentences."""
    
    summary_response = model.generate_content(summary_prompt)
    return summary_response.text

def chat_with_llm(user_message: str):
    # Initialize Gemini model and database connection
    model = initialize_gemini()
    chat_session = model.start_chat()
    
    # Connect to MySQL database
    mysql_uri = f'mysql+mysqlconnector://{os.getenv("DB_USER")}:{os.getenv("DB_PASSWORD")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

    db = SQLDatabase.from_uri(mysql_uri)
    
    # Get database schema
    schema = db.get_table_info()
    
    try:
        # Load conversation history
        history = memory.load_memory_variables({})
        history_context = "\n".join([f"{m.type}: {m.content}" for m in history.get("history", [])])
        
        # Create context with schema and question to get SQL query
        context = f"""Based on this database schema:
        {schema}
        
        Previous conversation:
        {history_context}
        
        Generate only a SQL query to answer this question(Don't use UNION to combine tables): {user_message}
        Return only the SQL query without any markdown formatting or explanations."""
        
        # Get SQL query from model
        response = chat_session.send_message(context)
        sql_query = response.text.strip().replace('```sql', '').replace('```', '')
        
        # Execute SQL query and get results
        results = db.run(sql_query)

        # print(f"SQL Query: {sql_query}")
        # print(f"Results: {results}")
        
        # Create context with results for final answer
        results_context = f"""Based on this database query result:
        {results}
        
        Previous conversation:
        {history_context}
        
        You are a friendly customer service chatbot for Athwela fund raising website, which is a non-profit organization aiming to raise funds special projects and children/elder homes. Please provide a natural, conversational response to this question: {user_message}
        Guidelines:
            - If the user input is a greeting, don't mention any query result details 
            - Use the query results to provide accurate responds only if the user asks for it
            - Don't answer questions that are not related to the website
            - Show the result with markdowns and suitable formatting
            - Maintain a helpful and professional tone
            - Keep the conversation engaging
            - Format numbers and dates in a user-friendly way"""
        
        # Get final response
        final_response = chat_session.send_message(results_context)
        
        # Generate a summary of the conversation
        conversation_summary = summarize_conversation(user_message, final_response.text, model)
        
        # Save both the full context and summary to memory
        memory.save_context(
            {"input": f"{user_message}\nSummary: {conversation_summary}"}, 
            {"output": f"{final_response.text}\nSummary: {conversation_summary}"}
        )
        
        return final_response.text
        
    except Exception as e:
        raise Exception(f"Error in chat processing: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


# def main():
#     while True:
#         user_input = input("You: ")
#         if user_input.lower() in ['quit', 'exit', 'bye']:
#             print("Bot: Goodbye!")
#             break
#         try:
#             response = chat_with_llm(user_input)
#             print(f"Bot: {response}")
#         except Exception as e:
#             print(f"Error: {str(e)}")

# if __name__ == "__main__":
#     main()