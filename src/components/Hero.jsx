import React from 'react'

const heroStyles = `
  .hero-section {
    padding: 20px 0 30px 0;
    position: relative;
  }
  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .name-text {
    font-size: 56px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
    line-height: 1.1;
    transition: color 0.3s ease;
  }
  .dark .name-text {
    color: #e0e0e0;
  }
  .hero-subtitle {
    font-size: 20px;
    color: #666666;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .dark .hero-subtitle {
    color: #aaaaaa;
  }
  .hero-description {
    font-size: 17px;
    color: #4a4a4a;
    line-height: 1.7;
    margin-top: 20px;
    transition: color 0.3s ease;
  }
  .dark .hero-description {
    color: #cccccc;
  }
  .hero-description a {
    color: #0066cc;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
    font-weight: 500;
  }
  .hero-description a:hover {
    border-bottom-color: #0066cc;
  }
  @media (max-width: 768px) {
    .name-text {
      font-size: 42px;
    }
    .hero-subtitle {
      font-size: 18px;
    }
    .hero-description {
      font-size: 16px;
    }
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
            3rd Year Software Engineering @ Ontario Tech
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

