import React from 'react'

const footerStyles = `
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px; /* slightly tighter */
    color: #666666;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    border-top: 1px solid #cccccc;
    margin-top: 20px; /* reduce space before footer */
  }
  .footer-left {
    display: flex;
    align-items: center;
  }
  .footer-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .footer-link {
    display: flex;
    align-items: center;
    color: #666666;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .footer-link:hover {
    color: #2196f3;
  }
  .footer-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
    filter: brightness(0) opacity(0.6);
  }
  .footer-link:hover .footer-icon {
    filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
  }
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      gap: 15px;
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
