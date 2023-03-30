import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div id="home" className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='md:text-5xl sm:text-3xl text-1xl text-[#0F41F8] font-bold'>
                AI-Driven
            </p>

            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Project Intelligence Platform
            </h1>

            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                    For any
                </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#0F41F8]' strings={['Frontend', 'Backend', 'Code']} typeSpeed={120} backSpeed={140} loop />
                <p className='md:text-5xl sm:text-4xl text-xl font-bold pl-1'>
                    Gigs!
                </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 p-3'>Simplifies the documentation and maintains consistency across organization.</p>
            <button className='bg-[#0F41F8] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-black '> Get Started </button>
        </div>
    </div>
  )
}

export default Hero