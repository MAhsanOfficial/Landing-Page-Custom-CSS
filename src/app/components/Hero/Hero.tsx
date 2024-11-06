import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <>
      <section id="home">
        <Header />
        <div>
          <div className="hero-section">
            <p className="hero-title">
              I'm Ahsan, a Passionate Front-End-Web Developer 🚀
            </p>
            <p className="hero-subtitle">
              Build Your Next Project Even Faster with Complex UI
            </p>
            <button className="hero-button">
              Browse All {'>'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
