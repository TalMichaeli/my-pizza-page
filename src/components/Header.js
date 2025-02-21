import React, { useState,useEffect  } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.nav') && !event.target.closest('.menu-icon')) {
                closeMenu();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);
    return (
        <header className="header">
            <div className="logo-text">
                <Link to="/" className={`logo-main ${isMenuOpen ? 'small-logo' : ''}`}>
                    <h1>LaPizza<span className="logo-dot">.</span></h1>
                </Link>            
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <a href={`${process.env.PUBLIC_URL}/Menu.pdf`} target="_blank" rel="noopener noreferrer"  onClick={closeMenu}>תפריט</a>
                <Link to="/" onClick={closeMenu}>בית</Link>
                <Link to="/PizzatoEvents" onClick={closeMenu}>דוכן פיצות לאירועים </Link>
                <Link to="/PrivateChef" onClick={closeMenu}>שף פרטי</Link>
                <Link to="/catering" onClick={closeMenu}>קייטרניג</Link>
                <Link to="/PizzaInTheOven" onClick={closeMenu}>פיצות בטאבון לאירועים</Link>
                
            </nav>
            <div className={`menu-icon ${isMenuOpen ? 'menu-icon-small' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
