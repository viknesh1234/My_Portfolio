import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates';
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
