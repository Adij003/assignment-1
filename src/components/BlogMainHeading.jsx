import React from 'react'
import BlogImg from '../assets/giammarco.png'
import Ribbon from '../assets/Component.png'

function BlogMainHeading() {
  return (
    <div className='bg-black text-white flex flex-row justify-between'
    >
        <div className='BlogHeadOne flex flex-col items-center my-auto'>
            <div className='ml-16'>
                <div className='text-5xl my-4 mr-auto'>
                Blogs
                </div>
                <div className='w-72  text-xs my-4'>
                A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.
                </div>
                <div className='flex flex-row justify-around w-48 my-4' >
                    <div>   
                        Insta
                    </div>
                    <div>   
                        Insta
                    </div>
                    <div>   
                        Insta
                    </div>
                    <div>   
                        Insta
                    </div>
                </div>

            </div>
        
        
        </div>
        
        <img className="Ribbon size-[34rem] " src={Ribbon} alt="" />
        
        <div className="BlogHeadTwo">
            <img src={BlogImg} alt="BlogImg" />
        </div>
    </div>
  )
}

export default BlogMainHeading