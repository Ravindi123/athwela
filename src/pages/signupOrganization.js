import React from 'react';
import '../styles/signup.css';

const SignupOrganization = () => {
    return (
        <section>
            <div className="form_box">
                <div className="form_value">
                    <form>
                        <h2>Sign Up</h2>
                        
                        <div className="inputbox">
                            <ion-icon name="letter-outline"></ion-icon>
                            <input type="text" id="name" required />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="card-outline"></ion-icon>
                            <input type="number" id="org-id" required />
                            <label htmlFor="org-id">Organization ID</label>
                        </div>

                        <div className="inputbox">
                            <select id="organization-type" required>
                                <option>Childrens' Home</option>
                                <option>Adults' Home</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="number" id="mobile" required />
                            <label htmlFor="mobile">Mobile Number</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" id="password" required />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="forget">
                            <label>
                                <input type="checkbox" id="remember-me" /> I Agree to <a href="#">All Terms and Conditions</a>.
                            </label>
                        </div>

                        <button className="submit" type="button" onClick={() => window.location.href='index.html'}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupOrganization;
