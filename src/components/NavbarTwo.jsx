import React from 'react'
import { Link } from 'react-router-dom'

function NavbarTwo() {
  return (
    <div className='LessBorder NavbarTwo'>
        <div class="flex flex-row justify-between items-center w-full h-16 bg-opacity-10">
  <div class="flex NewTextNavOne ml-32 mr-10 ">
    Logo
  </div>
  <div class=" flex  NewTextNavOne">
    <div className='px-10'>About</div>
    <div className='px-10'>Services</div>
    <Link to='/blog' >
    <div className='px-10'>Blogs</div>
    </Link>

    <div className='px-10'>Careers</div>
    <div className='px-10'>Industries</div>
  </div>
<div className='Navbarspacer w-10' >

</div>
</div>
    </div>
  )
}

export default NavbarTwo