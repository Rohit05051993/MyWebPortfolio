import React from 'react';
import who from '../img/who.svg'

function WhoAmI() {
    return (
        <div>
            <div className='grid grid-cols-1  md:grid-cols-2 p-10'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-center text-[4rem] font-bold text-[#545fc4] mb-5'>Who I am</h1>
                    <p >
                        Hello! My name is Rohit Dekate. I'm an aspiring Front End Developer based in India.
                        Results-driven Front-end developer with 3+ years of experience in Front End Framework such as  React. Proficient in HTML, CSS, and JavaScript, with a focus on building scalable and intuitive user interfaces. Strong problem-solving skills, attention to detail, and a track record of delivering high-quality projects within deadlines.
                    </p>
                </div>
                <div className='order-1 md:order-2'>
                    <img className='w-full  mb-8 h-56' src={who} alt={who} />
                </div>
            </div>
        </div>
    )
}

export default WhoAmI