import React from 'react'

const puffleStyles = `
  .black-puffle-container {
    position: fixed;
    top: 50px;
    left: 20px;
    z-index: 900;
    pointer-events: none;
  }
  .black-puffle {
    height: 200px;
    width: auto;
  }
  @media (max-width: 768px) {
    .black-puffle-container {
      top: 40px;
      left: 15px;
    }
    .black-puffle {
      height: 150px;
    }
  }
`

function BlackPuffle() {
  return (
    <>
      <style>{puffleStyles}</style>
      <div className="black-puffle-container">
        <img 
          src="/madhavpatel249/images/blackpuffle.gif" 
          alt="Black Puffle" 
          className="black-puffle"
          onError={(e) => {
            console.error('Black puffle GIF not found');
            e.target.style.display = 'none';
          }}
        />
      </div>
    </>
  )
}

export default BlackPuffle

