import React from 'react';
import background from '../assets/GroupNew.png';

function BlogSubPageTwo() {
  return (
    <div className='blogSubPageTwoMain text-white'>
      <div
        className='flex flex-row justify-around mt-48 mx-36 mb-20'
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
    </div>
  );
}

export default BlogSubPageTwo;
