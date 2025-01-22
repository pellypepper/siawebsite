// Import React and the necessary icons
import React from 'react';
import { FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';

// Create a functional component to render the icons
const SocialMediaIcons = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '34px' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8' }}>
                <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998' }}>
                <FaFacebook />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: '#010101' }}>
                <FaTiktok />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584' }}>
                <FaInstagram />
            </a>
        </div>
    );
};

export default SocialMediaIcons;