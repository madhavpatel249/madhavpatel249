import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'
import GreenPenguin from './components/GreenPenguin'
import './App.css'

function App() {
  return (
    <div className="app">
      <GreenPenguin />
      <div className="container">
        <main>
          <Hero />
          <div id="about"><About /></div>
          <div id="skills"><Technologies /></div>
          <div id="projects"><Projects /></div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

