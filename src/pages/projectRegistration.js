import React, { useState } from 'react';
import styles from '../styles/projectRegistration.module.css';
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 

const ProjectRegistration = () => {

    const [projectName, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [raised, setRaised] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tel, setTel] = useState('');
    const [images, setImage] = useState('');
    const [evidence, setEvidence] = useState('');
    const [bankDetails, setBankDetails] = useState('');

    const handleProject = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "projects", user.uid), {
                    projectName: projectName,
                    description: description,
                    amount: amount,
                    raised: raised,
                    deadline: deadline,
                    tel: tel,
                    images: images,
                    evidence: evidence,
                    bankDetails: bankDetails,
                    userId: user.uid,
                    createdAt: new Date(),
                });

                console.log("Project registered successfully");
            } else {
                console.log("No user is logged in");
            }
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <section className={styles.form_container}>
            <h2>Register Your Fundraising Project</h2>
            <form /*action="#" method="post" enctype="multipart/form-data"*/ onSubmit={handleProject}>
    
                <div className={styles.radioGroup}>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"  />
                        <label className={styles.form_check_label} htmlFor="inlineRadio1">Children's Home</label>
                    </div>
                    <div className={styles.form_group_tick}>
                        <input className={styles.form_check_input} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className={styles.form_check_label} htmlFor="inlineRadio2">Adult's Home</label>
                    </div>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="project-name">Project Name:</label>
                    <input type="text" id="project-name" name="project-name" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="description">Brief Description:</label>
                    <textarea id="description" name="description" rows="4" required onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="amount">Amount to Raise:</label>
                    <input type="number" id="amount" name="amount" required onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="raised">Amount Raised So Far:</label>
                    <input type="number" id="raised" name="raised" required onChange={(e) => setRaised(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" id="deadline" name="deadline" required onChange={(e) => setDeadline(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">Telephone Number:</label>
                    <input type="tel" id="phone" name="phone" required onChange={(e) => setTel(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="images">Images:</label>
                    <input type="file" id="images" name="images" accept="image/*" multiple  onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="evidence">Evidence Document:</label>
                    <input type="file" id="evidence" name="evidence" accept=".pdf,.doc,.docx"  onChange={(e) => setEvidence(e.target.value)}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="bank-details">Bank Details:</label>
                    <textarea id="bank-details" name="bank-details" rows="2" required onChange={(e) => setBankDetails(e.target.value)}></textarea>
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