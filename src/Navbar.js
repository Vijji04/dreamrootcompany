import React from 'react'
import icon from './arrow.svg'

function Navbar() {
  return (
    <div className='relative container flex p-1 mx-auto md:justify-center md:align-center'>
        <div className='flex align-center justify-between space-x-14'>
        <div className='mt-0.8'>
        <img src={icon} style={{height:"20px", width:"20px"}}alt=""></img>
        </div>
        <div className='flex ml-10'>
        <h1 className='font-bold font-Quicksand text-sm' >UPCOMING APPOINTMENTS</h1>
        </div>

        </div>
        
        

    </div>
  )
}

export default Navbar