import React, { useRef } from 'react'

const penguinStyles = `
  .green-penguin-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .green-penguin-container:hover {
    transform: scale(1.1);
  }
  .green-penguin {
    height: 160px;
    width: auto;
  }
  @media (max-width: 768px) {
    .green-penguin-container {
      bottom: 16px;
      right: 16px;
    }
    .green-penguin {
      height: 120px;
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

