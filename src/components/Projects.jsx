import { projects } from '../data/projects'

const projectsStyles = `
  .projects {
    padding: 8px 0;
    margin-bottom: 0;
    opacity: 1;
  }
  .section-title {
    font-family: var(--heading-font);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 12px;
    color: var(--text);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .project-card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  }
  .project-visual {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 12px;
    background: #f0f0f0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.4s ease;
  }
  .project-card:hover .project-visual {
    box-shadow: 0 6px 36px var(--glow-color, rgba(0, 0, 0, 0.15));
  }
  .project-visual img,
  .project-visual video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  .project-card:hover .project-visual img,
  .project-card:hover .project-visual video {
    transform: scale(1.03);
  }
  .project-visual.contain-image {
    background: #c4a882;
  }
  .project-visual.contain-image img,
  .project-visual.contain-image video {
    object-fit: contain;
    object-position: center center;
  }
  .project-visual.fit-image {
    background: #1a1a1a;
  }
  .project-visual.fit-image img,
  .project-visual.fit-image video {
    object-fit: cover;
    object-position: 15% center;
    transform: scale(1.01);
  }
  .project-visual-placeholder {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
    border-radius: 12px;
  }
  .project-visual-placeholder.youtube-placeholder {
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: 12px;
  }
  .project-visual-placeholder.youtube-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    border-radius: 12px;
  }
  .project-visual-placeholder svg {
    width: 60px;
    height: 60px;
    opacity: 0.3;
  }
  .project-visual-placeholder.youtube-placeholder svg {
    width: 80px;
    height: 80px;
    opacity: 1;
    fill: #ff0000;
    stroke: none;
  }
  .project-info {
    padding: 12px 0 0;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
  }
  .project-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin: 0;
    line-height: 1.3;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0 6px;
  }
  .project-title-text {
    flex-shrink: 0;
  }
  .project-subtitle {
    font-size: 12px;
    color: var(--text-light);
    font-weight: 400;
    position: relative;
    top: -1px;
    white-space: nowrap;
  }
  .project-year {
    font-size: 14px;
    color: var(--text-light);
    flex-shrink: 0;
  }
  .project-description {
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.5;
    margin: 0;
  }
  .project-description strong {
    font-weight: 600;
    color: var(--text);
  }
  .project-links {
    display: flex;
    gap: 10px;
    margin-top: 4px;
  }
  .project-title-link {
    font-size: 13px;
    color: var(--accent);
    text-decoration: none;
    position: relative;
  }
  .project-title-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 0.3s ease;
  }
  .project-title-link:hover::after {
    width: 100%;
  }
  @media (max-width: 768px) {
    .projects {
      padding: 16px 0;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .project-visual {
      aspect-ratio: 16 / 9;
    }
    .project-title {
      font-size: 16px;
    }
    .project-description {
      font-size: 13px;
    }
  }
`

function Projects() {
    return (
        <>
            <style>{projectsStyles}</style>
            <section id="projects" className="projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className="project-card anim-fade-in-up"
                            style={{...(project.glowColor ? {'--glow-color': project.glowColor} : {}), animationDelay: `${0.1 + i * 0.05}s`}}
                        >
                            {project.image && (
                                <div className={`project-visual ${project.fitImage ? 'fit-image' : ''} ${project.containImage ? 'contain-image' : ''}`}>
                                    {project.image.endsWith('.mp4') ? (
                                        <video src={project.image} autoPlay loop muted playsInline />
                                    ) : (
                                        <img src={project.image} alt={project.title} />
                                    )}
                                </div>
                            )}
                            <div className="project-info">
                                <div className="project-header">
                                    <h3 className="project-title"><span className="project-title-text">{project.title}</span>{project.subtitle && <span className="project-subtitle">— {project.subtitle}</span>}</h3>
                                    {project.year && <span className="project-year">{project.year}</span>}
                                </div>
                                <p className="project-description">{project.shortDescription || ''}</p>
                                <div className="project-links">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title-link">Link</a>
                                    )}
                                    {project.demoLink && project.demoLink !== '#' && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-title-link">Demo</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects
