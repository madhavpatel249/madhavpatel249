import React, { useRef, useState, useEffect } from 'react'

// Use Vite's base URL for proper path resolution in deployment
const getImagePath = () => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}images/greenpenguin.png`.replace(/\/\//g, '/')
}

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
  const [imageSrc, setImageSrc] = useState(getImagePath())

  useEffect(() => {
    // Verify image exists and set correct path
    const img = new Image()
    img.onload = () => {
      setImageSrc(getImagePath())
    }
    img.onerror = () => {
      // Try alternative paths
      const base = import.meta.env.BASE_URL || '/'
      const paths = [
        '/images/greenpenguin.png',
        `${base}images/greenpenguin.png`.replace(/\/\//g, '/'),
        './images/greenpenguin.png',
        'images/greenpenguin.png'
      ]
      // Try each path
      let pathIndex = 0
      const tryNextPath = () => {
        if (pathIndex < paths.length) {
          const testImg = new Image()
          testImg.onload = () => {
            setImageSrc(paths[pathIndex])
          }
          testImg.onerror = () => {
            pathIndex++
            tryNextPath()
          }
          testImg.src = paths[pathIndex]
        }
      }
      tryNextPath()
    }
    img.src = getImagePath()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{penguinStyles}</style>
      <div className="green-penguin-container" onClick={scrollToTop}>
          <img 
            ref={imgRef}
            src={imageSrc}
            alt="Green Penguin" 
            className="green-penguin"
            onError={(e) => {
              console.error('Green penguin image not found at:', e.target.src);
              // Final fallback - try absolute URL
              const absolutePath = `${window.location.origin}/images/greenpenguin.png`
              if (e.target.src !== absolutePath) {
                e.target.src = absolutePath
              } else {
                console.error('Could not load green penguin image');
                e.target.style.display = 'none';
              }
            }}
          />
      </div>
    </>
  )
}

export default GreenPenguin

