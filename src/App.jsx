import React from 'react'
import Hero from './components/Hero'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import FeatureGrid from './components/FeatureGrid'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Problems />
      <HowItWorks />
      <FeatureGrid />
      <Dashboard />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
