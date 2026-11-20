import React, { useState } from 'react'
import { MobileMenu } from './components/MobileMenu'
import "./index.css"
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

const App = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
        <div className="min-h-screen bg-black text-gray-100">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>     
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
  )
}

export default App
