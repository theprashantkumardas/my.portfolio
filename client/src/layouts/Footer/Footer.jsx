import React from 'react';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/theprashantkumardas" aria-label="GitHub" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
            <BsGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/prashant-kumar-das/" aria-label="LinkedIn" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
             <BsLinkedin size={24} />
        </a>
        <a href="https://x.com/itzmepkd" aria-label="Twitter" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
             <BsTwitter size={24} />
        </a>
        <a href="#" aria-label="Facebook" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
             <BsFacebook size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;