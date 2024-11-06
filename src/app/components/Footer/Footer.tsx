"use client";

import Link from 'next/link';
import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <h1>Welcome To AH5an's Works</h1>
          <p>I help real Website Developing Get more Clients by making highly Converting Websites</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link href="https://www.facebook.com/profile.php?id=100067506227566" target="_blank">FaceBook</Link></li>
            <li><Link href="https://www.linkedin.com/in/muhammad-ahsan-b26317296" target="_blank">LinkedIn</Link></li>
            <li><Link href="https://www.instagram.com/notyour__ahsan" target="_blank">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
