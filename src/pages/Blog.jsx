import React from 'react'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import BlogMainHeading from '../components/BlogMainHeading'

function Blog() {
  return (
    <div>
        <div className='bg-black'>
       <Navbar/>
       <NavbarTwo/>
        </div>
       <BlogMainHeading/>
       
    </div>
  )
}

export default Blog