import React, {useState} from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
export default function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const changeBackground = () => {
    const viewportHeight = window.innerHeight;
      if(window.pageYOffset >= viewportHeight - 50) {
        setNavbar(true);
      } else setNavbar(false);    
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container container">
          <Link smooth to="#home" className="navbar-logo" onClick={closeMobileMenu}>MSKORUS</Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link smooth to="#home" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#about" className='nav-links' onClick={closeMobileMenu}>O mnie</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#technologies" className='nav-links' onClick={closeMobileMenu}>Technologie</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#portfolio" className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#contact" className='nav-links' onClick={closeMobileMenu}>Kontakt</Link>
                </li>
              </ul>
        </div>
      </nav>
    </>
  )
}