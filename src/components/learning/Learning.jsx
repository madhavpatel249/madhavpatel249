import React from 'react'
import { learningItems } from '../../data/learning'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const learningSectionStyles = `
  .learning-section {
    padding: 0;
  }
  .learning-container {
    padding: 0;
  }
  .learning-item {
    margin-bottom: 20px;
  }
  .learning-item:last-child {
    margin-bottom: 0;
  }
  .learning-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
  }
  .dark .learning-title {
    color: #e0e0e0;
  }
  .learning-description {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 15px;
    color: #4a4a4a;
    line-height: 1.6;
    margin-left: 28px;
    transition: color 0.3s ease;
  }
  .dark .learning-description {
    color: #cccccc;
  }
  .learning-icon {
    font-size: 20px;
  }
`

/**
 * Learning component
 * Single Responsibility: Display learning section
 * KISS: Simple component that maps over learning data
 */
function Learning() {
  return (
    <>
      <style>{learningSectionStyles}</style>
      <section className="learning-section">
        <SectionTitle>What I'm Learning Now</SectionTitle>
        <Card className="learning-container">
          {learningItems.map((item) => (
            <div key={item.id} className="learning-item">
              <div className="learning-title">
                <span className="learning-icon">{item.icon}</span>
                {item.title}
              </div>
              <p className="learning-description">{item.description}</p>
            </div>
          ))}
        </Card>
      </section>
    </>
  )
}

export default Learning

