import React, { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { initScrollReveal } from './utils/scrollReveal'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/projects/Projects'
import Learning from './components/learning/Learning'
// import LeetCodeActivity from './components/LeetCodeActivity' // Hidden for now
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import './App.css'

/**
 * Main App component
 * Single Responsibility: Compose the application structure
 * KISS: Simple composition of components
 */
function App() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <ThemeProvider>
      <div className="app">
        <DarkModeToggle />
        <div className="container">
          <main>
            <Hero />
            <div id="about" className="reveal"><About /></div>
            <div id="skills" className="reveal"><Technologies /></div>
            <div id="projects" className="reveal"><Projects /></div>
            <div id="learning" className="reveal"><Learning /></div>
            {/* <div id="leetcode" className="reveal"><LeetCodeActivity /></div> */}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

