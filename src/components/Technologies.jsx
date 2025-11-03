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
    position: relative; /* create positioning context */
    isolation: isolate; /* create stacking context for the container */
  }
  .badge {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    overflow: visible; /* ensure tooltip not clipped */
    z-index: 0;
    transform: translate3d(0, 0, 0); /* force GPU acceleration and create stacking context */
    will-change: transform, z-index; /* hint browser about upcoming changes */
  }
  .badge:hover {
    background-color: #e8f5e8;
    border-color: #4caf50;
    transform: translate3d(0, -2px, 0); /* maintain stacking context with 3D transform */
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
    z-index: 100; /* much higher z-index applied immediately */
  }
  .badge-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: brightness(0);
  }
  .badge-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
  }
  .badge-tooltip {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%) translateZ(0); /* force GPU acceleration */
    background-color: #000000;
    color: #ffffff;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden; /* completely hide until hover to prevent glitch */
    pointer-events: none;
    transition: opacity 0.15s ease 0s, visibility 0s linear 0s; /* hide visibility immediately when hover ends */
    z-index: 1; /* relative to parent badge's stacking context */
  }
  .badge:hover .badge-tooltip {
    opacity: 1;
    visibility: visible; /* show immediately on hover */
    transition: opacity 0.15s ease 0s, visibility 0s linear 0s; /* no delay on show */
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
