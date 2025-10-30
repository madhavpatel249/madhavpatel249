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

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    // Force reload the GIF periodically to keep it looping
    // Use a longer interval to let the full animation cycle play
    const reloadGif = () => {
      if (img && img.src) {
        const src = img.src
        // Remove any existing query parameters and add a timestamp to force reload
        const baseSrc = src.split('?')[0]
        img.src = `${baseSrc}?t=${Date.now()}`
      }
    }

    // Reload every 5 seconds to restart animation
    const interval = setInterval(reloadGif, 5000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  return (
    <>
      <style>{penguinStyles}</style>
      <div className="green-penguin-container" onClick={scrollToTop}>
        <img 
          ref={imgRef}
          src="/madhavpatel249/images/greenpenguin.gif" 
          alt="Green Penguin" 
          className="green-penguin"
          onError={(e) => {
            console.error('Green penguin GIF not found');
            e.target.style.display = 'none';
          }}
        />
      </div>
    </>
  )
}

export default GreenPenguin

