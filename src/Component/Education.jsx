import React from 'react';
import pic from '../img/edu.svg';
import { FaLinkedin } from "react-icons/fa";


function Education() {
  return (
    <div className='container' id='education'>
      <div className='grid grid-cols-1 md:grid-cols-6'>
        <div className='col-span-4'>

          <h1 className='text-[4rem] text-[#545fc4] font-bold ml-16  mb-8  md:text-start text-center'>Education</h1>

          <div className='md:px-16 px-8 '>
            <div className='bg-[#545fc44d] hover:bg-[#545fc480] p-5 rounded-2xl w-full  h-36 mb-6'>
              <div className='flex '>
                <div className='p-4 md:w-16 md:h-16 w-12 h-12 rounded-full bg-[#545fc4]'>
                  <FaLinkedin className='text-white text-xl md:text-4xl' />
                </div>
                <div className='ml-2 mb-5'>
                  <p className=' font-bold text-[#545fc4]'>2016</p>
                  <h3 className=' font-bold text-xl text-black '>B-tech</h3>
                  <h4 className=' font-bold text-md text-gray-600 '>RTMNU University, Nagpur ,MH</h4>
                </div>
              </div>
            </div>

            <div className='bg-[#545fc44d] hover:bg-[#545fc480] p-5 rounded-2xl w-full  h-36'>
              <div className='flex '>
                <div className='p-4 md:w-16 md:h-16 w-12 h-12 rounded-full bg-[#545fc4]'>
                  <FaLinkedin className='text-white text-xl md:text-4xl' />
                </div>
                <div className='ml-2 mb-5'>
                  <p className=' font-bold text-[#545fc4]'>2012</p>
                  <h3 className=' font-bold text-xl text-black '>HSC</h3>
                  <h4 className=' font-bold text-md text-gray-600 '>RTMNU University, Nagpur ,MH</h4>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='col-span-2'>
          <div className='w-96 object-cover  hidden md:block ml-8' >
            <img src={pic} alt={pic} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education