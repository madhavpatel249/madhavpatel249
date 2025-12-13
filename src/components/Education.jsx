import React, { useState, useEffect } from 'react'

const educationStyles = `
  .education {
    padding: 0 0 40px 0;
    margin-top: -170px;
    margin-bottom: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }
  .education.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text);
  }
  .education-content {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .university-logo-container {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 0;
    padding: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .university-logo {
    width: 200%;
    height: 180%;
    object-fit: cover;
    object-position: center;
  }
  .education-info {
    flex: 1;
  }
  .education-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
  }
  .education-details {
    font-size: 14px;
    color: var(--text-light);
  }
  .coursework {
    margin-top: 24px;
  }
  .coursework-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text);
  }
  .coursework-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .coursework-item {
    font-size: 13px;
    color: var(--text);
    background: var(--border);
    padding: 5px 10px;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    .education {
      padding: 24px 0;
    }
    .university-logo-container {
      width: 50px;
      height: 50px;
    }
    .education-title {
      font-size: 16px;
    }
    .education-details {
      font-size: 13px;
    }
  }
`

const COURSEWORK = [
    'Data Structures',
    'Algorithms',
    'OOP',
    'Operating Systems',
    'Computer Architecture',
    'Software Design & Architecture',
    'Requirements Engineering',
    'Software Quality & PM',
    'Databases',
    'Web Programming',
    'Systems Programming',
    'Computer Networks',
    'Intro to AI'
]

function Education({ isVisible = false }) {
    return (
        <>
            <style>{educationStyles}</style>
            <section className={`education ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">Education</h2>
                <div className="education-content">
                    <div className="university-logo-container">
                        <img 
                            src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a0/a0/ec/a0a0ece7-cac2-74a1-4bbb-be5caf5d514c/Icon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" 
                            alt="Ontario Tech University" 
                            className="university-logo"
                        />
                    </div>
                    <div className="education-info">
                        <div className="education-title">Software Engineering</div>
                        <div className="education-details">Ontario Tech University • September 2023 - May 2027</div>
                    </div>
                </div>
                <div className="coursework">
                    <h3 className="coursework-title">Relevant Coursework</h3>
                    <div className="coursework-list">
                        {COURSEWORK.map((course, index) => (
                            <span key={index} className="coursework-item">{course}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education
