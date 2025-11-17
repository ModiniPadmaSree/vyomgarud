// src/sections/Capabilities.jsx - CONSOLIDATED
import React from 'react';
import Card from '../components/Card';
import styles from './Capabilities.module.css';

const capabilitiesData = [
  { icon: '⚡', title: 'AI-Powered Autonomy', description: 'Leveraging proprietary machine learning for complex route planning, intelligent object tracking, and real-time decision-making.' },
  { icon: '🛡️', title: 'Hardened Platforms', description: 'Military-grade construction, engineered to withstand extreme temperatures, harsh weather, and high electromagnetic interference.' },
  { icon: '🛰️', title: 'Unrivaled Range & Endurance', description: 'Extended flight endurance and secure, encrypted long-range data links ensure continuous operational coverage.' },
  { icon: '🔬', title: 'Payload Versatility', description: 'Modular design enables rapid integration and interchangeability of diverse sensor packages, including ISR, LiDAR, and specialized systems.' },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header} style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
          <h2 className={styles.subTitle}>
            Our Technology
          </h2>
          <h3 className={styles.mainTitle}>
            Precision Engineered for Performance.
          </h3>
        </div>
        
        {/* Responsive Grid */}
        <div className={styles.grid}>
          {capabilitiesData.map((capability, index) => (
            <Card
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              // Staggered animation styles applied via style prop
              style={{ 
                animation: 'fadeInUp 0.8s ease-out forwards', 
                animationDelay: `${0.15 * index + 0.3}s` 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;