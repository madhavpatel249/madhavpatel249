import React from 'react'

const headerStyles = `
  .header {
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 40px;
  }
  .logo {
    font-family: 'Fredoka One', cursive;
    font-size: 3rem;
    color: white;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
    animation: glow 2s ease-in-out infinite alternate;
  }
  @keyframes glow {
    from {
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.5);
    }
    to {
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5);
    }
  }
  .subtitle {
    font-size: 1.3rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    .logo { font-size: 2rem; }
    .subtitle { font-size: 1.1rem; }
  }
`

function Header() {
  return (
    <>
      <style>{headerStyles}</style>
      <header className="header">
      <h1 className="logo">🐧 Welcome to My Igloo! 🐧</h1>
      <p className="subtitle">A Club Penguin Themed Portfolio</p>
      </header>
    </>
  )
}

export default Header

