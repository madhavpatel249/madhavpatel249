import React from 'react'

const tagStyles = `
  .tag {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    color: #4a4a4a;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 400;
    border-radius: 4px;
    transition: all 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;
    display: inline-block;
  }
  .dark .tag {
    background-color: #2a2a2a;
    border-color: #444444;
    color: #cccccc;
  }
  .tag:hover {
    border-color: #0066cc;
    color: #0066cc;
  }
  .tag-status {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #856404;
    background-color: #fff3cd;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid #ffc107;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .dark .tag-status {
    color: #e6c896;
    background-color: #6b5b2d;
    border-color: #8b7a4a;
  }
`

/**
 * Reusable tag component
 * Single Responsibility: Display tags with consistent styling
 * Open/Closed: Supports different variants via variant prop
 */
function Tag({ children, variant = 'default', className = '' }) {
  const tagClass = variant === 'status' ? 'tag-status' : 'tag'
  return (
    <>
      <style>{tagStyles}</style>
      <span className={`${tagClass} ${className}`}>{children}</span>
    </>
  )
}

export default Tag

