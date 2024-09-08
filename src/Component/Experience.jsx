import React from 'react';
import pic from '../img/exp.svg';
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaGitAlt, FaDatabase, FaAws, FaDocker, FaAngular, FaVuejs, FaSass } from "react-icons/fa";


const skills = [
  { icon: <FaHtml5 />, skillname: "HTML", color:"red" },
  { icon: <FaCss3Alt />, skillname: "CSS" , color:"Green" },
  { icon: <FaJsSquare />, skillname: "JavaScript" , color:"red"},
  { icon: <FaReact />, skillname: "React" , color:"Green" },
  { icon: <FaNodeJs />, skillname: "Node.js" , color:"red"},
  { icon: <FaPython />, skillname: "Python" , color:"Green"},
  { icon: <FaJava />, skillname: "Java" , color:"red" },
  { icon: <FaPhp />, skillname: "PHP" , color:"Green" },
  { icon: <FaGitAlt />, skillname: "Git" , color:"red"},
  { icon: <FaDatabase />, skillname: "SQL" , color:"Green" },
  { icon: <FaAws />, skillname: "AWS" , color:"red" },
  { icon: <FaDocker />, skillname: "Docker" , color:"Green" },
  { icon: <FaAngular />, skillname: "Angular" , color:"red"},
  { icon: <FaVuejs />, skillname: "Vue.js" , color:"Green"},
  { icon: <FaSass />, skillname: "Sass" , color:"red"},
];

function Experience() {
  return (
    <div className='container mb-8 mt-24' id='experience'>
      <div className='grid grid-cols-1 md:grid-cols-6'>
        <div className='col-span-2'>
          <div className='w-96 object-cover  hidden md:block ml-8' >
            <img src={pic} alt={pic} />
          </div>
        </div>

        <div className='col-span-4'>

          <h1 className='text-[4rem] text-[#545fc4] font-bold ml-16  mb-8 text-center  md:text-start '>Experience</h1>

          <div className='md:px-16 px-8 '>
            <div className='bg-[#545fc44d] hover:bg-[#545fc480] p-5 rounded-2xl w-full  h-auto'>
              <div className='flex gap-3'>
                <div className='p-4 md:w-16 md:h-16 w-12 h-12 rounded-full bg-[#545fc4]'>
                  <FaLinkedin className='text-white text-xl md:text-4xl' />
                </div>

                <div className='ml-2 mb-5'>
                  <p className=' font-bold text-[#545fc4]'>2021</p>
                  <h3 className=' font-bold text-xl text-black '>Front End Developer</h3>
                  <h4 className=' font-bold text-md text-gray-600 '>Embel Technology, Pune</h4>

                  <div className='flex gap-3  flex-wrap mt-2'>
                    {skills.map((sk=>(
                    <div className=' w-auto px-3 bg-[#545fc4] rounded-full text-white font-bold '>{sk.skillname}</div>

                    )))}
                  </div>
                </div>
              </div>
            </div>

           
          </div>

        </div>


      </div>
    </div>
  )
}

export default Experience