import React, {useState} from 'react';
import styles from '../styles/signup.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db } from '../firebase'; 
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const SignupOrganization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [mobile, setMobile] = useState('');
    const [organizationType, setOrganizationType] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!/^\d{10}$/.test(mobile)) {
            toast.error("Mobile number must be exactly 10 digits long",{position: "top-center", hideProgressBar: true});
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                let collectionName = "Other"; 
                if (organizationType === "Children's Home") {
                    collectionName = "Children's Home";
                } else if (organizationType === "Adults' Home") {
                    collectionName = "Adults' Home";
                }

                await setDoc(doc(db, collectionName, user.uid), {
                    name: name,
                    id: id,
                    mobile: mobile,
                    email: user.email,
                });

                toast.success("User registered successfully", {position: "top-center", hideProgressBar: true});
            }
        } catch (error) {
            console.error("Error registering user: ", error.message);
            toast.error(`Error: ${error.message}`, {position: "top-center", hideProgressBar: true});
        }
    };

    return (
        <section className={styles.signup_container}>
            <div className={styles.form_box}>
                <div className={styles.form_value}>
                    <form onSubmit={handleRegister}>
                        <h2>Sign Up</h2>
                        <div className={styles.inputbox}>
                            <ion-icon name="letter-outline"></ion-icon>
                            <input type="text" id="name" required onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="card-outline"></ion-icon>
                            <input type="number" id="org-id" required onChange={(e) => setID(e.target.value)} />
                            <label htmlFor="org-id">Organization ID</label>
                        </div>

                        <div className={styles.inputbox} onChange={(e) => setOrganizationType(e.target.value)}>
                            <select id="organization-type" required>
                                <option value="">Select Organization Type</option>
                                <option value="Children's Home">Children's Home</option>
                                <option value="Adults' Home">Adults' Home</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="number" id="mobile" required pattern="\d{10}" title="Mobile number must be 10 digits" onChange={(e) => setMobile(e.target.value)} />
                            <label htmlFor="mobile">Mobile Number</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className={styles.forget}>
                            <label>
                                <input type="checkbox" id="remember-me" /> I Agree to All Terms and Conditions.
                            </label>
                        </div>

                        <button className={styles.submit} type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupOrganization;

