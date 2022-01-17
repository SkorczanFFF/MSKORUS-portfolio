import React from 'react';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { IoIosPaperPlane } from 'react-icons/io';
import './Footer.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-footer">
            <div className="arrow-down white" />
            <div className="smaller-container">
                <h2 className="footer-heading">MSKORUS</h2>
                    <div className="line" />
                <div className="footer-item-container">
                    <div className="footer-item">
                        <IoIosPaperPlane className="footer-item-icon left" />
                        <h3 className="footer-item-name">KONTAKT</h3>
                        <p className="footer-item-description">SKOREK11@GMAIL.COM
                        </p>
                    </div>
                    <div className="footer-item">
                        <BsFillFileEarmarkPersonFill className="footer-item-icon right" />
                        <h3 className="footer-item-name">CV</h3>
                        <p className="footer-item-description right">Polski (PL)</p>
                        <p className="footer-item-description left">English (ENG)</p>                        
                    </div>
                </div>
            </div>
                <div className="end-line">
                    <p><b>&copy; {currentYear} by Maciej Skorus</b></p>
                </div>
        </footer>  
    );
}
