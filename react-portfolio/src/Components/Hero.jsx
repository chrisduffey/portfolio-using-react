import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 item-center'>
      <div className='mb-10'>
        <p className='text-white text-[20px]'>Hi and Welcome</p>
        <p className='text-blue text-[40px] font-bold'>I'm Chris Duffey</p>
        <p className='text-red text-[40px] font-bold'>I'm a full stack developer</p>
      <div className='mt-4 flex gap-4'>
      <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full hover:border-[1px] hover:border-white'>See Portfolio</button>
      <button className='text-white text-[12px] px-3 pb-2 py-2 bg-blue-500 rounded-full hover:border-[1px] hover:border-white'>Contact Me</button>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='h-[320px] w-[250px] p-2 bg-gradient-to-r from-[#002642] via-[#E5DADA] to-[#02040F] rounded-[30px] '>
        <img src="\src\assets\images\CTD.png" className='h-full w-[250px] object-cover rounded-[30px]' />
        </div>
      </div>
    </div>
  )
}

export default Hero