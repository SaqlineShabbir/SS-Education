import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className="footer shadow ">
        <div className="text-center my-color fs-4">
        <i className="p-3 fab fa-facebook"></i>
        <i className="fab fa-google-plus"></i>
        <i className="p-3 fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="p-3 fab fa-youtube"></i>
        </div>
        <div className="text-center">
        <p>Contact us we will answer your all questions any time  </p>
        </div>
        <div className="text-center  p-1 footer-bottom ">
            <small className="text-center text-white fw-bold">Designed by Saqline Shabbir</small>
        </div>
        </div>
        </>
    );
};

export default Footer;
