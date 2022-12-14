import React from 'react'

function Rectangle() {
  return (
    <div class="container justify-center align-center">
        <div class="flex justify-between items-center p-4 rounded-lg bg-gradient-to-br from-[#0037C5] to-[#08005F] ">
            <div>
                <h1 className='font-bold text-sm text-white font-Quicksand'>New Booking in 2 Minutes</h1>
            </div>
            <div>
                <button className='p-3 px-6 pt-1 border-2 text-white rounded-full baseline h-9 bg-gradient-to-br from-[#FF8412] via-[#D23758] to-[#B1008A]'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Rectangle