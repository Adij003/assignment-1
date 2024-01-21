import React from 'react'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import BlogMainHeading from '../components/BlogMainHeading'
import BlogSubPageTwo from '../subPages/BlogSubPageTwo'
import NavRes from '../components/NavRes'
import NavbarResBlog from '../components/NavbarResBlog'

function Blog() {
  return (
    <div>
        <div className='bg-black'>
          <NavbarResBlog/>
       <Navbar/>
       <NavbarTwo/>
        </div>
       <BlogMainHeading/>
       {/* <BlogSubPageTwo/> */}
       
    </div>
  )
}

export default Blog