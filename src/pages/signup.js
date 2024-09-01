// // import React from 'react';
// // import '../styles/signup.css';

// // const Signup = () => {
// //     return (
// //         <section className = "signup_container">
// //         <div class="form_box">
// //             <div class="form_value">
// //                 <form>
// //                     <h2>Sign Up</h2>
// //                     <div class="inputbox">
// //                         <ion-icon name="letter-outline"></ion-icon>
// //                         <input type="name" id="name" required/>
// //                         <label for="name">Name</label>
// //                     </div><div class="inputbox">
// //                         <ion-icon name="card-outline"></ion-icon>
// //                         <input type="nic" id="nic" required/>
// //                         <label for="nic">NIC Number</label>
// //                     </div><div class="inputbox">
// //                         <ion-icon name="call-outline"></ion-icon>
// //                         <input type="phone" id="phone" required/>
// //                         <label for="phone">Mobile Number</label>
// //                     </div>
// //                     <div class="inputbox">
// //                         <ion-icon name="mail-outline"></ion-icon>
// //                         <input type="email" id="email" required/>
// //                         <label for="email">Email</label>
// //                     </div>
// //                     <div class="inputbox">
// //                         <ion-icon name="lock-closed-outline"></ion-icon>
// //                         <input type="password" id="password" required/>
// //                         <label for="password">Password</label>
// //                     </div>
// //                     <div class="forget">
// //                         <label><input type="checkbox" id="remember-me"> I Agree to <a href="#">All Terms and Conditions</a>.</input></label>
                        
// //                     </div>
                 
// //                     <button class="submit" type="button" onclick="window.location.href='index.html'">Sign Up</button>
                    
// //                 </form>
// //             </div>
// //         </div>
// //     </section>
//     );
// };

// export default Signup;
// import React from 'react';
// import styles from '../styles/signup.module.css';

// const Signup = () => {
//     return (
//         <section className="signup_container">
//             <div className="form_box">
//                 <div className="form_value">
//                     <form>
//                         <h2>Sign Up</h2>
                        
//                         <div className="inputbox">
//                             <ion-icon name="letter-outline"></ion-icon>
//                             <input type="text" id="name" required />
//                             <label htmlFor="name">Name</label>
//                         </div>

//                         <div className="inputbox">
//                             <ion-icon name="card-outline"></ion-icon>
//                             <input type="number" id="nic" required />
//                             <label htmlFor="nic">NIC Number</label>
//                         </div>

//                         <div className="inputbox">
//                             <ion-icon name="call-outline"></ion-icon>
//                             <input type="number" id="mobile" required />
//                             <label htmlFor="mobile">Mobile Number</label>
//                         </div>

//                         <div className="inputbox">
//                             <ion-icon name="mail-outline"></ion-icon>
//                             <input type="email" id="email" required />
//                             <label htmlFor="email">Email</label>
//                         </div>

//                         <div className="inputbox">
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                             <input type="password" id="password" required />
//                             <label htmlFor="password">Password</label>
//                         </div>

//                         <div className="forget">
//                             <label>
//                                 <input type="checkbox" id="remember-me" /> I Agree to <a href="#">All Terms and Conditions</a>.
//                             </label>
//                         </div>

//                         <button className="submit" type="button" onClick={() => window.location.href = 'index.html'}>Sign Up</button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Signup;
import React, {useState} from 'react';
import styles from '../styles/signup.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db } from '../firebase'; 
import { setDoc, doc } from 'firebase/firestore';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [mobile, setMobile] = useState('');
    
    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log("User registered successfully");
        } catch (error) {
            console.log(error.message);
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
                            <input type="number" id="nic" required onChange={(e) => setNIC(e.target.value)}/>
                            <label htmlFor="nic">NIC Number</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="number" id="mobile" required onChange={(e) => setMobile(e.target.value)} />
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
                                {/* Should go to a terms and conditions page. to be updated later */}
                                <input type="checkbox" id="remember-me" /> I Agree to All Terms and Conditions.
                            </label>
                        </div>

                        <button className={styles.submit} type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
