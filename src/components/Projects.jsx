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
  .card h2 {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 20px;
  }
  .project-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 25px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }
  .project-title {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 12px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .project-description {
    color: white;
    line-height: 1.7;
    font-size: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
  }
  .project-description li {
    margin-bottom: 8px;
    margin-left: 20px;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
  }
  .tech-tag {
    background: rgba(41, 182, 246, 0.3);
    color: white;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 768px) {
    .card.igloo-card { padding: 20px; }
    .card h2 { font-size: 1.5rem; }
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .project-title { font-size: 1.3rem; }
  }
`

function Projects() {
  const projects = [
    {
      title: 'ATS Screening Tool',
      description: (
        <ul>
          <li>Developed an AI-powered Resume Analyzer leveraging OpenAI to score resume-job description alignment with an estimated 85%+ accuracy, identify keyword gaps per resume, and provide actionable improvement suggestions.</li>
          <li>Engineered a multi-format parsing module to accurately extract text from PDF and DOCX resumes, achieving a 90%+ success rate, enabling effective data preprocessing for the AI analysis.</li>
          <li>Implemented AI-driven analysis to generate a predictive ATS pass-through percentage, alongside keyword matching and actionable recommendations, to help users optimize resumes and potentially increase callback rates by 10-15%.</li>
        </ul>
      ),
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS', 'Git']
    },
    {
      title: 'Evently - Full Stack Development',
      description: (
        <ul>
          <li>Developed Evently, a full-stack MERN event platform, delivering 5+ core features like dynamic event discovery, user authentication, and a complete ticketing system tested with over 50 sample events.</li>
          <li>Engineered responsive UIs with React and Tailwind CSS for seamless event browse and purchase flows; built over 10 robust backend RESTful APIs using Express.js to support all platform features.</li>
          <li>Optimized backend maintainability by refactoring Node.js/Express.js logic into a controller-based architecture, significantly improving the scalability and structure of the API.</li>
        </ul>
      ),
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Git']
    },
    {
      title: 'Car Trading Full Stack Website',
      description: (
        <ul>
          <li>Architected a pre-owned car marketplace featuring user authentication, dynamic listings for over 50 sample vehicles, a seller review system, and 5+ filtering options.</li>
          <li>Designed a 5-entity relational MySQL database and built over 15 RESTful APIs (Node.js/Express) to manage car listings, user profiles, and reviews.</li>
          <li>Resolved image storage challenges using URL linking and instituted dynamic client-side filters for car listings, improving search performance and user experience.</li>
        </ul>
      ),
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL']
    }
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="card igloo-card">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">{project.description}</div>
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
