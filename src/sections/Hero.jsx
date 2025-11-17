// src/sections/Hero.jsx - FINAL VIDEO BACKGROUND VERSION
import React from 'react';
import Button from '../components/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const tagline = "Autonomous Systems. Unmatched Reliability.";
  const supportingText = "Precision engineered for mission-critical operations and aerial dominance.";
  const ctaText = "Request a Technical Brief";

  return (
    <section className={styles.hero}>
      
      {/* 1. Video Background Element (z-index: 1) */}
      <video 
        className={styles.backgroundVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        {/* CRITICAL: References 'drone.mp4' from the root of the public folder */}
        <source src="/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* 2. Dark Overlay (z-index: 2) - ESSENTIAL for text readability over video */}
      <div className={styles.overlay}></div>
      
      {/* 3. Content Wrapper (z-index: 10) */}
      <div className={styles.contentWrapper}>
        
        <h1 className={styles.companyName}>
          VYOMGARUD
        </h1>
        
        {/* Tagline uses map to split and apply gradient/glow */}
        <p className={styles.tagline}>
          {tagline.split('.').map((phrase, index) => (
            <span key={index} className={index === 0 ? "" : styles.subtitleLine}>
              {phrase.trim()}
              {index === 0 ? '.' : ''}
            </span>
          ))}
        </p>
        
        <p className={styles.supportingText}>
          {supportingText}
        </p>
        
        <Button text={ctaText} />
      </div>
    </section>
  );
};

export default Hero;