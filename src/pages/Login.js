
// import React from 'react';
// import styles from '../styles/login.module.css';

// const Login = () => {
//     return (
//         <section class="container">
//         <div class="form_box">
//             <div class="form_value">
//                 <form>
//                     <h2>Login</h2>
//                     <div class="inputbox">
//                         <ion-icon name="mail-outline"></ion-icon>
//                         <input type="email" id="email" required/>
//                         <label for="email">Email</label>
//                     </div>
//                     <div class="inputbox">
//                         <ion-icon name="lock-closed-outline"></ion-icon>
//                         <input type="password" id="password" required/>
//                         <label for="password">Password</label>
//                     </div>
//                     <div class="forget">
//                         <label><input type="checkbox" id="remember-me"/> Remember Me</label>
//                         <a href="#">Forgot Password</a>
//                     </div>
//                     <button class="submit" type="button" onclick="window.location.href='projectRegistration.html'">Log In</button>
//                     {/* <button type="submit">Log In</button> */}
//                     <div class="register">
//                         <p>Don't have an account? <a href="select.html">Sign Up</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </section>
//     );
// };

// export default Login;

import React, {useState} from 'react';
import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            window.location.href = "/home";
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.form_box}>
                <div className={styles.form_value}>
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className={styles.inputbox}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={styles.inputbox}>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" id="password" required  onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.forget}>
                            <label><input type="checkbox" id="remember-me" /> Remember Me</label>
                            <a href="#">Forgot Password</a>
                        </div>
                        <button className={styles.submit} type="submit">Log In</button>
                        {/* <button type="submit">Log In</button> */}
                        <div className={styles.register}>
                            <p>Don't have an account? <Link to="select">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
