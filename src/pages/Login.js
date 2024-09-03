import React, {useState} from 'react';
import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            window.location.href = "/home";
            toast.success("User logged in successfully", {position: "top-center", hideProgressBar: true});
        } catch (error) {
            console.log(error);
            toast.error("Login failed: Invalid credentials", {position: "bottom-center", hideProgressBar: true});
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
