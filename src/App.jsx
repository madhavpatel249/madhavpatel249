import React, { useState } from 'react'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GreenPenguin from './components/GreenPenguin'
import Snow from './components/Snow'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="app">
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Snow />
          <Navigation />
          <GreenPenguin />
          <div className="container">
            <main>
              <Hero />
              <div id="about"><About /></div>
              <div id="skills"><Technologies /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default App

