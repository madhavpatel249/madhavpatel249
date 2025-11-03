import React, { useEffect, useRef } from 'react'

const penguinStyles = `
  .green-penguin-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .green-penguin-container:hover {
    transform: scale(1.1);
  }
  .green-penguin {
    height: 180px;
    width: auto;
  }
  @media (max-width: 768px) {
    .green-penguin-container {
      bottom: 15px;
      right: 15px;
    }
    .green-penguin {
      height: 140px;
    }
  }
`

function GreenPenguin() {
  const imgRef = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // No need to reload PNG - it's a static image

  return (
    <>
      <style>{penguinStyles}</style>
      <div className="green-penguin-container" onClick={scrollToTop}>
        <img 
          ref={imgRef}
          src="/images/greenpenguin.png" 
          alt="Green Penguin" 
          className="green-penguin"
          onError={(e) => {
            console.error('Green penguin image not found');
            e.target.style.display = 'none';
          }}
        />
      </div>
    </>
  )
}

export default GreenPenguin

