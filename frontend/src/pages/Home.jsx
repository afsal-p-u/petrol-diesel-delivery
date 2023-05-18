import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Map from '../components/Map'

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <Services />
      <Map />
      <Footer />
    </div>
  )
}

export default Home