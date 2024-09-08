import React from 'react';
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

function Skills() {
    return (
        <div className='my-6 p-8'>
            <h1 className='text-[4rem] text-[#545fc4] font-bold text-center mb-8'>Skills</h1>

            {/* Continuous slider container */}
            <div className='overflow-hidden relative'>
                <div className='flex animate-slide whitespace-nowrap p-8' onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                    onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                    {skills.map((sk, index) => (
                        <div key={index} className='min-w-36 h-36 mx-4 shadow-[0_10px_25px_rgba(0,0,0,0.5)] p-10 rounded-lg flex justify-center items-center'>
                            <div className='flex flex-col items-center'>
                            <div className='text-4xl mb-3' style={{ color: sk.color }}>{sk.icon}</div>
                            <p className='font-bold'>{sk.skillname}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;

