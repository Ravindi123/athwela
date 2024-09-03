import React from 'react';
import '../styles/userProfile.css'; 

const UserProfile = () => {
    return (
        <section>
        <h1 className="dashboard_heading">My Dashboard</h1>
        <div className="main_content">
            {/* <div className="dashboard_wrapper"> */}
                <section className="left_panel">
                    <div className="profile_container">
                        <div className="profile_picture">
                            <img src="profile_pic.jpg" alt="Profile" />
                        </div>
                        <p className="name_of_user">RITHVIK RAJ</p>
                        <hr className="styled_line" />
                        <div className="profile_content">
                            <p className="info_title">Name</p>
                            <p className="info">13/01/1998</p>
                        </div>
                        <hr className="styled-line" />
                        <div className="profile_content">
                            <p className="info_title">Contact Number</p>
                            <p className="info">0773452769</p>
                        </div>
                        <hr className="styled-line" />
                        <div className="profile_content">
                            <p className="info_title">Email address</p>
                            <p className="info">rithvik@gmail.com</p>
                        </div>
                        <hr className="styled_line" />
                        {/* <div className="profile_content">
                            <p className="info_title">Residence</p>
                            <p className="info">
                                43,<br />3rd Lane,<br />Kawdana Road,<br />Dehiwela
                            </p>
                        </div> */}
                        {/* <hr className="styled_line" /> */}
                        <div className="logout_edit">
                            <button className="logout_button">Log Out</button>
                            <button className="edit_button">Edit</button>
                        </div>
                    </div>
                    <div className="donation_chart">
                    <div className="chart_info_wrapper">
                            <div className="chart_info">
                                <p className="summary">No of projects Contributed</p>
                                <p className="amount">12</p>
                            </div>
                            <div className="chart_info">
                                <p className="summary">Total Amount Donated</p>
                                <p className="amount">Rs 22,000.00</p>
                            </div>
                        </div>
                        <div className="chart">
                            <canvas id="donationChart"></canvas>
                        </div>

                    </div>
                </section>

                <section className="right_panel">

            {/* </div> */}

            {/* <section className="donation_history"> */}
                <h2>Donation History</h2>

                <div className="donation_made">
                    <img src="boy.jpg" alt="Trey's Surgery" className="donation_project_image" />
                    <div className="donation_project_info">
                        <p className="donation_project_title">Help Fund Trey's Life Changing Surgery</p>
                        <div className="donation_details">
                            <p className="donated_date">5/9/2024</p>
                            <p className="donated_amount">Rs.1000.00</p>
                        </div>
                    </div>
                </div>

                <div className="donation_made">
                    <img src="EldersHome.jpg" alt="Sahana Udaya Elders Home" className="donation_project_image" />
                    <div className="donation_project_info">
                        <p className="donation_project_title">Sahana Udaya Elders Home</p>
                        <div className="donation_details">
                            <p className="donated_date">2/8/2024</p>
                            <p className="donated_amount">Rs.1000.00</p>
                        </div>
                    </div>
                </div>

                <div className="donation_made">
                    <img src="oldman.jpg" alt="Sinusitis Surgery" className="donation_project_image" />
                    <div className="donation_project_info">
                        <p className="donation_project_title">Medical relief for Sinusitis Surgery</p>
                        <div className="donation_details">
                            <p className="donated_date">23/2/2024</p>
                            <p className="donated_amount">Rs.5000.00</p>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </section>
        </div>
    </section>
    );
};

export default UserProfile;
