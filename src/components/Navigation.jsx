import React, { useState, useEffect } from 'react'

const navStyles = `
  .navbar {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0099cc;
    z-index: 1000;
    padding: 15px 30px 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    transition: max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                margin-top 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                padding-left 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                padding-right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    margin-top: 0;
    will-change: max-width, border-radius;
  }
  .navbar.scrolled {
    max-width: 1200px;
    border-radius: 20px;
    margin-top: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .navbar:not(.scrolled) {
    transition: max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
                border-radius 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                margin-top 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                padding-left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                padding-right 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav-buttons {
    display: flex;
    gap: 35px;
    align-items: center;
  }
  .nav-btn {
    padding: 14px 32px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Fredoka One', cursive;
    background: linear-gradient(to bottom, #0099cc 0%, #3A8AB8 20%, #2a7aa8 50%, #3A8AB8 80%, #0099cc 100%);
    color: white;
    text-shadow: 2px 2px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000;
    box-shadow: 
      inset 0 1px 0px rgba(255, 255, 255, 0.3),
      inset 0 -1px 0px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    display: inline-block;
    border: 2px solid rgba(173, 216, 230, 0.4);
  }
  .nav-btn:hover {
    background: linear-gradient(to bottom, #0099cc 0%, #4A9BC8 20%, #3A8AB8 50%, #4A9BC8 80%, #0099cc 100%);
    box-shadow: 
      inset 0 1px 0px rgba(255, 255, 255, 0.4),
      inset 0 -1px 0px rgba(0, 0, 0, 0.2),
      0 3px 6px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }
  .nav-btn:active {
    transform: translateY(0px);
    box-shadow: 
      inset 0 1px 2px rgba(0, 0, 0, 0.3),
      inset 0 -1px 0px rgba(0, 0, 0, 0.3),
      0 1px 2px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    .navbar {
      padding: 8px 15px;
    }
    .navbar.scrolled {
      max-width: calc(100% - 30px);
      margin-top: 0;
      padding-left: 15px;
      padding-right: 15px;
    }
    .nav-buttons {
      gap: 8px;
    }
    .nav-btn {
      padding: 12px 22px;
      font-size: 0.95rem;
    }
  }
`

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Set scrolled state when user scrolls down more than 50px
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <style>{navStyles}</style>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => scrollToSection('about')}>About Me</button>
          <button className="nav-btn" onClick={() => scrollToSection('skills')}>Skills</button>
          <button className="nav-btn" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="nav-btn" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
