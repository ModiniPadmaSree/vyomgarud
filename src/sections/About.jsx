// src/sections/About.jsx - FINAL HIGH-END DESIGN
import React from 'react';
import styles from './About.module.css';

const missionStats = [
    { number: '99.99%', label: 'Mission Reliability' },
    { number: '1.2M+', label: 'Autonomous Flight Hours' },
    { number: '450km+', label: 'Extended Range Capacity' },
];

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentGrid}>
          
          {/* Column 1: MISSION STATS (Animated & Interactive) */}
          <div 
            className={styles.statsColumn}
            // ANIMATION: Fade in slightly after the main text header
            style={{ 
                animation: 'fadeInUp 0.8s ease-out forwards', 
                animationDelay: '0.2s' 
            }}
          >
            {missionStats.map((stat, index) => (
                <div 
                    key={index} 
                    className={styles.statBlock}
                    // Staggered animation for stats
                    style={{ 
                        animation: 'fadeInUp 0.6s ease-out forwards', 
                        animationDelay: `${0.4 + index * 0.15}s` 
                    }}
                >
                    <div className={styles.statNumber}>
                        {stat.number}
                    </div>
                    <div className={styles.statLabel}>
                        {stat.label}
                    </div>
                </div>
            ))}
          </div>
          
          {/* Column 2: MISSION STATEMENT (Animated) */}
          <div 
            className={styles.missionColumn}
            // ANIMATION: Fade in first
            style={{ 
                animation: 'fadeInUp 0.8s ease-out forwards', 
                animationDelay: '0s' 
            }}
          >
            <h2 className={styles.subTitle}>
              Our Foundation
            </h2>
            
            <h3 className={styles.mainTitle}>
              We deliver the tactical edge in the most unforgiving domains.
            </h3>
            
            <p className={styles.summary}>
              VyomGarud stands at the forefront of military-grade UAV technology, delivering autonomous systems engineered for uncompromising reliability. Our mission is to provide tactical superiority through precision-designed hardware, AI-powered flight control, and encrypted command infrastructure. We empower defense and security forces with the unmatched endurance and intelligence required for the most critical global operations. Every system we deploy is a testament to precision and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;