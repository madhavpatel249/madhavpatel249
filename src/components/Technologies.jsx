import React from 'react'

const cardStyles = `
  .card.igloo-card {
    padding: 30px;
    background: linear-gradient(to bottom, #006d91 0%, #006080 20%, #005c7a 50%, #006080 80%, #006d91 100%);
    border: 2px solid rgba(173, 216, 230, 0.4);
    border-radius: 12px;
    box-shadow: 
      inset 0 1px 0px rgba(255, 255, 255, 0.3),
      inset 0 -1px 0px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
  }
  .card {
    padding: 0;
  }
  .skills-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: start;
  }
  .puffles-column {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px 20px 20px;
  }
  .puffles-gif {
    max-width: 100%;
    height: auto;
    width: auto;
    max-height: 280px;
  }
  .skills-column {
    display: flex;
    flex-direction: column;
  }
  .card h2 {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .skills-category {
    margin-bottom: 30px;
  }
  .skills-category h3 {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
  }
  .badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    position: relative;
    cursor: pointer;
  }
  .badge:hover {
    transform: translateY(-4px) scale(1.08) rotate(2deg);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.28);
  }
  .badge-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  .badge:hover .badge-icon {
    transform: scale(1.05);
  }
  .badge-tooltip {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 100;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
  }
  .badge-tooltip::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(0, 0, 0, 0.8);
  }
  .badge:hover .badge-tooltip {
    opacity: 1;
  }
  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .puffles-column {
      order: 2;
      padding-top: 20px;
    }
    .skills-column {
      order: 1;
    }
    .puffles-gif {
      max-height: 200px;
    }
    .card.igloo-card { padding: 20px; }
    .card h2 { font-size: 1.5rem; }
    .skills-category h3 { font-size: 1.2rem; }
    .badge {
      width: 60px;
      height: 60px;
      padding: 12px;
    }
    .badge-icon {
      width: 40px;
      height: 40px;
    }
  }
`

function Technologies() {
  const languages = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
  ]

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="card igloo-card">
        <div className="skills-container">
          <div className="puffles-column">
            <img 
              src="/images/loading/cartsurferpenguin.gif" 
              alt="Cart Surfer Penguin" 
              className="puffles-gif"
              onError={(e) => {
                console.error('Cart surfer penguin GIF not found');
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div className="skills-column">
            <h2>Skills</h2>
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="tech-badges">
                {languages.map((lang, index) => (
                  <div key={index} className="badge">
                    <img src={lang.icon} alt={lang.name} className="badge-icon" />
                    <span className="badge-tooltip">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3>Technologies & Tools</h3>
              <div className="tech-badges">
                {technologies.map((tech, index) => (
                  <div key={index} className="badge">
                    <img src={tech.icon} alt={tech.name} className="badge-icon" />
                    <span className="badge-tooltip">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies
