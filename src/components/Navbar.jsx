// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // <-- Import the styles

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          VYOMGARUD
        </div>
        <a href="#contact" className={styles.contactLink}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;