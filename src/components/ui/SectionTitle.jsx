import React from 'react'

const sectionTitleStyles = `
  .section-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #1a1a1a;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
    transition: color 0.3s ease;
  }
  .dark .section-title {
    color: #e0e0e0;
  }
`

/**
 * Reusable section title component
 * Single Responsibility: Display section titles with consistent styling
 */
function SectionTitle({ children }) {
  return (
    <>
      <style>{sectionTitleStyles}</style>
      <h2 className="section-title">{children}</h2>
    </>
  )
}

export default SectionTitle

