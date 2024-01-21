import React from 'react';
import background from '../assets/GroupNew.png';
import resBackground from '../assets/ComponentResonsive.png'

function BlogSubPageTwo() {
  return (
    <div className=' text-white'>
      <div
        className='blogSubPageTwoMain flex flex-row justify-around mt-48 mx-36 mb-10'
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', 
          height: '40vh',
         
        }}
      >
        <div className="BlogSubscribeHead flex flex-col justify-center">
          <div className="SubscribeMajorHead text-4xl my-2">
            Subscribe and stay updated 
            <div>
              on new blogs
            </div>
          </div>
          <div className="SubscribeMinorHead">
            Stay updated about Company Name’s news as it happens
          </div>
        </div>
        <div className="flex flex-row justify-start w-[32vw]">
        <div className="BlogSubTextBox flex flex-col justify-center w-full ">
          <div className="BlogTextField">
          <input
              type="text"
              className='px-2 py-4 w-full text-black '
              placeholder="Enter your text here"
              
            />
          </div>
          <div className="BlogSubscribeButton mt-10">
            <button className='py-4 px-16 border'>
                Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* This one is for responsive, Blog Subscribe wala */}
      <div
        className='blogSubPageTwoMainRes flex flex-col justify-around mt-16  mb-10'
        style={{
          backgroundImage: `url(${resBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', 
          height: '55vh',
         
        }}
      >
        <div className="BlogSubscribeHead flex flex-col justify-center ml-2">
          <div className="SubscribeMajorHead text-2xl my-2">
            Subscribe and stay updated 
            <div>
              on new blogs
            </div>
          </div>
          <div className="SubscribeMinorHead">
            Stay updated about Company Name’s news as it happens
          </div>
        </div>
        <div className="flex flex-row justify-start w-full">
        <div className="BlogSubTextBox flex flex-col justify-center w-[80vw] mx-auto ">
          <div className="BlogTextField">
          <input
              type="text"
              className='px-2 py-4 w-full text-black '
              placeholder="Enter your text here"
              
            />
          </div>
          <div className="BlogSubscribeButton mt-6">
            <button className='py-4 w-[80vw] border'>
                Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSubPageTwo;
