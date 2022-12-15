import React from 'react'
import eye from './eye.svg'

function DownButtons() {
  return (
    <div className='container mx-5 px-5'>
        <div className='flex space-x-7'>
        <button className='text-bold text-xs p-1 px-2 pt-1 text-white bg-gradient-to-r from-[#B1008A] to-[#060D67] w-24 h-8 rounded-full baseline shadow-6xl'>RESCHEDULE</button>
        <button className='text-bold text-xs p-1 px-2 pt-1 text-white bg-gradient-to-r from-[#B1008A] to-[#060D67] w-24 h-8 rounded-full baseline shadow-6xl'>CANCEL</button>
        <button className='flex outline outline-offset-2 outline-1 border-[#999999] text-bold text-xs p-2 px-4 pt-2 text-black w-24 h-8 rounded-full baseline shadow-6xl'>
            
            <img className="mx-1"src={eye} alt="" ></img>
            VIEW
            </button>
</div>
    </div>
  )
}

export default DownButtons