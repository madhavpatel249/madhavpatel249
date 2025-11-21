import React, { useRef } from 'react'

// Import image to ensure it's bundled correctly
const penguinImage = '/images/greenpenguin.png'

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
            src={penguinImage}
            alt="Green Penguin" 
            className="green-penguin"
            onError={(e) => {
              console.error('Green penguin image not found at:', e.target.src);
              // Try alternative paths for deployment
              const basePath = window.location.pathname.replace(/\/$/, '');
              const paths = [
                `${basePath}/images/greenpenguin.png`,
                '/images/greenpenguin.png',
                './images/greenpenguin.png',
                'images/greenpenguin.png'
              ];
              const currentIndex = paths.findIndex(p => e.target.src.includes(p.split('/').pop()));
              if (currentIndex < paths.length - 1) {
                e.target.src = paths[currentIndex + 1];
              } else {
                console.error('Could not load green penguin image from any path');
                e.target.style.display = 'none';
              }
            }}
          />
      </div>
    </>
  )
}

export default GreenPenguin

