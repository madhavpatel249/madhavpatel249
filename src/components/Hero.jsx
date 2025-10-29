import React, { useState, useEffect } from 'react'

const heroStyles = `
  .hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 120px;
    margin-bottom: 50px;
  }
  .doctor-penguin {
    position: absolute;
    left: -150px;
    height: 200px;
    width: auto;
    z-index: 10;
    animation: walk-across 6s ease-in-out forwards;
  }
  @keyframes walk-across {
    0% {
      left: -150px;
    }
    30% {
      left: 35%;
    }
    70% {
      left: 35%;
    }
    85% {
      left: 65%;
    }
    100% {
      left: 100%;
    }
  }
  .hero-text-container {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 5;
  }
  .hero-text {
    font-family: 'Fredoka One', cursive;
    font-size: 3.5rem;
    color: white;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  }
  .hello-text {
    clip-path: polygon(0 0, 0 100%, 0% 100%, 0% 0%);
    animation: reveal-hello 6s ease-in-out forwards;
    padding-right: 5px;
  }
  @keyframes reveal-hello {
    0%, 13% {
      clip-path: polygon(0 0, 0 100%, 0% 100%, 0% 0%);
    }
    14% {
      clip-path: polygon(0 0, 0 100%, 10% 100%, 10% 0%);
    }
    19% {
      clip-path: polygon(0 0, 0 100%, 30% 100%, 30% 0%);
    }
    24% {
      clip-path: polygon(0 0, 0 100%, 55% 100%, 55% 0%);
    }
    27% {
      clip-path: polygon(0 0, 0 100%, 80% 100%, 80% 0%);
    }
    30% {
      clip-path: polygon(0 0, 0 100%, 105% 100%, 105% 0%);
    }
    31%, 100% {
      clip-path: polygon(0 0, 0 100%, 105% 100%, 105% 0%);
    }
  }
  .name-text {
    clip-path: polygon(0 0, 0 100%, 0% 100%, 0% 0%);
    animation: reveal-name 6s ease-in-out forwards;
    padding-right: 5px;
  }
  @keyframes reveal-name {
    0%, 70% {
      clip-path: polygon(0 0, 0 100%, 0% 100%, 0% 0%);
    }
    71% {
      clip-path: polygon(0 0, 0 100%, 10% 100%, 10% 0%);
    }
    75% {
      clip-path: polygon(0 0, 0 100%, 30% 100%, 30% 0%);
    }
    80% {
      clip-path: polygon(0 0, 0 100%, 55% 100%, 55% 0%);
    }
    85% {
      clip-path: polygon(0 0, 0 100%, 80% 100%, 80% 0%);
    }
    90% {
      clip-path: polygon(0 0, 0 100%, 105% 100%, 105% 0%);
    }
    100% {
      clip-path: polygon(0 0, 0 100%, 105% 100%, 105% 0%);
    }
  }
  @media (max-width: 768px) {
    .hero-section {
      height: 300px;
    }
    .doctor-penguin {
      height: 150px;
    }
    .hero-text {
      font-size: 2.5rem;
    }
  }
`

function Hero() {
  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero-section">
        <img 
          src="/images/doctorpenguin.gif" 
          alt="Doctor Penguin" 
          className="doctor-penguin"
          onError={(e) => {
            console.error('Doctor penguin GIF not found');
            e.target.style.display = 'none';
          }}
        />
        <div className="hero-text-container">
          <span className="hero-text hello-text">Hi there,</span>
          <span className="hero-text name-text">I'm Madhav Patel</span>
        </div>
      </section>
    </>
  )
}

export default Hero

