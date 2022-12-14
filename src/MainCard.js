import React from 'react'
import TopButtons from "./TopButtons.js"
import DownButtons from "./DownButtons.js"
import {cardData} from "./Data/Data.js"
function MainCard() {
  return (
    <div className='container mx-auto space-y-6'>
        {cardData.map((card) => {
                    return (
        <div className='flex flex-col bg-[#F6F6F6] items-center justify-center space-y-6 p-4 rounded-lg'>
            <div>
                <TopButtons />
            </div>
            <div className='flex items-center justify-center  '>
                    {/* {cardData.map((card) => {
                    return ( */}
                        
                       <div className='flex space-x-4'>
                        <img src={card.img}></img>
                            <div className='space-y-1'>
                            <h1 className='font-Quicksand text-sm'>{card.date}</h1>
                            <h1 className='font-Quicksand text-sm text-[#E97000]'>{card.appoint}</h1>
                            <h1 className='font-Quicksand text-sm'>{card.location}</h1>  
                            <h1 className='font-Quicksand font-bold'>{card.test}</h1>  
                            </div>
                       </div>
        
                        
                {/* //     )}) */}
                     
                {/* //    } */}
            </div>
            <div>
            <DownButtons />
            </div>
        </div>
        )})
                     
    }
    </div>
  )
}

export default MainCard