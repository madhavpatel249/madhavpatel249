const heroStyles = `
  .hero {
    display: flex;
    align-items: center;
    padding: 50px 0 16px;
    position: relative;
    overflow: visible;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background: transparent;
  }
  .hero-content {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }
  .hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .hero-name {
    font-family: var(--heading-font);
    font-size: 48px;
    font-weight: 400;
    color: var(--text);
    letter-spacing: -0.5px;
    line-height: 1.1;
    margin: 0;
  }
  .hero-links {
    display: flex;
    gap: 20px;
    flex-shrink: 0;
    align-items: center;
  }
  .hero-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }
  .hero-link:hover {
    opacity: 0.6;
  }
  .hero-link-icon {
    width: 20px;
    height: 20px;
  }
  .hero-link-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0);
    display: block;
  }
  .hero-title {
    font-size: 16px;
    color: var(--text-light);
    font-weight: 400;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    .hero {
      padding: 60px 0 30px;
    }
    .hero-name {
      font-size: 36px;
    }
    .hero-title {
      font-size: 14px;
    }
  }
  @media (max-width: 480px) {
    .hero-name {
      font-size: 28px;
    }
  }
`

function Hero() {
    return (
        <>
            <style>{heroStyles}</style>
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-top anim-fade-in-down">
                        <h1 className="hero-name">Madhav Patel</h1>
                        <div className="hero-links">
                            <a href="https://linkedin.com/in/madhavpatel249" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <span className="hero-link-icon">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" />
                                </span>
                            </a>
                            <a href="mailto:madhavpatel249@gmail.com" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                <span className="hero-link-icon">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" />
                                </span>
                            </a>
                            <a href="https://github.com/madhavpatel249" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <span className="hero-link-icon">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-title anim-fade-in-down" style={{animationDelay: '0.05s'}}>I study Software Engineering at Ontario Tech. I like building things, experimenting with new tech, and solving problems that actually matter.</div>
                    <div className="hero-title anim-fade-in-down" style={{marginTop: '12px', animationDelay: '0.1s'}}>Currently looking for SWE and data roles — reach me at <a href="mailto:madhavpatel249@gmail.com" className="animated-underline">madhavpatel249@gmail.com</a>.</div>
                </div>
            </section>
        </>
    )
}

export default Hero
