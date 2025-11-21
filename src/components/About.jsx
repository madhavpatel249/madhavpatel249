import React from 'react'

const cardStyles = `
  .about-section {
    padding: 0;
  }
  .about-section h2 {
    margin-bottom: 16px;
  }
  .about-section p {
    line-height: 1.6;
    margin-bottom: 12px;
    font-size: 16px;
    color: #4a4a4a;
    transition: color 0.3s ease;
  }
  .dark .about-section p {
    color: #cccccc;
  }
  .about-section strong {
    font-weight: 600;
    color: #1a1a1a;
    transition: color 0.3s ease;
  }
  .dark .about-section strong {
    color: #e0e0e0;
  }
  .coursework {
    margin-top: 0;
    padding: 0;
  }
  .coursework p {
    color: #1a1a1a;
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  .dark .coursework p {
    color: #e0e0e0;
  }
  .coursework-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  .coursework-item {
    background-color: #ffffff;
    padding: 6px 14px;
    font-size: 14px;
    color: #4a4a4a;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-weight: 400;
    transition: all 0.2s ease;
    cursor: default;
  }
  .dark .coursework-item {
    background-color: #2a2a2a;
    color: #cccccc;
    border-color: #404040;
  }
  .coursework-item:hover {
    border-color: #0066cc;
    color: #0066cc;
    transform: translateY(-1px);
  }
`

function About() {
  // Organized by logical grouping (no subheadings, just ordered)
  const coursework = [
    // Core Foundations
    'Data Structures',
    'Algorithms',
    'OOP',
    'Operating Systems',
    'Computer Architecture',
    // Software Engineering & Design
    'Software Design & Architecture',
    'Requirements Engineering',
    'Software Quality & PM',
    // Databases
    'Databases',
    // Applications & Specializations
    'Web Programming',
    'Systems Programming',
    'Computer Networks',
    'Intro to AI'
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="about-section">
        {/* Description moved to Hero under subtitle; leaving coursework only */}
        <div className="coursework">
          <p><strong>Relevant Coursework:</strong></p>
          <div className="coursework-list">
            {coursework.map((course, index) => (
              <span key={index} className="coursework-item">{course}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
