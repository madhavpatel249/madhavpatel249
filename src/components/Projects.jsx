import React, { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { projects } from '../data/projects'

const projectsStyles = `
  .projects {
    padding: 40px 0;
    margin-bottom: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .projects.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--text);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  .project-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 430px;
    min-height: 430px;
    margin: 0;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  .dark .project-card {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  }
  .project-card.pinpoint-card {
    position: relative;
  }
  .project-card.pinpoint-card .confetti-canvas {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    pointer-events: none;
    z-index: 1;
  }
  .project-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: var(--accent);
  }
  .project-visual {
    width: 100%;
    max-width: 100%;
    height: 50%;
    min-height: 200px;
    background: transparent;
    display: block;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 8px 8px 0 0;
  }
  .project-visual img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 8px 8px 0 0;
  }
  .project-visual-placeholder {
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
  }
  .project-visual-placeholder.youtube-placeholder {
    background: var(--bg);
    position: relative;
    padding: 0;
    overflow: hidden;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    border-radius: 8px 8px 0 0;
  }
  .project-visual-placeholder.youtube-placeholder img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
  }
  .project-visual-placeholder svg {
    width: 80px;
    height: 80px;
    opacity: 0.3;
  }
  .project-visual-placeholder.youtube-placeholder svg {
    width: 100px;
    height: 100px;
    opacity: 1;
    fill: #ff0000;
    stroke: none;
  }
  .project-content {
    padding: 14px 14px 0px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 6px;
  }
  .project-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    margin: 0;
    line-height: 1.3;
  }
  .project-subtitle {
    font-size: 12px;
    font-weight: 500;
    color: #B8860B;
    margin: 2px 0 0 0;
    font-style: italic;
  }
  .dark .project-subtitle {
    color: #DAA520;
  }
  .project-title-link {
    font-size: 13px;
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s;
    flex-shrink: 0;
  }
  .project-title-link:hover {
    text-decoration: underline;
  }
  .project-description {
    font-size: 13px;
    color: var(--text-light);
    line-height: 1.5;
    margin: 0;
    flex: 1;
    min-height: 0;
  }
  .project-description strong {
    font-weight: 600;
    color: var(--text);
  }
  .project-description-spacer {
    flex-shrink: 0;
    width: 100%;
    height: 24px;
  }
  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 0 14px 0;
    margin-top: auto;
    flex-shrink: 0;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tech-tag {
    font-size: 11px;
    color: var(--text-light);
    background: var(--border);
    padding: 4px 8px;
    border-radius: 6px;
  }
  .dark .tech-tag {
    color: var(--text);
    background: rgba(255, 255, 255, 0.12);
  }
  .project-links {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
  }
  .project-status {
    font-size: 10px;
    color: var(--text-light);
    background: var(--border);
    padding: 4px 8px;
    border-radius: 6px;
    white-space: nowrap;
    font-weight: 500;
  }
  .dark .project-status {
    background: rgba(255, 255, 255, 0.12);
  }
  @media (max-width: 768px) {
    .projects {
      padding: 30px 0;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .project-visual {
      min-height: 200px;
    }
    .project-content {
      padding: 12px 12px 0;
    }
    .project-footer {
      padding: 8px 0 14px;
    }
  }
`

const NO_IMAGE_PROJECT_IDS = ['ai-resume-analyzer', 'battery-health-prediction'];

function Projects({ isVisible = false }) {
    const pinpointCardRef = useRef(null);
    const confettiFiredRef = useRef(false);

    useEffect(() => {
        const el = pinpointCardRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (confettiFiredRef.current || entry.intersectionRatio < 0.75) return;
                confettiFiredRef.current = true;

                const canvas = document.createElement('canvas');
                canvas.className = 'confetti-canvas';
                const w = el.offsetWidth * 1.2;
                const h = el.offsetHeight * 1.2;
                canvas.width = w;
                canvas.height = h;
                el.appendChild(canvas);

                const fire = confetti.create(canvas, { resize: false });
                const count = 120;
                const defaults = { origin: { x: 0.5, y: 0.5 } };
                fire({ ...defaults, particleCount: count, spread: 70 });
                fire({ ...defaults, particleCount: count * 0.4, spread: 100, scalar: 1.2 });
                setTimeout(() => {
                    fire({ ...defaults, particleCount: 40, spread: 60, startVelocity: 30 });
                }, 150);
            },
            { threshold: 0.75, rootMargin: '0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const getYouTubeThumbnail = (url) => {
        if (!url) return null;
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
        if (!videoId) return null;
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    return (
        <>
            <style>{projectsStyles}</style>
            <section id="projects" className={`projects reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
                    {projects.map((project) => {
                        const youtubeThumbnail = project.videoLink ? getYouTubeThumbnail(project.videoLink) : null;
                        const showImageSection = project.image || !NO_IMAGE_PROJECT_IDS.includes(project.id);
                        return (
                        <div key={project.id} ref={project.id === 'pinpoint' ? pinpointCardRef : undefined} className={`project-card ${showImageSection ? 'has-image' : ''} ${project.id === 'pinpoint' ? 'pinpoint-card' : ''}`} data-project-id={project.id}>
                            {project.image ? (
                                <div className="project-visual">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            ) : !NO_IMAGE_PROJECT_IDS.includes(project.id) ? (
                                <div className="project-visual">
                                    {project.videoLink && youtubeThumbnail ? (
                                        <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="project-visual-placeholder youtube-placeholder" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                            <img src={youtubeThumbnail} alt={`${project.title} video thumbnail`} />
                                            <div className="youtube-play-overlay">
                                                <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.63-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="currentColor"/>
                                                    <path d="M 45,24 27,14 27,34" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="project-visual-placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                </div>
                                    <div className="project-links">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title-link">Link</a>
                                        )}
                                        {project.codeLink && project.codeLink !== '#' && (
                                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-title-link">Code</a>
                                        )}
                                        {project.demoLink && project.demoLink !== '#' && (
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-title-link">Demo</a>
                )}
                                    </div>
              </div>
              <div className="project-description">{project.description}</div>
                                <div className="project-description-spacer" />
                                <div className="project-footer">
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-tech">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
                                    {project.status && (
                                        <span className="project-status">{project.status}</span>
                                    )}
                                </div>
                            </div>
            </div>
                        );
                    })}
        </div>
      </section>
    </>
  )
}

export default Projects
