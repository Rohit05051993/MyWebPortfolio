import React from 'react';
import cont from '../img/Contact.svg';
import { IoHeart } from "react-icons/io5";
import { HiAtSymbol } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


function Contact() {
  return (
    <>
      <div className='px-32 h-[60vh]'>
        <h1 className='text-[4rem] text-[#545fc4] font-bold ml-16  mb-12 text-center '>Contacts</h1>
        <div className='absolute right-[-70px] top-[488vh] '>
          <img className='w-96 h-96' src={cont} alt={cont} />
        </div>

        <div >
          <div className='flex flex-col justify-evenly md:flex-row '>
            <div className='flex gap-8 '>
              <div className='p-3 rounded-full bg-[#545fc4] text-white hover:bg-black'>          <HiAtSymbol /></div>
              <h3 className='text-2xl font-bold'>www.Rohit.career05@gmail.com</h3>
            </div>

            <div className='flex gap-8'>
              <div className='p-3 rounded-full bg-[#545fc4] text-white hover:bg-black'>     <IoCall /></div>
              <h3 className='text-2xl font-bold'>8180827116</h3>
            </div>
          </div>

          <div className='mx-auto flex justify-evenly mt-10'>
            <div className='p-3 rounded-full bg-[#545fc4] text-white hover:bg-black'>     <FaLinkedinIn />          </div>
            <div className='p-3 rounded-full bg-[#545fc4] text-white hover:bg-black'>     <IoCall /></div>
          </div>

        </div>
        

      </div>
      <h3 className="relative bottom-0 left-0 w-full text-center text-xl flex justify-center p-4 ">    Made with
          <IoHeart className="text-[#545fc4] mx-3 mt-1" /> by ROHIT DEKATE        </h3>
    </>
  )
}

export default Contact
