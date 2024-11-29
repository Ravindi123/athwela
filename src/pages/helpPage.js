import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from '../styles/helpPage.module.css';

/*const HelpPage = () => {
    return (
      <div>
       ///content
      </div>
    );
  };
  
  export default HelpPage;*/


const HelpPage = () => {

    // const navigate = useNavigate();

    // const handleNavigate = (path) => {
    //     navigate(path);
    // };

    return (

        <section className={styles.help}>
            <section className={styles.faqContainer}>
                <h1>
                    Frequently asked questions?
                </h1>
                <div className={styles.tab}>
                    <input type="checkbox" name="acc" id="acc1" />
                    <label for="acc1">
                        <h2>01</h2>
                        <h3>How can I create a fundraising project on Athwela?</h3>
                    </label>
                    <div className={styles.answer}>
                        <p>To create a fundraising project, click on the "Start fundraising" button on the homepage, 
                            fill out the required details, and submit for verification. 
                            Once approved, your project will be visible to potential donors.
                        </p>
                    </div>
                </div>

                <div className={styles.tab}>
                    <input type="checkbox" name="acc" id="acc2" />
                    <label for="acc2">
                        <h2>02</h2>
                        <h3>How does Athwela ensure the authenticity of fundraising projects?</h3>
                    </label>
                    <div className={styles.answer}>
                        <p>Athwela verifies each project through a detailed screening process. 
                            This includes checking submitted documents, 
                            the creator’s identity, and the project’s purpose to build donor trust.
                        </p>
                    </div>
                </div>

                <div className={styles.tab}>
                    <input type="checkbox" name="acc" id="acc3" />
                    <label for="acc3">
                        <h2>03</h2>
                        <h3>How can I track the impact of my donation?</h3>
                    </label>
                    <div className={styles.answer}>
                        <p>You can track the impact of your donation by visiting the project page. 
                            Updates about the project's progress and the utilization of funds are 
                            regularly shared by the project creators.
                        </p>
                    </div>
                </div>

                <div className={styles.tab}>
                    <input type="checkbox" name="acc" id="acc4" />
                    <label for="acc4">
                        <h2>04</h2>
                        <h3>How can I find projects that align with my interests?</h3>
                    </label>
                    <div className={styles.answer}>
                        <p>Any questions regarding projects can be clarified through the chatbot. 
                            Simply ask the chatbot to recommend projects based on your interests or causes you’d like to support.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.form_overlay} id="contact">
                <h2>Contact Us</h2>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </section>
        </section>
        // </div>
    );
};

export default HelpPage;