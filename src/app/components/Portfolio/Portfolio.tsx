import Image from "next/image";
import React from "react";
import styles from "./portfolio.module.css";

interface PortfolioProps {
  houseUrl: string;
  type: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ houseUrl, type }) => {
  return (
    <section id="portfolio">
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioImageWrapper}>
          <Image
            src={houseUrl}
            alt={`${type} Image`}
            fill
            className={styles.portfolioImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

      
        <div className={styles.portfolioOverlay}>
          <div>
            <h3 className={styles.portfolioText}>{type}</h3>
            <button className={styles.portfolioButton}>
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
