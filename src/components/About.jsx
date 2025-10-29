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
  .card h2 {
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .card p {
    line-height: 1.8;
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  .coursework {
    margin-top: 20px;
  }
  .coursework-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  .coursework-item {
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 16px;
    border-radius: 15px;
    font-size: 0.95rem;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    cursor: pointer;
    display: inline-block;
  }
  .coursework-item:hover {
    transform: translateY(-2px) scale(1.03);
    background: rgba(255, 255, 255, 0.28);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 768px) {
    .card.igloo-card { padding: 20px; }
    .card h2 { font-size: 1.5rem; }
    .card p { font-size: 1rem; }
  }
`

function About() {
  const coursework = [
    'Web Programming',
    'Data Structures',
    'Algorithms',
    'Object-Oriented Programming',
    'Software Architecture',
    'Data Management'
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="card igloo-card">
        <h2>About Me</h2>
        <p>Hello, I'm <strong>Madhav Patel</strong></p>
        <p>
          I'm a 3rd Year Software Engineering student at Ontario Tech University, passionate about building intelligent, 
          full-stack applications that solve real-world problems. My expertise lies at the intersection of AI and web 
          development, where I leverage modern technologies like React, Node.js, and Python to create scalable, 
          user-centric solutions.
        </p>
        <p>
          I've successfully developed AI-powered applications including an ATS Resume Analyzer achieving 85%+ accuracy, 
          and full-stack platforms like Evently—a complete MERN event management system. My experience extends across 
          the entire software development lifecycle, from designing relational databases and RESTful APIs to crafting 
          responsive, intuitive user interfaces.
        </p>
        <p>
          Beyond technical skills, I bring strong communication, problem-solving, and teamwork abilities honed through 
          leadership roles managing teams of 10+ members. I'm actively seeking internship and co-op opportunities where 
          I can contribute to innovative projects while continuing to grow as a software engineer.
        </p>
        <div className="coursework">
          <p><strong>Relevant Coursework:</strong></p>
          <div className="coursework-list">
            {coursework.map((course, index) => (
              <span key={index} className="coursework-item">{course}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
