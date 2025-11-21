import React from 'react'

const cardStyles = `
  .skills-section {
    padding: 0;
  }
  .skills-section h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #1a1a1a;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
    transition: color 0.3s ease;
  }
  .dark .skills-section h2 {
    color: #e0e0e0;
  }
  .skills-category {
    margin-bottom: 0;
  }
  .skills-category h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    transition: color 0.3s ease;
  }
  .dark .skills-category h3 {
    color: #e0e0e0;
  }
  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 0;
    justify-content: flex-start;
    overflow: visible;
    position: relative;
    isolation: isolate;
  }
  .badge {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: visible;
    z-index: 0;
    transform: translate3d(0, 0, 0);
    will-change: transform, z-index;
  }
  .dark .badge {
    background-color: #2a2a2a;
    border-color: #404040;
  }
  .badge:hover {
    border-color: #0066cc;
    transform: translate3d(0, -4px, 0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  .badge-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: brightness(0);
    transition: transform 0.2s ease;
  }
  .badge:hover .badge-icon {
    transform: scale(1.05);
  }
  .badge-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    transition: color 0.3s ease;
  }
  .dark .badge-text {
    color: #e0e0e0;
  }
  .dark .badge-icon {
    filter: brightness(0) invert(1);
  }
  .badge-tooltip {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    background-color: #2a2a2a;
    color: #e0e0e0;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.15s ease 0s, visibility 0s linear 0s;
    z-index: 1;
  }
  .badge:hover .badge-tooltip {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.15s ease 0s, visibility 0s linear 0s;
  }
  .badge-tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #2a2a2a;
  }
`

function Technologies() {
  // Ordered with Python first, then strongest technologies
  const technologies = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
    // Frontend (strongest first)
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
    // Backend
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg' },
    // Databases (strongest first)
    { name: 'SQL', textOnly: true },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
    // Other languages/tools
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg' }
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <div className="tech-badges">
              {technologies.map((item, index) => (
                <div key={index} className="badge">
                  {item.textOnly ? (
                    <span className="badge-text">{item.name}</span>
                  ) : (
                    <img src={item.icon} alt={item.name} className="badge-icon" />
                  )}
                  <span className="badge-tooltip">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies
