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
                        <div className="footer-item-description">KONTAKT</div>
                        <a className="footer-link" href = "mailto: abc@example.com">SKOREK11@GMAIL.COM</a>
                    </div>
                    <div className="footer-item">
                        <BsFillFileEarmarkPersonFill className="footer-item-icon right" />
                        <div className="footer-item-description left">CV</div>
                    </div>
                </div>
            </div>
                <div className="end-line">
                    <p><b>&copy; {currentYear} by Maciej Skorus</b></p>
                </div>
        </footer>  
    );
}
