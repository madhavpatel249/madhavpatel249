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
  .contact-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .card h2 {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    text-align: left;
  }
  .card p {
    line-height: 1.8;
    margin-bottom: 25px;
    font-size: 1.1rem;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    text-align: left;
  }
  .contact-icons {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    width: 100%;
    flex-wrap: nowrap;
  }
  .puffles-column-contact {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    padding-top: 40px;
  }
  .puffles-gif-contact {
    max-width: 100%;
    height: auto;
    width: auto;
    max-height: 80px;
  }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: linear-gradient(135deg, #0077B6 0%, #005F8A 100%);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: 'Nunito', sans-serif;
    white-space: nowrap;
  }
  .contact-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  .contact-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .puffles-column-contact {
      order: 2;
    }
    .contact-content {
      order: 1;
    }
    .puffles-gif-contact {
      max-height: 80px;
    }
    .card.igloo-card { padding: 20px; }
    .card h2 { font-size: 1.5rem; }
    .card p { font-size: 1rem; }
    .contact-link {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
    .contact-icon {
      width: 20px;
      height: 20px;
    }
  }
`

function Contact() {
  return (
    <>
      <style>{cardStyles}</style>
      <section className="card igloo-card">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Contact</h2>
            <p>I'm always interested in networking and discussing new ideas. Feel free to reach out to me!</p>
            <div className="contact-icons">
              <a href="mailto:madhavpatel249@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
                  alt="Gmail" 
                  className="contact-icon"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span>madhavpatel249@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/madhavpatel249" className="contact-link" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                  alt="LinkedIn" 
                  className="contact-icon"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span>madhavpatel249</span>
              </a>
              <a href="https://github.com/madhavpatel249" className="contact-link" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
                  alt="GitHub" 
                  className="contact-icon"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span>madhavpatel249</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
