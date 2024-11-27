import React, { useState, useEffect } from 'react';
import styles from '../styles/donationBox.module.css';
import { auth, db } from '../firebase';
import moment from 'moment';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import {useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const DonationBox = () => {
    const [amount, setAmount] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    const today = moment().format('YYYY-MM-DD');
    const location = useLocation();
    const navigate = useNavigate();
    const { projectID, collectionName } = location.state;

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                console.log(projectID, collectionName);
                const projectRef = doc(db, collectionName, projectID);
                const projectSnap = await getDoc(projectRef);
                console.log(projectSnap.data());
                
                if (projectSnap.exists()) {
                    setProjectDetails(projectSnap.data());
                } else {
                    console.log("No such project!");
                    // toast.error("Project not found");
                    // navigate('/');
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
                // toast.error("Error loading project details");
            }
        };

        fetchProjectDetails();
    }, [projectID, collectionName, navigate]);

    const sendEmailNotification = async (userEmail, userName, isOwner = false) => {
        try {
            let emailBody;
            if (collectionName === "Children's Home" || collectionName === "Adults Home") {
                emailBody = isOwner ?
                    `Dear home owner,\n\nYou have received a new donation of Rs.${amount} from ${userName} for your ${collectionName} (Name: ${projectDetails?.homeName}).\n\nBest regards,\nAthwela Team` :
                    `Dear donor,\n\nThank you for your generous donation of Rs.${amount} to ${collectionName} (Name: ${projectDetails?.homeName}).\n\nYour support helps us make a difference.\n\nBest regards,\nAthwela Team`;
            } else {
                emailBody = isOwner ? 
                    `Dear project owner,\n\nYou have received a new donation of Rs.${amount} from ${userName} for your ${collectionName} project (Name: ${projectDetails?.projectName}).\n\nBest regards,\nAthwela Team` :
                    `Dear donor,\n\nThank you for your generous donation of Rs.${amount} to ${collectionName} project (Name: ${projectDetails?.projectName}).\n\nYour support helps us make a difference.\n\nBest regards,\nAthwela Team`;
            }

            const emailData = {
                receiver_email: userEmail,
                subject: isOwner ? "New donation received!" : "Thank you for your donation!",
                body: emailBody
            };

            const response = await axios.post('http://localhost:8001/send-email', emailData);
            console.log('Email notification sent:', response.data);
        } catch (error) {
            console.error('Error sending email notification:', error);
        }
    };

    const handleDonation = async (e) => {
        e.preventDefault();

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);

                try {
                    await updateDoc(userDocRef, {
                        donations: [...(user.donations || []), { 
                            type: collectionName, 
                            project: projectID, 
                            date: today, 
                            amount: amount 
                        }]
                    });
                    console.log('Donation recorded successfully');
                    
                    // Send email notification to donor
                    await sendEmailNotification(user.email,user.name);

                    // Send email notification to project owner
                    const ownerRef = doc(db, "users", projectDetails.owner);
                    const ownerSnap = await getDoc(ownerRef);
                    if (ownerSnap.exists()) {
                        await sendEmailNotification(ownerSnap.data().email,user.name, true);
                    }
                    
                    // Show success toast and navigate to home
                    toast.success('Donation successful! Thank you for your contribution!');
                    navigate('/');
                    
                } catch (error) {
                    console.error('Error recording donation: ', error);
                    toast.error('Failed to process donation. Please try again.');
                }
            } else {
                console.log('No user is logged in');
                toast.error('Please login to make a donation');
            }
        });
    };

    return (
        <section className={styles.donationBox}>
            <form className={styles.donation_container} onSubmit={handleDonation}>
                <div className={styles.donation_header}>
                    <h1>{projectDetails?.projectName}</h1>
                </div>
                <div className={styles.donation_options}>
                    <button type="button" className={styles.active}>Give once</button>
                    <button type="button">Monthly</button>
                </div>
                <div className={styles.amount_options}>
                    <button type="button" onClick={() => setAmount(12000)}>Rs 12K</button>
                    <button type="button" onClick={() => setAmount(6000)}>Rs 6,000</button>
                    <button type="button" onClick={() => setAmount(3500)}>Rs 3,500</button>
                    <button type="button" onClick={() => setAmount(3000)}>Rs 3,000</button>
                    <button type="button" onClick={() => setAmount(2500)}>Rs 2,500</button>
                    <button type="button" className={styles.active} onClick={() => setAmount(2000)}>Rs 2,000</button>
                </div>
                <div className={styles.custom_amount}>
                    <input classname={styles.value} type="number" placeholder="Rs.2000" onChange={(e) => setAmount(parseInt(e.target.value, 10))} />
                    <select className='currency'>
                        <option value="LKR">LKR</option>
                        <option value="USD">Dollars</option>
                    </select>
                </div>
                <div className={styles.dedicate_option}>
                    <input type="checkbox" id="dedicate"/>
                    <label htmlFor="dedicate">Dedicate this donation</label>
                </div>
                <button className={styles.donate_button} type="submit" >DONATE NOW</button>
            </form>
        </section>
    );
};

export default DonationBox;

//npm install axios