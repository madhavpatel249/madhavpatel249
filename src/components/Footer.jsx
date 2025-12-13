import React from 'react'

const footerStyles = `
  .footer {
    padding: 40px 24px;
    margin-top: 60px;
    border-top: 1px solid var(--border);
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .footer.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .footer-text {
    font-size: 14px;
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    .footer {
      padding: 30px 20px;
      margin-top: 40px;
    }
    .footer-text {
      font-size: 13px;
    }
  }
`

function Footer({ isVisible = false }) {
    return (
        <>
            <style>{footerStyles}</style>
            <footer className={`footer ${isVisible ? 'visible' : ''}`}>
                <p className="footer-text">
                    © {new Date().getFullYear()} Madhav Patel. Built with React.
                </p>
            </footer>
        </>
    )
}

export default Footer
