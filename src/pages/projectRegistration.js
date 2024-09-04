import React, { useState } from 'react';
import styles from '../styles/projectRegistration.module.css';
import { db, storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProjectRegistration = () => {
    const [projectName, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [raised, setRaised] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tel, setTel] = useState('');
    const [images, setImages] = useState([]);
    const [evidence, setEvidence] = useState(null);
    const [bankDetails, setBankDetails] = useState('');
    
    // const storage = getStorage();

    const handleProject = async(e) => {
        e.preventDefault();
        try {
            // Upload images to Firebase Storage
            const imageUrls = await Promise.all(
                [...images].map(async (image) => {
                    const imageRef = ref(storage, 'images/${image.name}');
                    await uploadBytes(imageRef, image);
                    return await getDownloadURL(imageRef);
                })
            );

            // Upload evidence document to Firebase Storage
            let evidenceUrl = '';
            if (evidence) {
                const evidenceRef = ref(storage, 'evidence/${evidence.name}');
                await uploadBytes(evidenceRef, evidence);
                evidenceUrl = await getDownloadURL(evidenceRef);
            }

            // Store project details in Firestore
            await setDoc(doc(db, "projects", projectName), {
                projectName,
                description,
                amount,
                raised,
                deadline,
                tel,
                images: imageUrls,
                evidence: evidenceUrl,
                bankDetails,
            });

            console.log("Project registered and data stored successfully");
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleEvidenceChange = (e) => {
        setEvidence(e.target.files[0]);
    };

    return (
        <section className={styles.form_container}>
            <h2>Register Your Fundraising Project</h2>
            <form onSubmit={handleProject}>
                {/* Form Fields */}
                <div className={styles.form_group}>
                    <label htmlFor="project-name">Project Name:</label>
                    <input type="text" id="project-name" name="project-name" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="description">Brief Description:</label>
                    <textarea id="description" name="description" rows="4" required onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="amount">Amount to Raise:</label>
                    <input type="number" id="amount" name="amount" required onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="raised">Amount Raised So Far:</label>
                    <input type="number" id="raised" name="raised" required onChange={(e) => setRaised(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" id="deadline" name="deadline" required onChange={(e) => setDeadline(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">Telephone Number:</label>
                    <input type="tel" id="phone" name="phone" required onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="images">Images:</label>
                    <input type="file" id="images" name="images" accept="image/*" multiple required onChange={handleImageChange} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="evidence">Evidence Document:</label>
                    <input type="file" id="evidence" name="evidence" accept=".pdf,.doc,.docx" required onChange={handleEvidenceChange} />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="bank-details">Bank Details:</label>
                    <textarea id="bank-details" name="bank-details" rows="2" required onChange={(e) => setBankDetails(e.target.value)}></textarea>
                </div>
                <div className={styles.form_check}>
                    <div className={styles.checkboxContainer}>
                        <input className={styles.form_check_input} type="checkbox" value="" id="flexCheckCheckedDisabled" required />
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