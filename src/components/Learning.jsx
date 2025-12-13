import React from 'react'
import { learningItems } from '../data/learning'

const learningStyles = `
  .learning {
    margin-bottom: 0;
    padding-top: 40px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .learning.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text);
  }
  .learning-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .learning-item {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border);
  }
  .learning-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .learning-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
  }
  .learning-icon {
    font-size: 20px;
  }
  .learning-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
  }
  .learning-description {
    font-size: 14px;
    color: var(--text);
    line-height: 1.6;
  }
`

function Learning({ isVisible = false }) {
    return (
        <>
            <style>{learningStyles}</style>
            <section className={`learning reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">Learning</h2>
                <div className="learning-list">
                    {learningItems.map((item) => (
                        <div key={item.id} className="learning-item">
                            <div className="learning-header">
                                <span className="learning-icon">{item.icon}</span>
                                <h3 className="learning-title">{item.title}</h3>
                            </div>
                            <p className="learning-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Learning
