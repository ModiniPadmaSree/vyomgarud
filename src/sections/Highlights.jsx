// src/sections/Highlights.jsx - FIXED
import React from 'react';
import styles from './Highlights.module.css'; 

const featureBullets = [
  { 
    icon: '✅', 
    title: 'Zero-Fail Redundancy', 
    description: 'Multiple system backups and real-time diagnostics ensure flight integrity even under critical subsystem failure.' 
  },
  { 
    icon: '🔒', 
    // FIX: Removed duplicated 'title' key here.
    title: 'Encrypted Data Link', 
    description: 'Secure, quantum-resistant command and control links prevent interception and guarantee uncompromised data integrity.' 
  },
  { 
    icon: '⏱️', 
    title: 'Rapid Deployment System', 
    description: 'Minimal pre-flight setup time allows platforms to be mission-ready and airborne in less than two minutes across diverse terrains.' 
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header} style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
          <h2 className={styles.subTitle}>
            Key Advantages
          </h2>
          <h3 className={styles.mainTitle}>
            Engineered for Absolute Trust.
          </h3>
        </div>
        
        {/* Features Grid */}
        <div className={styles.grid}>
          {featureBullets.map((feature, index) => (
            <div 
                key={index} 
                className={styles.featureItem}
                // Apply staggered animation
                style={{ 
                    animation: 'fadeInUp 0.8s ease-out forwards', 
                    animationDelay: `${0.15 * index + 0.3}s` 
                }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              
              <h4 className={styles.title}>
                {feature.title}
              </h4>
              
              <p className={styles.description}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;