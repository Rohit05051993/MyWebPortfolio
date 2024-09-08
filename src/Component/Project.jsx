import React from 'react';
import p1 from '../img/proj1.svg';
import p2 from '../img/proj2.svg'
import p3 from '../img/proj3.svg'


function Project() {
    return (
        <div className='mt-24' id='project'>
            <h1 className='text-[4rem] text-[#545fc4] font-bold ml-16  mb-12 text-center '>Projects</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-32  mt-6'>

                <div className='shadow-lg bg-[#6e76c7]  w-[49vh] h-[58vh] rounded-lg p-5 mx-auto mb-8'>
                    <h3 className='text-center text-white font-bold text-2xl mb-9 mx-auto'>Goverment Portal</h3>
                    <div className=' mx-auto'>
                        <img  className="w-56 h-56 mx-auto" src={p1} alt={p1} />
                    </div>
                </div>

                <div className='shadow-lg bg-[#6e76c7]  w-[49vh] h-[58vh] rounded-lg p-5 mx-auto mb-8'>
                    <h3 className='text-center text-white font-bold text-2xl mb-9 mx-auto'>Career/Job App</h3>
                    <div className=' mx-auto'>
                        <img className="w-56 h-56 mx-auto" src={p2} alt={p2} />
                    </div>
                </div>

                <div className='shadow-lg bg-[#6e76c7]  w-[49vh] h-[58vh] rounded-lg p-5 mx-auto mb-8'>
                    <h3 className='text-center text-white font-bold text-2xl mb-9 mx-auto'>Restaurant Management </h3>
                    <div className=' mx-auto'>
                        <img className="w-56 h-56 mx-auto" src={p3} alt={p3} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project