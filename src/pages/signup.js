import React from 'react';
import '../styles/signup.css';

const signup = () => {
    return (
        <section className = "signup_container">
        <div class="form-box">
            <div class="form-value">
                <form>
                    <h2>Sign Up</h2>
                    <div class="inputbox">
                        <ion-icon name="letter-outline"></ion-icon>
                        <input type={text} id="email" required></input>
                        <label for="email">Name</label>
                    </div><div class="inputbox">
                        <ion-icon name="card-outline"></ion-icon>
                        <input type={number} id="email" required></input>
                        <label for="email">NIC Number</label>
                    </div><div class="inputbox">
                        <ion-icon name="call-outline"></ion-icon>
                        <input type={number} id="email" required></input>
                        <label for="email">Mobile Number</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" id="email" required></input>
                        <label for="email">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required></input>
                        <label for="password">Password</label>
                    </div>
                    <div class="forget">
                        <label><input type="checkbox" id="remember-me"> I Agree to <a href="#">All Terms and Conditions</a>.</input></label>
                        
                    </div>
                 
                    <button class="submit" type="button" onclick="window.location.href='index.html'">Sign Up</button>
                    
                </form>
            </div>
        </div>
    </section>
    );
};

export default Login;