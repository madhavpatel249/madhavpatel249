import React from 'react'

const footerStyles = `
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    color: #666666;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    border-top: 1px solid #e0e0e0;
    margin-top: 80px;
    transition: color 0.3s ease, border-color 0.3s ease;
  }
  .dark .footer {
    color: #aaaaaa;
    border-top-color: #333333;
  }
  .footer-left {
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  .footer-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .footer-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: #666666;
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 6px;
  }
  .footer-link:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
  }
  .dark .footer-link:hover {
    background-color: #2a2a2a;
  }
  .dark .footer-icon {
    filter: brightness(0) invert(1) opacity(0.6);
  }
  .dark .footer-link:hover .footer-icon {
    filter: brightness(0) invert(1) opacity(1);
  }
  .footer-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: brightness(0) opacity(0.6);
    transition: filter 0.2s ease;
  }
  .footer-link:hover .footer-icon {
    filter: brightness(0) opacity(1);
  }
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
  }
`

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <div className="footer-left">
          © 2025 Madhav Patel
        </div>
        <div className="footer-right">
          <a href="mailto:madhavpatel249@gmail.com" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
              alt="Gmail" 
              className="footer-icon"
            />
          </a>
          <a href="https://linkedin.com/in/madhavpatel249" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
              alt="LinkedIn" 
              className="footer-icon"
            />
          </a>
          <a href="https://github.com/madhavpatel249" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
              alt="GitHub" 
              className="footer-icon"
            />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
