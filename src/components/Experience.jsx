import React from 'react'
import { experiences } from '../data/experiences'

const experienceStyles = `
  .experience {
    padding: 0 0 20px 0;
    margin-bottom: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }
  .experience.visible {
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
  .experience-item {
    padding: 0;
    margin: 0;
  }
  .experience-content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }
  .company-logo-container {
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
  .company-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .company-logo-container svg {
    width: 100%;
    height: 100%;
  }
  .company-logo-placeholder {
    width: 100%;
    height: 100%;
    background: #FF0000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  .experience-info {
    flex: 1;
  }
  .experience-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
  }
  .experience-details {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 4px;
  }
  .experience-program {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 4px;
  }
  .experience-partnership {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 12px;
  }
  .experience-responsibilities {
    margin-top: 12px;
  }
  .experience-responsibilities ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .experience-responsibilities li {
    font-size: 13px;
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
  }
  .experience-responsibilities li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--text);
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .experience {
      padding: 24px 0;
    }
    .company-logo-container {
      width: 50px;
      height: 50px;
    }
    .experience-title {
      font-size: 16px;
    }
    .experience-details {
      font-size: 13px;
    }
  }
`

function Experience({ isVisible = false }) {
    return (
        <>
            <style>{experienceStyles}</style>
            <section className={`experience ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">Experience</h2>
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-item">
                        <div className="experience-content">
                            <div className="company-logo-container">
                                {experience.logo ? (
                                    <img 
                                        src={experience.logo} 
                                        alt={experience.company} 
                                        className="company-logo"
                                    />
                                ) : (
                                    <div className="company-logo-placeholder">
                                        V
                                    </div>
                                )}
                            </div>
                            <div className="experience-info">
                                <div className="experience-title">{experience.title}</div>
                                <div className="experience-details">
                                    {experience.duration} · {experience.durationDetail} • {experience.location}
                                </div>
                                <div className="experience-program">{experience.program}</div>
                                <div className="experience-partnership">{experience.partnership}</div>
                                <div className="experience-responsibilities">
                                    <ul>
                                        {experience.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Experience
