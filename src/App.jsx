import React from 'react';
import Hero from './section/Hero';
import About from './section/About';
import TechStack from './section/TechStack';
import Projects from './section/Projects';
import Contact from './section/Contact';
import NavBar from './components/NavBar';
// import Contact from './section/Contact';
const App= () => {
  return(
    <div className="">
      <NavBar/>
    <Hero/>
    <About/>
    <TechStack/> 
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App