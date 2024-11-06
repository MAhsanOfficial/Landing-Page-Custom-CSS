"use client";

import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={styles.headerContainer}>
 
      <div>
        <h1 className={styles.logo}>
          <Link href="#home">AH5AN'S</Link>
        </h1>
      </div>
      
  
      <div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      
     
      <div>
        <ul className={styles.authLinks}>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <Link href="/">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
