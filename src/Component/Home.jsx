import React from 'react';
import Intro from './Intro';
import WhoAmI from './Who';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';


function Home() {
  return (
    <div>
      <Intro />
      <WhoAmI />
      <Skills />
      <Education/>
      <Experience/>
      
    </div>
  )
}

export default Home