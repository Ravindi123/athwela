import React from 'react';
import styles from '../styles/styles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to="home">
                <div className={styles.logo}>
                    <img src="/logo.jpg" alt="" />
                </div>
            </Link>
            <i className={`bx bx-menu ${styles.menuIcon}`} id="menu_icon"></i>
            <ul className={styles.navbar}>
                <li><Link to="home">Home</Link></li>
                <li><a href="/home#about">About us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><Link to="select">Sign Up</Link></li>
                <li><Link to="login">Log In</Link></li>
            </ul>
            <div className={styles.searchContainer}>
                <input type="text" id="search_input" placeholder="Search.." />
                <button id="search_btn">
                    <i className={`bx bx-search-alt ${styles.searchIcon}`} id="search_icon"></i>
                </button>
            </div>
        </>
    );
};

export default Navbar;
