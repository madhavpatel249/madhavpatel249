import React from 'react'

const heroStyles = `
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 40px 0;
    position: relative;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-top: 0;
    padding-top: 0;
  }
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .hero-name {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text);
    letter-spacing: -1.5px;
    line-height: 1.1;
    position: relative;
    z-index: 2;
  }
  .hero-title {
    font-size: 16px;
    color: var(--text-light);
    margin-bottom: 20px;
    font-weight: 400;
  }
  .hero-description {
    font-size: 14px;
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 24px;
  }
  .hero-description a {
    color: var(--accent);
    text-decoration: none;
  }
  .hero-description a:hover {
    text-decoration: underline;
  }
  .hero-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  .hero-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    text-decoration: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    transition: all 0.2s;
  }
  .hero-link:hover {
    background: var(--border);
    transform: translateY(-2px);
    border-color: var(--accent);
  }
  .hero-link-icon {
    width: 18px;
    height: 18px;
  }
  .hero-link-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0);
    transition: filter 0.2s;
  }
  .dark .hero-link-icon img {
    filter: brightness(0) invert(1);
  }
  .hero-blobs {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: blobFloat 20s ease-in-out infinite;
  }
  .blob-1 {
    width: 600px;
    height: 600px;
    background: #3b82f6;
    top: -200px;
    left: -200px;
    animation-delay: 0s;
  }
  .blob-2 {
    width: 550px;
    height: 550px;
    background: #60a5fa;
    top: 10%;
    right: -150px;
    animation-delay: 5s;
  }
  .blob-3 {
    width: 500px;
    height: 500px;
    background: #93c5fd;
    top: 40%;
    left: 20%;
    animation-delay: 10s;
  }
  .blob-4 {
    width: 450px;
    height: 450px;
    background: #3b82f6;
    top: 20%;
    left: 70%;
    animation-delay: 7s;
  }
  .blob-5 {
    width: 400px;
    height: 400px;
    background: #60a5fa;
    top: 50%;
    left: -100px;
    animation-delay: 3s;
  }
  .blob-6 {
    width: 350px;
    height: 350px;
    background: #93c5fd;
    top: 30%;
    right: 10%;
    animation-delay: 12s;
  }
  .hero-fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to bottom, transparent 0%, var(--bg) 100%);
    z-index: 1;
    pointer-events: none;
  }
  @keyframes blobFloat {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(50px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-40px, 40px) scale(0.9);
    }
  }
  .dark .blob {
    opacity: 0.2;
  }
  @media (max-width: 768px) {
    .hero {
      padding: 30px 0;
    }
    .hero-name {
      font-size: 40px;
    }
    .hero-title {
      font-size: 15px;
    }
    .hero-description {
      font-size: 13px;
    }
    .blob {
      filter: blur(60px);
    }
    .blob-1 {
      width: 400px;
      height: 400px;
    }
    .blob-2 {
      width: 350px;
      height: 350px;
    }
    .blob-3 {
      width: 300px;
      height: 300px;
    }
    .blob-4 {
      width: 280px;
      height: 280px;
    }
    .blob-5 {
      width: 250px;
      height: 250px;
    }
    .blob-6 {
      width: 220px;
      height: 220px;
    }
  }
`

function Hero() {
    return (
        <>
            <style>{heroStyles}</style>
            <section id="home" className="hero reveal">
                <div className="hero-blobs">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="blob blob-3"></div>
                    <div className="blob blob-4"></div>
                    <div className="blob blob-5"></div>
                    <div className="blob blob-6"></div>
                </div>
                <div className="hero-fade-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-name">Madhav Patel</h1>
                    <div className="hero-title">3rd Year Software Engineering @ Ontario Tech</div>
                    <p className="hero-description">
                        I'm a full-stack developer studying Software Engineering, driven to build meaningful, real-world solutions through technology. I've developed projects like <a href="https://meshtech-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">Mesh</a>, a 3D social portfolio network for engineering students, and an AI-powered resume analyzer that evaluates resumes against job descriptions using keyword matching and similarity scoring to help candidates optimize their applications. In my free time, I enjoy lifting weights and experimenting with new recipes.
                    </p>
                    <p className="hero-description" style={{ marginTop: '12px' }}>
                        Feel free to reach out at{' '}
                        <a href="mailto:madhavpatel249@gmail.com">madhavpatel249@gmail.com</a>{' '}
                        for questions or opportunities.
                    </p>
                    <div className="hero-links">
                        <a 
                            href="mailto:madhavpatel249@gmail.com" 
                            className="hero-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <span className="hero-link-icon">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" />
                            </span>
                        </a>
                        <a 
                            href="https://linkedin.com/in/madhavpatel249" 
                            className="hero-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <span className="hero-link-icon">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" />
                            </span>
                        </a>
                        <a 
                            href="https://github.com/madhavpatel249" 
                            className="hero-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <span className="hero-link-icon">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
