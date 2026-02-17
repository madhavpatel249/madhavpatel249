import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { initScrollReveal } from './utils/scrollReveal'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
    <div className="app">
        <div className="app-bg-blobs" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
          <div className="blob blob-5" />
          <div className="blob blob-6" />
        </div>
        <FloatingNav />
      <div className="container">
        <main>
          <Hero />
            <Education isVisible={isScrolled} />
            <Experience isVisible={isScrolled} />
            <Projects isVisible={isScrolled} />
            <Skills isVisible={isScrolled} />
            <Learning isVisible={isScrolled} />
            <Footer isVisible={isScrolled} />
        </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
