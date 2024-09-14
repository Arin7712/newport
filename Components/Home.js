// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col ml-20 mr-20 mt-10 space-y-10'>
      {/* Background Image Section */}
      <div className='relative w-full h-[560px] bg-[url(/chair.png)] bg-cover bg-center rounded-[20px]'>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center leading-tight">
            <h1 className="text-[64px] font-bold bg-custom-gradient bg-clip-text text-transparent leading-tight">
              Arin Gawande
            </h1>
            <p className="text-[16px] bg-custom-gradient bg-clip-text text-transparent">
              The stories you'd wish never came true.
            </p>
          </div>
        </div>
      </div>

      {/* Content Below the Image */}
      <div className='flex flex-col md:flex-row justify-between text-custom-text-color items-center gap-4 md:gap-0'>
        {/* Left Section */}
        <div className='flex flex-row space-x-5 bg-custom-back p-3 rounded-[10px] items-center'>
          <h1 className='font-bold'>ARIN</h1>
          <p className='text-[14px]'>ABOUT</p>
          <p className='text-[14px]'>NEWSLETTER</p>
          <p className='text-[14px]'>PORTFOLIO</p>
          <p className='text-[14px]'>CONTACT</p>
        </div>

        {/* Right Section */}
        <div className='flex flex-row space-x-5 '>
          <div className='border p-2 rounded-[15px]'>IG</div>
          <div className='border p-2 rounded-[15px]'>TW</div>
        </div>
      </div>

      <div className='flex justify-end text-custom-text-color mt-10'>
        <div className='w-3/12'>I'm committed to creating visual appealing and functional websites for business and start-ups to cinvey their vibe and idea to the online world.</div>
      </div>
    </div>
  );
}

export default Home;
