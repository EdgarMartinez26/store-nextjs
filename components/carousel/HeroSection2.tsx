'use client';

import React from 'react';
import {assets} from '@/public/ast/assets'
import a1 from '@/public/ast/a1.jpg'

function HeroSection2() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-bottom"
      style={{ backgroundImage: `url(${a1.src})` }} // Make sure assets.a1 is correct
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 sm:pl-20 text-white">
        {/* Heading Section */}
        <div className="flex items-center gap-2 mb-4">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-base md:text-base">New Arrivals</p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-relaxed mb-4">
          Shop New Trends
        </h1>
        
        {/* Browse Section */}
        <div className="flex items-center gap-2 mb-6">
          <p>Browse Now</p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
        
        {/* Button */}
        <button className="mt-5 px-6 py-3 bg-[rgb(197,134,165)] hover:bg-black text-white">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default HeroSection2;
