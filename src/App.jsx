import React, { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { MobileMenu } from './components/MobileMenu'
import "./index.css"
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { RevealOnScroll } from './components/RevealOnscroll'
import { About } from './components/sections/About'
const App = () => {
  const[isLoaded,setIsLoaded]=useState(false)
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100` }>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>     
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        </div>
    </>
  )
}

export default App
