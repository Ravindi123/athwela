import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load environment variables
load_dotenv()

class EmailRequest(BaseModel):
    receiver_email: str
    subject: str
    body: str

class EmailResponse(BaseModel):
    message: str

@app.post("/send-email")
async def send_email(request: EmailRequest):
    try:
        # Get email credentials from environment variables
        sender_email = os.getenv("SMTP_SERVER_USERNAME")
        password = os.getenv("SMTP_SERVER_PASSWORD")

        # Create the email message
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = request.receiver_email
        message["Subject"] = request.subject
        message.attach(MIMEText(request.body, "plain"))

        # Connect to Gmail's SMTP server and send email
        with smtplib.SMTP(os.getenv("SMTP_SERVER_HOST"), 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, request.receiver_email, message.as_string())
            
        return EmailResponse(message="Email sent successfully!")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
