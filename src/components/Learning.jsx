import React from 'react'

const cardStyles = `
  .card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 30px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 3px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.4);
  }
  .card h2 {
    font-family: 'Fredoka One', cursive;
    color: #29B6F6;
    font-size: 2rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .card p {
    line-height: 1.8;
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    .card { padding: 20px; }
    .card h2 { font-size: 1.5rem; }
    .card p { font-size: 1rem; }
  }
`

function Learning() {
  return (
    <>
      <style>{cardStyles}</style>
      <section className="card igloo-card">
        <h2>What I'm Learning</h2>
        <p>.NET Fundamentals: Concepts, APIs and Libraries in the .NET to expand my full-stack and web development expertise.</p>
      </section>
    </>
  )
}

export default Learning
