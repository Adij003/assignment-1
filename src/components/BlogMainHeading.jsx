import React from 'react'
import BlogImg from '../assets/giammarco.png'
import Ribbon from '../assets/Component.png'
import SocialLinks from '../assets/FrameSocial.png'
import ResponsiveLibImage from '../assets/BlogResponsive.png'


function BlogMainHeading() {
  return (
    <div className='BlogMainHeading bg-black text-white flex flex-row justify-between'
    >
        <div className='BlogHeadingText flex flex-col items-center my-auto'>
            <div className='BlogHeadOne ml-20'>
                <div className='BlogHead text-7xl my-4 mr-auto'>
                Blogs
                </div>
                <div className='BlogHeadDescription w-72  text-l my-4'>
                A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.
                </div>
                <div className='socialLinksBlog flex flex-row justify-around w-48 my-4' >
                    <img src={SocialLinks} alt="Links to social media" />
                </div>

            </div>
        
        
        </div>
        
        <img className="Ribbon size-[34rem] " src={Ribbon} alt="" />
        
        <div className="BlogHeadTwo">
            <img src={BlogImg} alt="BlogImg" />
        </div>
        <div className="BlogHeadTwoRes">
            <img src={ResponsiveLibImage} alt="BlogImg" />
        </div>
    </div>
  )
}

export default BlogMainHeading