import React from 'react'

const footerStyles = `
  .footer {
    text-align: center;
    padding: 30px 20px;
    color: white;
    font-size: 1.1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    .footer {
      font-size: 1rem;
      padding: 20px;
    }
  }
`

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
      </footer>
    </>
  )
}

export default Footer
