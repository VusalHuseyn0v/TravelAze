import React, { useState, useEffect } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import './Navbar.css';

const Navbar = ({ scrollToTop }) => {
    const [active, setActive] = useState('navBar');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.className = theme;
        const navbar = document.querySelector('.navBarSection');
        if (navbar) {
            navbar.className = `navBarSection ${theme}`;
        }
    }, [theme]);


    const showNav = () => {
        setActive('navBar activeNavbar');
    };


    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className={`navBarSection ${theme}`}>

            <header className={`header flex ${theme}`}>
                <div className='logoDiv'>
                    <Link to="/"
                        onClick={() => {
                            scrollToTop();
                            removeNavbar();
                        }}
                        className='logo flex'>
                        <h1> <MdOutlineTravelExplore
                            className="icon" />
                            TravelAZE
                        </h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <NavLink
                                className='navLink'
                                to="/"
                                onClick={() => {
                                    scrollToTop();
                                    removeNavbar();
                                }}>
                                Home
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink
                                className='navLink'
                                to="/about"
                                onClick={() =>
                                    removeNavbar()}>
                                About
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink
                                className='navLink'
                                to="/contact"
                                onClick={() =>
                                    removeNavbar()}>
                                Contact
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <button onClick={() => {
                                toggleTheme();
                                removeNavbar();
                            }}
                                className="theme-toggle-btn">
                                {theme === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
                            </button>
                        </li>
                    </ul>

                    <div onClick={removeNavbar}
                        className='closeNavbar'>
                        <IoIosCloseCircle
                            className='icon' />
                    </div>
                </div>

                <div onClick={showNav}
                    className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>

        </section>
    );
}

export default Navbar;
