import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
    const buttonStyles = `${styles.button} ${styles[variant]}`;
  
    return (
      <button type={type} onClick={onClick} className={buttonStyles}>
        {children}
      </button>
    );
  };
  
  export default Button;