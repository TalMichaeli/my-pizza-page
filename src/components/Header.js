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
                <a href="/" className={`logo-main ${isMenuOpen ? 'small-logo' : ''}`}>
                    <h1>LaPizza<span className="logo-dot">.</span></h1>
                </a>              
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/PizzatoEvents" onClick={closeMenu}>Pizza to Events</Link>
                <Link to="/PrivateChef" onClick={closeMenu}>Private Chef</Link>
                <Link to="/catering" onClick={closeMenu}>Catering</Link>
                <Link to="/PizzaInTheOven" onClick={closeMenu}>Pizza in the Oven</Link>
                <a href={`${process.env.PUBLIC_URL}/menu.pdf`} target="_blank" rel="noopener noreferrer" className="menu-link" onClick={closeMenu}>Menu</a>
            </nav>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
