import React from 'react'

const cardStyles = `
  .about-section {
    padding: 10px 0; /* tighter vertical spacing */
  }
  /* Heading removed per new minimal layout */
  .about-section p {
    line-height: 1.45;
    margin-bottom: 10px;
    font-size: 14px;
    color: #000000;
  }
  .about-section strong {
    font-weight: bold;
  }
  .coursework {
    margin-top: 8px;
    padding-top: 10px;
    border-top: 1px solid #e6e6e6; /* softer divider */
  }
  .coursework p {
    color: #000000;
    font-size: 13px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  .coursework-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .coursework-item {
    background-color: #f7f7f7;
    padding: 4px 8px;
    font-size: 12px;
    color: #000000;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
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
