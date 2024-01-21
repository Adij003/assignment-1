import React from 'react'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import BlogMainHeading from '../components/BlogMainHeading'
import BlogSubPageTwo from '../subPages/BlogSubPageTwo'
import NavRes from '../components/NavRes'
import NavbarResBlog from '../components/NavbarResBlog'
import BlogCards from '../subPages/BlogCards'
import Footer from '../subPages/Footer'

function Blog() {
  return (
    <div>
        <div className='bg-black'>
          <NavbarResBlog/>
       <Navbar/>
       <NavbarTwo/>
        </div>
       <BlogMainHeading/>
       <BlogSubPageTwo/>
       <BlogCards/>
       <BlogCards/>
       <Footer/>
    </div>
  )
}

export default Blog