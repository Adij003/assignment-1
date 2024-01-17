import React from 'react'
import imgOne from '../assets/amy.png';

function SubPageThree() {
  return (
    
         <div className='SubpageSecond flex flex-row w-full bg-gray-100'>
            <div className='w-1/2'>
            <img className='h-full w-full object-cover' src={imgOne} alt="Nasa Img" />
        </div>
        <div className='w-1/2 flex flex-col justify-around px-24 my-auto'>
            <div className='serviceHead py-8'>
                Service 2
            </div>
            <div className='ServiceDescription'>
            Company’s dedicated and highly experienced advisory services teams across the world have the depth of industry and technical resources to respond rapidly to our client's needs.
            </div>
            <div className='viewMore py-4'>
                View More &rarr;
            </div>
        </div>
        
    </div>
    
  )
}

export default SubPageThree