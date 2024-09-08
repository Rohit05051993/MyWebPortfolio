import React from 'react';
import Intro from './Intro';
import WhoAmI from './Who';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Project from './Project';
import Services from './Services';
import Contact from './Contact';


function Home() {
  return (
    <div>
      <Intro />
      <WhoAmI />
      <Skills />
      <Education />
      <Experience />
      <Project />
      {/* <Services /> */}
      <Contact />
    </div>
  )
}

export default Home