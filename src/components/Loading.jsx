import React, { useState, useEffect, useRef } from 'react'

const loadingGifs = [
  '/madhavpatel249/images/loading/pizzaflip.gif',
  '/madhavpatel249/images/loading/shovellingpenguin.gif',
  '/madhavpatel249/images/loading/cartsurferpenguin.gif',
  '/madhavpatel249/images/loading/twopenguins.gif'
]

const loadingStyles = `
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0099cc;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s ease-out;
  }
  .loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
  }
  .pizza-container {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: bounce 1s ease-in-out infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .pizza-gif {
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
  }
  .loading-bar-container {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .loading-bar {
    width: 100%;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    overflow: hidden;
    border: 3px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .loading-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #FFA726 0%, #FB8C00 50%, #FFA726 100%);
    background-size: 200% 100%;
    border-radius: 12px;
    transition: width 0.3s ease;
    animation: shimmer 2s infinite;
    box-shadow: 0 0 20px rgba(255, 167, 38, 0.6);
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .loading-text {
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    .pizza-gif {
      max-width: 200px;
      max-height: 200px;
    }
    .loading-bar-container {
      width: 300px;
    }
    .loading-text {
      font-size: 1.2rem;
    }
  }
`

function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [selectedGif, setSelectedGif] = useState('')
  const intervalRef = useRef(null)
  const pausedAt33Ref = useRef(false)
  const pausedAt50Ref = useRef(false)

  // Randomly select a GIF when component mounts
  useEffect(() => {
    const randomGif = loadingGifs[Math.floor(Math.random() * loadingGifs.length)]
    setSelectedGif(randomGif)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setTimeout(() => {
            onComplete()
          }, 500)
          return 100
        }

        // Pause at 33%
        if (prev >= 31 && prev < 33 && !pausedAt33Ref.current) {
          pausedAt33Ref.current = true
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setTimeout(() => {
            pausedAt33Ref.current = false
            intervalRef.current = setInterval(updateProgress, 12)
          }, 600)
          return 33
        }

        // Pause at 50%
        if (prev >= 48 && prev < 50 && !pausedAt50Ref.current) {
          pausedAt50Ref.current = true
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setTimeout(() => {
            pausedAt50Ref.current = false
            intervalRef.current = setInterval(updateProgress, 12)
          }, 600)
          return 50
        }

        // Determine increment based on current progress
        // 0-20 and 20-50: 0.8x speed (1.6 increment per 50ms)
        // 50-100: 2x speed (4 increment per 25ms)
        let increment = 4 // Default speed for 50-100 (doubled)
        if (prev < 50) {
          increment = 3.2 // 1.6x speed for 0-20 and 20-50 (doubled)
        }

        return prev + increment
      })
    }

    intervalRef.current = setInterval(updateProgress, 6)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [onComplete])

  return (
    <>
      <style>{loadingStyles}</style>
      <div className="loading-screen">
        <div className="loading-content">
        <div className="pizza-container">
          {selectedGif && (
            <img 
              src={selectedGif} 
              alt="Loading Animation" 
              className="pizza-gif"
              onError={(e) => {
                console.error('GIF not found:', selectedGif);
                e.target.style.display = 'none';
              }}
            />
          )}
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div 
              className="loading-bar-fill" 
              style={{ width: `${Math.round(progress)}%` }}
            ></div>
          </div>
          <div className="loading-text">{Math.round(progress)}%</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Loading

