import React from 'react'
import BlogSingleCard from '../components/BlogSingleCard'

function BlogCards() {
  return (
    <div className='AllTheBlogCards flex flex-row justify-evenly my-20 mx-28'>
        <BlogSingleCard/>
        <BlogSingleCard/>
        <BlogSingleCard/>
    </div>
  )
}

export default BlogCards