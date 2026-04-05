import { experiences } from '../data/experiences'

const experienceStyles = `
  .experience {
    padding: 8px 0 4px 0;
    margin-bottom: 0;
    opacity: 1;
  }
  .section-title {
    font-family: var(--heading-font);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
    color: var(--text);
  }
  .experience-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 3px;
    cursor: default;
    overflow: hidden;
    transition: background 0.3s ease, box-shadow 0.4s ease;
  }
  .experience-card:last-child {
    margin-bottom: 0;
  }
  .experience-card:hover {
    background: #ffffff;
    box-shadow: 0 2px 16px var(--glow-color, rgba(0, 0, 0, 0.1));
  }
  .experience-banner {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 0;
  }
  .experience-card:hover .experience-banner {
    opacity: 1;
  }
  .experience-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  .experience-banner.banner-small {
    background: white;
  }
  .experience-banner.banner-small::before {
    width: 100%;
    left: 0;
    background: linear-gradient(to right, #ffffff 0%, transparent 100%);
    z-index: 2;
  }
  .experience-banner.banner-small img {
    width: 75%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: auto;
    position: relative;
    z-index: 0;
  }
  .experience-banner.banner-small::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
    background: linear-gradient(to left, white 0%, transparent 100%);
    z-index: 1;
  }
  .experience-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #ffffff 0%, transparent 100%);
    z-index: 1;
  }
  .company-logo-container {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 3px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .company-logo {
    width: 90%;
    height: 90%;
    object-fit: contain;
    object-position: center;
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
    position: relative;
    z-index: 1;
  }
  .experience-company {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 2px;
  }
  .experience-title {
    font-size: 12px;
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    .experience {
      padding: 10px 0;
    }
    .experience-card {
      padding: 12px;
    }
    .company-logo-container {
      width: 52px;
      height: 52px;
    }
    .experience-company {
      font-size: 15px;
    }
    .experience-title {
      font-size: 13px;
    }
    .experience-banner {
      width: 50%;
    }
  }
`

function Experience() {
    return (
        <>
            <style>{experienceStyles}</style>
            <section className="experience">
                <h2 className="section-title">Experience</h2>
                {experiences.map((experience, i) => (
                    <div key={experience.id} className="experience-card anim-fade-in-up" style={{...(experience.glowColor ? {'--glow-color': experience.glowColor} : {}), animationDelay: `${0.1 + i * 0.05}s`}}>
                        {experience.banner && (
                            <div className={`experience-banner ${experience.bannerSize === 'small' ? 'banner-small' : ''}`}>
                                <img src={experience.banner} alt="" />
                            </div>
                        )}
                        <div className="company-logo-container">
                            {experience.logo ? (
                                <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="company-logo"
                                />
                            ) : (
                                <div className="company-logo-placeholder">
                                    {experience.company.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div className="experience-info">
                            <div className="experience-company">{experience.company}</div>
                            <div className="experience-title">{experience.title}{experience.duration && <span className="experience-duration"> ({experience.duration})</span>}</div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Experience
