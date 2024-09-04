// import React from 'react';
// import styles from '../styles/styles.module.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <>
//             <a href="#" class="logo">
//             <img src="/logo.jpg" alt=""/>
//         </a>
//         <i class='bx bx-menu' id="menu-icon"></i>
//         <ul class="navbar">
//             <li><Link to="home">Home</Link></li>
//             <li><a href="/home#about">About us</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><Link to="select">Sign Up</Link></li>
//             <li><Link to="login">Log In</Link></li>
//         </ul>
//         <div class="search-container">
//             <input type="text" id="search-input" placeholder="Search.."/>
//             <button id="search-btn">
//                 <i class='bx bx-search-alt' id="search-icon"></i>
//             </button>
//         </div>
//         </>
//     );
// };

// export default Navbar;
import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/styles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const navBtn = useRef('')

    const toggleMenu = () => {
        setShowNav(!showNav);
    }



    useEffect(() => {
        if(!navBtn) return;
        const handleClick = (e) => {
            if(!navBtn.current.contains(e.target)){
                setShowNav(false);
            }
        }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    })
    
    return (
        <>
            <Link to="home" style={{zIndex : 10}}>
                <div className={styles.logo} style={{zIndex : 10}}>
                    <img src="/logo.jpg" alt="" />
                </div>
            </Link>
            <i className={`bx bx-menu ${styles.menuIcon}`} ref={navBtn} style={{zIndex : 10}} id="menu_icon" onClick={toggleMenu}></i>
            <ul className={styles.navbar} style={{top : `${showNav ? '70px' : '-570px'}`, zIndex : 5}}>
                <li><Link to="home">Home</Link></li>
                <li><a href="/home#about">About us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><Link to="select">Sign Up</Link></li>
                <li><Link to="login">Log In</Link></li>
            </ul>
            <div className={styles.searchContainer} style={{zIndex : 10}}>
                <input type="text" id="search_input" placeholder="Search.." />
                <button id="search_btn">
                    <i className={`bx bx-search-alt ${styles.searchIcon}`} id="search_icon"></i>
                </button>
            </div>
        </>
    );
};

export default Navbar;
