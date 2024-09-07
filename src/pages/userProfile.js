import React, { useEffect, useState } from 'react';
import '../styles/userProfile.css';
import { auth, db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [donationHistory, setDonationHistory] = useState([]);
    const [campaignHistory, setCampaignHistory] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    try {
                        // Fetch user details
                        const userDocRef = doc(db, 'users', user.uid);
                        const userDocSnap = await getDoc(userDocRef);
                        if (userDocSnap.exists()) {
                            setUserDetails(userDocSnap.data());

                            // Fetch donations
                            const donationsArray = userDocSnap.data().donations || [];
                            setDonationHistory(donationsArray);

                            //Fetch campaigns
                            const campaignsArray = userDocSnap.data().campaigns || [];
                            setCampaignHistory(campaignsArray);

                            

                        } else {
                            toast.error('User not found');
                        }
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                        toast.error('Failed to fetch user data');
                    }
                } else {
                    toast.error('No user is logged in');
                }
            });
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = '/home';
            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Error logging out:', error);
            toast.error('Failed to log out');
        }
    };

    return (
        <section>
            <h1 className="dashboard_heading">My Dashboard</h1>
            {userDetails ? (
                <div className="main_content">
                    <div className="left_panel">
                        <div className="profile_container">
                            <div className="profile_picture">
                                <img src="userprofile.jpg" alt="Profile" />
                            </div>
                            <p className="name_of_user">{userDetails.name}</p>
                            <hr className="styled_line" />
                            <div className="profile_content">
                                <p className="info_title">Name</p>
                                <p className="info">{userDetails.name}</p>
                            </div>
                            <hr className="styled_line" />
                            <div className="profile_content">
                                <p className="info_title">Contact Number</p>
                                <p className="info">{userDetails.mobile}</p>
                            </div>
                            <hr className="styled_line" />
                            <div className="profile_content">
                                <p className="info_title">Email address</p>
                                <p className="info">{userDetails.email}</p>
                            </div>
                            <hr className="styled_line" />
                            <div className="logout_edit">
                                <button className="logout_button" onClick={handleLogout}>Log Out</button>
                                <button className="edit_button">Edit</button>
                            </div>
                        </div>
                        <div className="donation_chart">
                            <div className="chart_info_wrapper">
                                <div className="chart_info">
                                    <p className="summary">No. of projects Contributed</p>
                                    <p className="amount">{donationHistory.length}</p>
                                </div>
                                <div className="chart_info">
                                    <p className="summary">Total Amount Donated</p>
                                    <p className="amount">Rs {donationHistory.reduce((total, donation) => total + Number(donation.amount), 0).toFixed(2)}</p>
                                </div>
                                <div className="chart_info">
                                    <p className="summary">No.of campaigns created</p>
                                    <p className="amount">{campaignHistory.length}</p>
                                </div>
                                <div className="chart_info">
                                    <p className="summary">Total Amount Raised</p>
                                    <p className="amount">Rs {campaignHistory.reduce((total, campaign) => total + Number(campaign.amount), 0).toFixed(2)}</p>
                                </div>
                            </div>
                            {/* <div className="chart">
                                <canvas id="donationChart"></canvas>
                            </div> */}
                        </div>
                    </div>
                    <div className="right_panel">
                        <div className="part">
                            <h2>Donation History</h2>
                            {donationHistory.length > 0 ? (
                                donationHistory.map((donation, index) => (
                                    <div className="project" key={index}>
                                        <img src="boy.jpg" alt={donation.name} className="project_image" />
                                        <div className="project_info">
                                            <p className="project_title">{donation.name}</p>
                                            <div className="details">
                                                <p className="project_date">{donation.date}</p>
                                                <p className="amount">Rs.{donation.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no_content">No donations made yet.</p>
                            )}
                        </div>
                        <div className="part">
                            <h2>Campaign History</h2>
                            {campaignHistory.length > 0 ? (
                                campaignHistory.map((campaign, index) => (
                                    <div className="project" key={index}>
                                        <img src={campaign.project.images} alt={campaign.name} className="project_image" />
                                        <div className="project_info">
                                            <p className="project_title">{campaign.name}</p>
                                            <div className="details">
                                                <p className="project_date">{campaign.date}</p>
                                                <p className="project_amount">Rs.{campaign.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no_content">No campaigns created.</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default UserProfile;
