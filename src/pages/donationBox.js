import React from 'react';
import styles from '../styles/donationBox.module.css';

const DonationBox = () => {

    return (
        <section>
        <div className={styles.donation_container} >
            <div className={styles.donation_header}>
                <h1>Secure Donation</h1>
            </div>
            <div className={styles.donation_options}>
                <button className={styles.active}>Give once</button>
                <button>Monthly</button>
            </div>
            <div className={styles.amount_options}>
                <button>Rs 12K</button>
                <button>Rs 6,000</button>
                <button>Rs 3,500</button>
                <button>Rs 3,000</button>
                <button>Rs 2,500</button>
                <button className={styles.active}>Rs 2,000</button>
            </div>
            <div className={styles.custom_amount}>
                <input type="text" placeholder="Rs.2000"/>
                <select>
                    <option value="LKR">LKR</option>
                    <option value="LKR">Dollars</option>
                </select>
            </div>
            <div className={styles.dedicate_option}>
                <input type="checkbox"/>
                <label>Dedicate this donation</label>
            </div>
            <button className={styles.donate_button}>DONATE NOW</button>
        </div>
    </section>
    );
};

export default DonationBox;
