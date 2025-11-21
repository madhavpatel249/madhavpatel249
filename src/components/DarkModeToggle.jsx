import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const toggleStyles = `
  .dark-mode-toggle {
    position: fixed;
    top: 24px;
    left: 24px;
    z-index: 1000;
    width: 60px;
    height: 32px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .dark-mode-toggle:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .dark .dark-mode-toggle {
    background-color: #4a4a4a;
  }
  .toggle-slider {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .dark .toggle-slider {
    transform: translateX(28px);
    background-color: #e0e0e0;
  }
  .toggle-icon {
    font-size: 14px;
    transition: opacity 0.3s ease;
    position: absolute;
    line-height: 1;
  }
  .toggle-icon.sun {
    opacity: 0;
  }
  .dark .toggle-icon.sun {
    opacity: 1;
  }
  .toggle-icon.moon {
    opacity: 1;
  }
  .dark .toggle-icon.moon {
    opacity: 0;
  }
  @media (max-width: 768px) {
    .dark-mode-toggle {
      top: 16px;
      left: 16px;
      width: 52px;
      height: 28px;
    }
    .toggle-slider {
      width: 20px;
      height: 20px;
    }
    .dark .toggle-slider {
      transform: translateX(24px);
    }
  }
`

function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <style>{toggleStyles}</style>
      <button className="dark-mode-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
        <div className="toggle-slider">
          <span className="toggle-icon sun">☀️</span>
          <span className="toggle-icon moon">🌙</span>
        </div>
      </button>
    </>
  )
}

export default DarkModeToggle

