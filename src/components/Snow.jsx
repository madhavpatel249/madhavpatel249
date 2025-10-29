import React, { useEffect, useState } from 'react'

const snowStyles = `
  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }
  .snowflake {
    position: absolute;
    top: -10px;
    color: white;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
    user-select: none;
    will-change: transform;
    transform: translateZ(0);
  }
  @keyframes snowfall {
    0% {
      transform: translateY(-10px) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(calc(100vh + 10px)) translateX(var(--sway)) rotate(360deg);
    }
  }
`

const SNOWFLAKES = ['❄', '❅', '❆', '*', '✱']

function Snow() {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const createSnowflake = (index) => {
      const sway = (Math.random() * 40 - 20).toFixed(1)
      const duration = Math.random() * 5 + 4
      const delay = Math.random() * 3
      
      return {
        id: index,
        left: Math.random() * 100,
        fontSize: Math.random() * 10 + 6,
        duration: duration,
        delay: delay,
        sway: sway,
        character: SNOWFLAKES[Math.floor(Math.random() * SNOWFLAKES.length)]
      }
    }

    // Create fewer snowflakes for better performance
    const flakes = Array.from({ length: 30 }, (_, i) => createSnowflake(i))
    setSnowflakes(flakes)
  }, [])

  return (
    <>
      <style>{snowStyles}</style>
      <div className="snow-container">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              fontSize: `${flake.fontSize}px`,
              animation: `snowfall ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              '--sway': `${flake.sway}px`,
              opacity: 0.25 + (flake.fontSize / 16) * 0.2
            }}
          >
            {flake.character}
          </div>
        ))}
      </div>
    </>
  )
}

export default Snow
