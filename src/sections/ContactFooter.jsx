// src/sections/ContactFooter.jsx - FINAL PREMIUM DESIGN
import React from 'react';
import Button from '../components/Button';
import styles from './ContactFooter.module.css';

// Using simple string icons for social media
const socialMedia = [
    { name: 'X', icon: '🐦', href: '#x' }, 
    { name: 'LinkedIn', icon: '💼', href: '#linkedin' }, 
    { name: 'GitHub', icon: '💻', href: '#github' }, 
];

const ContactFooter = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>

        {/* -------------------- Contact CTA and Form (SPLIT SECTION) -------------------- */}
        <div className={styles.contactArea}>
            
            {/* Column 1: CTA Text */}
            <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>
                    Secure Your Future.
                </h3>
                <p className={styles.ctaText}>
                    Ready to integrate unmatched autonomy? Contact our advanced systems team for a detailed, classified technical brief.
                </p>
            </div>

            {/* Column 2: Contact Form */}
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    Request Brief
                </div>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Name / Organization" className={styles.formInput} required />
                    <input type="email" placeholder="Email Address" className={styles.formInput} required />
                    <Button text="Submit Inquiry" type="submit" />
                </form>
            </div>
        </div>

        {/* -------------------- Footer Links -------------------- */}
        <div className={styles.footerGrid}>
            
            <div>
                <div className={styles.logoFooter}>VYOMGARUD</div>
                <p className={styles.ctaText} style={{fontSize: '0.9rem'}}>
                    Precision Engineering. Tactical Superiority.
                </p>
            </div>

            <div>
                <h4 className={styles.heading}>Technology</h4>
                <ul className={styles.linkList}>
                    <li className={styles.linkItem}><a href="#capabilities">AI Autonomy</a></li>
                    <li className={styles.linkItem}><a href="#capabilities">Hardened Systems</a></li>
                    <li className={styles.linkItem}><a href="#highlights">Zero-Fail Redundancy</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className={styles.heading}>Company</h4>
                <ul className={styles.linkList}>
                    <li className={styles.linkItem}><a href="#about">About Us</a></li>
                    <li className={styles.linkItem}><a href="#contact">Careers</a></li>
                    <li className={styles.linkItem}><a href="#contact">Media Inquiries</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className={styles.heading}>Connect</h4>
                <div className={styles.socialIcons}>
                    {socialMedia.map((social) => (
                        <a key={social.name} href={social.href} className={styles.linkItem} title={social.name}>
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* -------------------- Copyright -------------------- */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} VyomGarud Systems. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;