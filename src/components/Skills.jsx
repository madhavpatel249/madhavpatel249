import React from 'react'

const skillsStyles = `
  .skills {
    margin-bottom: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .skills.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text);
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 10px;
  }
  .skill {
    text-align: center;
    padding: 14px;
    border: 1px solid var(--border);
    border-radius: 6px;
    transition: border-color 0.2s;
  }
  .skill:hover {
    border-color: var(--accent);
  }
  .skill-icon {
    width: 28px;
    height: 28px;
    margin: 0 auto 8px;
    object-fit: contain;
  }
  .skill-icon[src*="express"] {
    filter: none;
  }
  .dark .skill-icon[src*="express"] {
    filter: brightness(0) invert(1);
  }
  .skill-name {
    font-size: 12px;
    color: var(--text);
  }
  .skill-text {
    font-size: 13px;
    color: var(--text);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 28px;
    margin: 0;
  }
  .skill[data-text-only="true"] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
      gap: 8px;
    }
    .skill {
      padding: 12px;
    }
  }
`

const TECHNOLOGIES = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'SQL', textOnly: true },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
]

function Skills({ isVisible = false }) {
    return (
        <>
            <style>{skillsStyles}</style>
            <section className={`skills reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {TECHNOLOGIES.map((tech, index) => (
                        <div key={index} className="skill" data-text-only={tech.textOnly ? "true" : "false"}>
                            {tech.textOnly ? (
                                <div className="skill-text">{tech.name}</div>
                            ) : (
                                <>
                                    <img 
                                        src={tech.icon} 
                                        alt={tech.name} 
                                        className="skill-icon"
                                    />
                                    <div className="skill-name">{tech.name}</div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills
