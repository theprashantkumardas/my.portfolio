import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const closeMenu = () => {
      setIsMenuOpen(false);
    }

    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.logo}>
              <Link to="/" className={styles.logoLink} onClick={closeMenu}>
                <span className={styles.span} >...prashant</span>
              </Link>
            </div>
          
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`} >
                <li onClick={closeMenu}>
                  <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/about" className={styles.navLink}>About</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/projects" className={styles.navLink}>Projects</Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/contact"><Button variant='primary'>Contact</Button></Link>
                </li>
                
                
            </ul>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                  {/* Hamburger icon will come here */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;