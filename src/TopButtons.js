import React from 'react'

function TopButtons() {
  return (
    <div className='container mx-5 px-6'>
        <div className='flex space-x-1'>
        <button className='font-Quicksand text-xs p-2 px-2 pt-2 text-white bg-gradient-to-br from-[#FF8412] to-[#B1008A] w-20 h-8 rounded-full baseline shadow-6xl'>Clinic</button>
        <button className='font-Quicksand text-xs p-2 px-2 pt-2 text-black bg-[#EDEDED] w-20 h-8 rounded-full baseline drop-shadow-lg'>Test</button>
        <button className='font-Quicksand text-xs p-2 px-2 pt-2 text-black bg-[#EDEDED] w-20 h-8 rounded-full baseline drop-shadow-lg'>Surgery</button>
        <button className='font-Quicksand text-xs p-2 px-2 pt-2 text-black bg-[#EDEDED] w-20 h-8 rounded-full baseline drop-shadow-lg'>Medicine</button>
        
        </div>
    </div>
  )
}

export default TopButtons