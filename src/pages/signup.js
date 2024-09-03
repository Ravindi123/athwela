import React, {useState} from 'react';
import styles from '../styles/signup.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; 
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [mobile, setMobile] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    
    const handleRegister = async(e) => {
        e.preventDefault();
        console.log("Checkbox checked:", isChecked);
        if (!/^\d{10}$/.test(mobile)) {
            toast.error("Mobile number must be exactly 10 digits long", { position: "top-center", hideProgressBar: true });
            return;
        }

        var isChecked = document.getElementById("checkbox").checked;

        if (isChecked == false) {
            toast.error("You must agree to the terms and conditions before signing up.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    nic: nic,
                    mobile: mobile,
                    email: user.email,
                });
            }
            console.log("User registered successfully");
            toast.success("User registered successfully");
        } catch (error) {
            console.log(error.message);
            toast.error(`Error: ${error.message}`);
        }
    }

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
                            <input type="text" id="nic" required onChange={(e) => setNIC(e.target.value)} />
                            <label htmlFor="nic">NIC Number</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="text" id="mobile" required pattern="\d{10}" title="Mobile number must be 10 digits" onChange={(e) => setMobile(e.target.value)} />
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
                                {/* Should go to a terms and conditions page. To be updated later */}
                                <input type="checkbox" id="checkbox" /> <a >I Agree to All Terms and Conditions.</a>
                            </label>
                        </div>

                        <button className={styles.submit} type="submit" >Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
