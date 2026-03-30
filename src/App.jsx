import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <main>
          <Hero />
            <Education />
            <Experience />
            <Projects />
            <Footer />
        </main>
        </div>
      </div>
  )
}

export default App
