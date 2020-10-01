import React from 'react';
import './header.css';


function Header() {
    return (
            <nav id="navbar">
                <h1 className="logi">
            <span className="text-primary">
               Translator
            </span>
                </h1>
                <ul>
                    <li><a href='aboutUs'>About Us</a></li>
                    <li><a href='contactUs'>Contact Us</a></li>

                </ul>
            </nav>

    );
}

export default Header;
