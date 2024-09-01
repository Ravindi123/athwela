// import React from 'react';
// import styles from '../styles/signup.module.css';

// const SignupOrganization = () => {
//     return (
//         <section className={styles.signup_container}>
//             <div className={styles.form_box}>
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
//                             <input type="number" id="org-id" required />
//                             <label htmlFor="org-id">Organization ID</label>
//                         </div>

//                         <div className="inputbox">
//                             <select id="organization-type" required>
//                                 <option>Childrens' Home</option>
//                                 <option>Adults' Home</option>
//                                 <option>Other</option>
//                             </select>
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
//                                  <input type="checkbox" id="remember-me" /> I Agree to {/*<a href="#">All Terms and Conditions</a>. */}
//                             </label>
//                         </div>

//                         <button className="submit" type="button" onClick={() => window.location.href='index.html'}>
//                             Sign Up
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SignupOrganization;
import React, {useState} from 'react';
import styles from '../styles/signup.module.css';

const SignupOrganization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [mobile, setMobile] = useState('');
    
    return (
        <section className={styles.signup_container}>
            <div className={styles.form_box}>
                <div className={styles.form_value}>
                    <form>
                        <h2>Sign Up</h2>
                        
                        <div className={styles.inputbox}>
                            <ion-icon name="letter-outline"></ion-icon>
                            <input type="text" id="name" required onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="card-outline"></ion-icon>
                            <input type="number" id="org-id" required onChange={(e) => setID(e.target.value)}/>
                            <label htmlFor="org-id">Organization ID</label>
                        </div>

                        <div className={styles.inputbox}>
                            <select id="organization-type" required>
                                <option>Children's Home</option>
                                <option>Adults' Home</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles.inputbox}>
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="number" id="mobile" required onChange={(e) => setMobile(e.target.value)}/>
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

                        <button className={styles.submit} type="button" onClick={() => window.location.href='index.html'}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupOrganization;

