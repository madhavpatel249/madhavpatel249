import React, { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { initScrollReveal } from './utils/scrollReveal'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <ThemeProvider>
      <div className="app">
        <FloatingNav />
        <div className="container">
          <main>
            <Hero />
            <Education />
            <Projects />
            <Skills />
            <Learning />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
