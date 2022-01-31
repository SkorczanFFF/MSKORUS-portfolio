import React from 'react';
import Flip from 'react-reveal/Flip'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { IoIosPaperPlane } from 'react-icons/io';
import './Footer.scss';
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-footer">
        <div className="arrow-down white" />
            <div className="smaller-container">
            <Flip top opposite cascade>
                <h2 className="footer-heading">MSKORUS</h2>
            </Flip>
                    <div className="line gradient" />
                <div className="footer-item-container">
                <Flip bottom opposite cascade>
                    <div className="footer-item">
                        <IoIosPaperPlane className="footer-item-icon"/>
                        <h3 className="footer-item-name">KONTAKT</h3>
                        <p className="footer-item-description"><a href="mailto:kontakt@mskorus.pl">kontakt@mskorus.pl</a></p>
                        <p className="footer-item-description"><a href="mailto:maciejskorus94@gmail.com">maciejskorus94@gmail.com</a></p>
                    </div>
                    <div className="footer-item">
                        <BsFillFileEarmarkPersonFill className="footer-item-icon right" />
                        <h3 className="footer-item-name">CV/RESUME</h3>
                        <p className="footer-item-description"><a href="mailto:webmaster@example.com">Polski (PL)</a></p>
                        <p className="footer-item-description">English (ENG)</p>              
                    </div>
                </Flip>
                </div>
            </div>
                <div className="end-line gradient">
                    <p><b>&copy; {currentYear} Maciej Skorus</b></p>
                </div>
        </footer>  
    );
}
