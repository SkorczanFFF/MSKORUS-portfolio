import React from 'react';
import './Footer.scss';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { IoIosPaperPlane } from 'react-icons/io';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-footer">
            <div className="smaller-container">
                <h2>MSKORUS</h2>
                    <div className="line" />
                <div className="footer-item-container">
                    <div className="footer-item">
                        <IoIosPaperPlane className="footer-item-icon" />
                        <p className="footer-item-description">HALO DZIEMDOBRY</p>
                    </div>
                    <div className="footer-item">
                        <BsFillFileEarmarkPersonFill className="footer-item-icon" />
                        <p className="footer-item-description">HALO DZIEMDOBRY</p>
                    </div>
                    <div className="footer-item">
                        <BsFillFileEarmarkPersonFill className="footer-item-icon" />
                        <p className="footer-item-description">HALO DZIEMDOBRY</p>
                    </div>
                </div>
            </div>
                <div className="end-line">
                    <p><b>&copy; {currentYear} by Maciej Skorus</b></p>
                </div>
        </footer>  
    );
}
