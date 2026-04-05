const educationStyles = `
  .education {
    padding: 8px 0 8px 0;
    margin-top: 0;
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
  .education-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-radius: 10px;
    cursor: default;
    overflow: hidden;
    transition: background 0.3s ease, box-shadow 0.4s ease;
  }
  .education-card:hover {
    background: #ffffff;
    box-shadow: 0 2px 16px rgba(50, 130, 210, 0.5);
  }
  .education-banner {
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
  .education-card:hover .education-banner {
    opacity: 1;
  }
  .education-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  .education-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #ffffff 0%, transparent 100%);
    z-index: 1;
  }
  .university-logo-container {
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
  .university-logo {
    width: 90%;
    height: 90%;
    object-fit: contain;
    object-position: center;
  }
  .education-info {
    flex: 1;
    position: relative;
    z-index: 1;
  }
  .education-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 2px;
  }
  .education-details {
    font-size: 12px;
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    .education {
      padding: 8px 0;
      margin-top: 0;
    }
    .university-logo-container {
      width: 60px;
      height: 60px;
    }
    .education-name {
      font-size: 15px;
    }
    .education-details {
      font-size: 13px;
    }
    .education-banner {
      width: 50%;
    }
  }
`

function Education() {
    return (
        <>
            <style>{educationStyles}</style>
            <section id="education" className="education">
                <h2 className="section-title">Education</h2>
                <div className="education-card anim-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="education-banner">
                        <img src="/images/otu_banner.jpg" alt="" />
                    </div>
                    <div className="university-logo-container">
                        <img
                            src="/images/otechu.png"
                            alt="Ontario Tech University"
                            className="university-logo"
                        />
                    </div>
                    <div className="education-info">
                        <div className="education-name">Ontario Tech University</div>
                        <div className="education-details">Software Engineering (2023 - 2027)</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education
