import React from 'react';
import './header.css';


function Header() {
    return (
            <nav id="navbar">
                <h1 className="logi">
            <span className="text-primary">
                <a href='/'>مترجم</a>
            </span>
                </h1>
                <ul>
                    <li><a href='aboutUs'>معلومات عنا</a></li>
                    <li><a href='contactUs'>اتصل بنا</a></li>

                </ul>
            </nav>

    );
}

export default Header;
