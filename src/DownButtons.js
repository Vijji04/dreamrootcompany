import React from 'react'
import eye from './eye.svg'

function DownButtons() {
  return (
    <div className='container mx-5 px-6'>
        <div className='flex space-x-5'>
        <button className='text-bold text-xs p-1 px-2 pt-1 text-white bg-gradient-to-r from-[#B1008A] to-[#060D67] w-24 h-8 rounded-full baseline shadow-6xl'>RESCHEDULE</button>
        <button className='text-bold text-xs p-1 px-2 pt-1 text-white bg-gradient-to-r from-[#B1008A] to-[#060D67] w-24 h-8 rounded-full baseline shadow-6xl'>CANCEL</button>
        <button className='text-bold text-xs p-1 px-2 pt-2 pl-1 flex justify-center outline outline-offset-1 outline-1 border-[#999999]    text-black w-24 h-8 rounded-full baseline shadow-6xl'>
            
            <img className="mx-1"src={eye} alt="" ></img>
            VIEW
            </button>
</div>
    </div>
  )
}

export default DownButtons