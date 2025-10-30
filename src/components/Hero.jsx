import React, { useState, useEffect } from 'react'

const heroStyles = `
  .hero-section {
    padding: 20px 0; /* tighter top/bottom */
  }
  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 6px; /* place subtitle right under the name */
  }
  .name-text {
    font-size: 48px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0;
  }
  .hero-subtitle {
    font-size: 18px;
    color: #666666;
    font-weight: 500;
  }
  .hero-description {
    font-size: 16px;
    color: #666666;
    line-height: 1.6;
    max-width: 600px;
    margin-top: 14px;
  }
  .hero-description a {
    color: inherit; /* remove default blue */
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: color 0.2s ease, border-bottom-color 0.2s ease;
    cursor: pointer;
  }
  .hero-description a:hover {
    color: #2196f3; /* blue hover */
    border-bottom-color: #2196f3;
  }
`

function Hero() {
  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero-section">
        <div className="hero-text-container">
          <div className="name-text">Madhav Patel</div>
          <div className="hero-subtitle">
            Software Engineering @ Ontario Tech
          </div>
          <div className="hero-description">
            A full‑stack developer studying Software Engineering at Ontario Tech, driven to leverage
            technology to build meaningful, impactful solutions. In my free time, I enjoy lifting weights
            and cooking with new recipes. Please feel free to contact me at
            <span> </span><a href="mailto:madhavpatel249@gmail.com">madhavpatel249@gmail.com</a><span> </span>
            about any questions or opportunities.
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

