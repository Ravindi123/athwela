import React from 'react';
import '../styles/login.css';

const Login = () => {
    return (
        <section class="container">
        <div class="form_box">
            <div class="form_value">
                <form>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" id="email" required/>
                        <label for="email">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required/>
                        <label for="password">Password</label>
                    </div>
                    <div class="forget">
                        <label><input type="checkbox" id="remember-me"/> Remember Me</label>
                        {/* <a href="#"> */}
                            Forgot Password
                            {/* </a> */}
                    </div>
                    <button class="submit" type="button" onclick="window.location.href='projectRegistration.html'">Log In</button>
                    {/* <button type="submit">Log In</button> */}
                    <div class="register">
                        <p>Don't have an account? <a href="select.html">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Login;