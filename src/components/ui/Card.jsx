import React from 'react'

const cardStyles = `
  .card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 24px;
    border-radius: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .dark .card {
    background-color: #2a2a2a;
    border-color: #404040;
  }
  .card:hover {
    border-color: #0066cc;
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .dark .card:hover {
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
  }
`

/**
 * Reusable card component
 * Single Responsibility: Provide consistent card styling
 * Open/Closed: Can be extended via className prop without modification
 */
function Card({ children, className = '', ...props }) {
  return (
    <>
      <style>{cardStyles}</style>
      <div className={`card ${className}`} {...props}>
        {children}
      </div>
    </>
  )
}

export default Card

