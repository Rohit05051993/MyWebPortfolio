import React from 'react';
import p1 from '../img/prof.jpeg';
import { FaLinkedin } from "react-icons/fa";



function Intro() {
    return (
        <div className='introOuter min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-3 min-h-screen'>
                <div className='col-span-1 bg-[#545fc4] md:min-h-screen h-[36vh]'>

                    <h1 className='mt-6 ml-5 text-4xl text-white text-center'>Rohit Dekate</h1>

                    {/* Image positioned in the center between the two columns */}
                    <div className='absolute top-[-30vh] inset-y-0 left-1/2 md:left-1/3 transform -translate-x-1/2 flex justify-center items-center'>
                        <div className='w-48  h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 md:border-none border-white shadow-2xl'>
                            <img src={p1} alt="Rohit Dekate" className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='absolute  bottom-6 ml-24 transform -translate-x-1/2'>
                        <FaLinkedin className='text-white text-4xl' />
                    </div>
                </div>

                <div className='col-span-2 shadow-2xl h-[96vh] md:min-h-screen'>
                    <div className=' w-3/4 right-14 top-[52vh]  absolute md:w-1/2  md:right-6 md:top-24  '>
                        <h3 className='mt-6 ml-5 text-xl text-gray-500 font-bold text-center'>Front end developer</h3>
                        <h1 className='mt-2 ml-5 text-4xl text-[#545fc4] font-bold text-center'>ROHIT DEKATE</h1>
                        <p className='text-gray-600 text-justify mt-5 '>Learning and skill development are inseparable companions on the path to personal growth. Learning fuels our minds with knowledge, nurturing curiosity and expanding horizons. Meanwhile, skills provide us with the tools to apply that knowledge effectively, transforming it into tangible abilities.</p>
                        <div className='text-center'>
                            <button className=' p-3 mt-5 rounded-full border-2 border-[#545fc4] font-bold hover:bg-[#545fc4] hover:text-white text-[#545fc4]'>Download CV</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro