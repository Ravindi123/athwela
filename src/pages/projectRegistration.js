import React from 'react';
import styles from '../styles/projectRegistration.module.css';

const ProjectRegistration = () => {
    return (
        <section className={styles.form_container}>
            <h2>Register Your Fundraising Project</h2>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className={styles.radioGroup}>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className={styles.form_check_label} htmlFor="inlineRadio1">Children's Home</label>
                    </div>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className={styles.form_check_label} htmlFor="inlineRadio2">Adult's Home</label>
                    </div>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="project-name">Project Name:</label>
                    <input type="text" id="project-name" name="project-name" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="description">Brief Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="amount">Amount to Raise:</label>
                    <input type="number" id="amount" name="amount" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="raised">Amount Raised So Far:</label>
                    <input type="number" id="raised" name="raised" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" id="deadline" name="deadline" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">Telephone Number:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="images">Images:</label>
                    <input type="file" id="images" name="images" accept="image/*" multiple required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="evidence">Evidence Document:</label>
                    <input type="file" id="evidence" name="evidence" accept=".pdf,.doc,.docx" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="bank-details">Bank Details:</label>
                    <textarea id="bank-details" name="bank-details" rows="2" required></textarea>
                </div>
                <div className={styles.form_check}>
                    <div className={styles.checkboxContainer}>
                        <input className={styles.form_check_input} type="checkbox" value="" id="flexCheckCheckedDisabled" />
                        <label className={styles.form_check_label} htmlFor="flexCheckCheckedDisabled">
                            I hereby declare that the information provided is accurate.
                        </label>
                    </div>
                </div>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        </section>

    );
}

export default ProjectRegistration;
