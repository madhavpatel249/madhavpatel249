import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const floatingNavStyles = `
  .floating-nav {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 1000;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  .floating-nav.visible {
    opacity: 1;
    pointer-events: all;
  }
  .nav-button {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .nav-button:hover {
    background: var(--border);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--accent);
  }
  .nav-icon {
    width: 20px;
    height: 20px;
  }
  .nav-icon svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .theme-toggle {
    position: fixed;
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    opacity: 1;
    pointer-events: all;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .theme-toggle:hover {
    background: var(--border);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--accent);
  }
  .theme-icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .theme-icon svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .sun-icon {
    display: block;
  }
  .dark .sun-icon {
    display: none;
  }
  .moon-icon {
    display: none;
  }
  .dark .moon-icon {
    display: block;
  }
  @media (max-width: 768px) {
    .floating-nav {
      top: 16px;
      gap: 8px;
    }
    .nav-button {
      width: 40px;
      height: 40px;
    }
    .nav-icon {
      width: 18px;
      height: 18px;
    }
    .theme-toggle {
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
    }
  }
`

function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false)
    const { toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <style>{floatingNavStyles}</style>
            <nav className={`floating-nav ${isVisible ? 'visible' : ''}`}>
                <a 
                    href="#home" 
                    className="nav-button"
                    onClick={(e) => handleClick(e, 'home')}
                    aria-label="Home"
                >
                    <span className="nav-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </span>
                </a>
                <a 
                    href="#projects" 
                    className="nav-button"
                    onClick={(e) => handleClick(e, 'projects')}
                    aria-label="Projects"
                >
                    <span className="nav-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </span>
                </a>
            </nav>
            <button 
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
            >
                <span className="theme-icon">
                    <svg className="sun-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <svg className="moon-icon" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </span>
            </button>
        </>
    )
}

export default FloatingNav
