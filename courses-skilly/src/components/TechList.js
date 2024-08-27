// src/components/TechList.js
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TechList.module.css';  // Importa los estilos

export default function TechList({ title, description, techs }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.gridContainer}>
        {techs.map((tech) => (
          <Link to={`/docs/category/${tech.name}`} key={tech.name} className={styles.techCard}>
            <div className={styles.logoContainer}>
              <img
                src={useBaseUrl(tech.logo)}
                alt={`${tech.displayName} logo`}
                className={styles.techLogo}
              />
            </div>
            <h3 className={styles.techTitle}>{tech.displayName}</h3>
            <p className={styles.techDescription}>{tech.description}</p>
            <p className={styles.techItems}>{tech.items} item{tech.items > 1 ? 's' : ''}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
