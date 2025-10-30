import React from 'react'

const cardStyles = `
  .skills-section {
    padding: 12px 0; /* reduce vertical padding */
  }
  .skills-section h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .skills-category {
    margin-bottom: 20px;
  }
  .skills-category h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
    justify-content: center;
    overflow: visible; /* allow tooltips to overflow rows */
  }
  .badge {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: visible; /* ensure tooltip not clipped */
    z-index: 0;
  }
  .badge:hover {
    background-color: #e3f2fd;
    border-color: #2196f3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
    z-index: 2; /* lift above adjacent rows */
  }
  .badge-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: brightness(0);
  }
  .badge-tooltip {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000000;
    color: #ffffff;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 100;
  }
  .badge:hover .badge-tooltip {
    opacity: 1;
  }
  .badge-tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #000000;
  }
`

function Technologies() {
  const languages = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openjdk.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg' }
  ]

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg' }
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <div className="tech-badges">
              {[...languages, ...technologies].map((item, index) => (
                <div key={index} className="badge">
                  <img src={item.icon} alt={item.name} className="badge-icon" />
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
