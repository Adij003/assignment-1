import React from 'react'


function Card({cardName, cardImg}) {
  return (
    <div className=' MainCard mt-10 w-[25rem] border border-solid border-gray-400 overflow-hidden'>
        <div className='Card-One flex flex-row py-10 items-center'>
            <div className="CardImage mx-8">
                <img src={cardImg} alt="" />
            </div>
            <div className="CardHeading">
                {cardName}
            </div>
        </div>
        <div className='DescriptionCard px-8'>
        Whether you have a single, specific need or require comprehensive service on a worldwide scale, we bring you the knowledge, experience, and resources to help you meet your goals.
        </div>
        <div className='ViewButtonCard mr-[-1.5rem] mb-[-1.5rem] pt-10 relative flex flex-row justify-end'>
        <div className='circular-border w-32 h-32 flex items-center justify-center bg-white border-[2px] border-solid border-black rounded-full'>
          View 
        </div>
      </div>
    </div>
  )
}

export default Card