import React from 'react';
import '../styles/styles.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to="home">
                <div class="logo">
                    <img src="/logo.jpg" alt="" />
                </div>
            </Link>

            <i class='bx bx-menu' id="menu-icon"></i>
            <ul class="navbar">
                <li><Link to="home">Home</Link></li>
                <li><a href="/home#about">About us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><Link to="signup">Sign Up</Link></li>
                <li><Link to="login">Log In</Link></li>
            </ul>
            <div class="search-container">
                <input type="text" id="search-input" placeholder="Search.." />
                <button id="search-btn">
                    <i class='bx bx-search-alt' id="search-icon"></i>
                </button>
            </div>
        </>
    );
};

export default Navbar;