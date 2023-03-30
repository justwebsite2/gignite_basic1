import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Infographic = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Streamlined Documentation</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Easy Project Documentation</h1>
                <p className=''>
                    The platform's automated document generation feature
                    simplifies the documentation process and maintains
                    consistency across the organization. This allows team
                    members to focus more on their tasks and less on 
                    time-consuming documentation.
                </p>
                <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]'>GetStarted</button>
            </div>
        </div>
    </div>
  )
}

export default Infographic