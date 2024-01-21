import React from 'react'
import nasa from '../assets/nasa.png'

function BlogSingleCard() {
  return (
    <div className='BlogSingleCardMain p-2 border mx-8' >

        <div className="BlogCardImg">
            <img className='ZoomImage' src={nasa} alt="" />
        </div>

        <div className="BlogCardHeading my-4">
        The “Missing Billion”: creating health equity through data for people with disabilities
        </div>

        <div className="BlogCardDescription ">
        McKinsey Health Institute is part of a global coalition committed to transforming health systems to be inclusive of people with disabilities—one piece of data at a time.
        </div>

        <div className="CardBorder">

        <div className="DividingLine border-t border-gray-400 border-solid border-0.5 mt-8 mx-2">

        </div>

        </div>

        <div className="CardReadMore flex flex-row justify-between items-center mt-2 px-4">
            <div className="CardDate font-semibold text-sm">
                December 5, 2023
            </div>
            <div className="CardReadMoreButton text-xs border-2 border-blue-500 py-2 px-2">
            Read full blog &rarr;
            </div>
        </div>
    </div>
  )
}

export default BlogSingleCard