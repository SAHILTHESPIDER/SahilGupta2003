import React from "react"
import { Navbar } from "./Component/Navbar"
import { Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"
import About from "./Component/About"

import AnimatedCursor from "react-animated-cursor"
import Skills from "./Component/Skills"
import EducationTimeline from "./Component/Education"
import Experince from "./Component/Experince"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
function App() {
 

  return (
    <>
    {/* <Routes>
      <Route exact path="/" element={<Navbar />} />
      <Route path="/about" element={<Footer />} />
       <Route path="/about" element={<Footer />} />
    </Routes> */}
    

    <AnimatedCursor />
    <div className="bg-black">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <EducationTimeline />
    <Experince />
    <Project />
    <Contact />
    <Footer />
    </div>

    
    </>
  
    )
}

export default App
