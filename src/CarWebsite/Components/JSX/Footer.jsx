

import React from 'react';
import '../CSS/Footer.css';
import FooterImage from '../../../../public/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section'>
                    <img src={FooterImage} alt="Logo" className='footer-image'></img>
                    <h2 className='footer-logo'>AutoLink</h2>
                    <p className='footer-description'>Your trusted marketplace for quality vehicles. Find your dream car today</p>
                </div>
                <div className='footer-section'>
                    <h3 className='footer-title'>Quick Links</h3>
                    <ul className='footer-links'>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#cars">Cars</a></li>
                        <li><a href="#works">How it works</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className='footer-title'>Contact</h3>
                    <p>Email: info@autohub.com</p>
                    <p>Phone: +254 700 000 000</p>
                    <p>Kakamega, Kenya</p>
                </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; {currentYear} AutoLink. All rights reserved</p>
                </div>
        </footer>
    )
}

export default Footer;