import React from 'react'
import "./subpagecss.css"
import imgOne from '../assets/nasa.png'

function SecondSubPage() {
  return (
    <div className='SubpageSecond flex flex-row w-full bg-gray-100 '>
        <div className='ServiceOneBoxOne w-1/2 flex flex-col justify-around px-24 my-auto'>
            <div className='serviceHead py-8'>
                Service 1
            </div>
            <div className='ServiceDescription'>
            Company’s dedicated and highly experienced advisory services teams across the world have the depth of industry and technical resources to respond rapidly to our client's needs.
            </div>
            <div className='viewMore py-4'>
                View More &rarr;
            </div>
        </div>
        <div className='ServiceOneImg w-1/2'>
            <img className='h-full w-full object-cover' src={imgOne} alt="Nasa Img" />
        </div>
    </div>
  )
}

export default SecondSubPage