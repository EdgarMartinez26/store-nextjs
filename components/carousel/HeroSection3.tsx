'use client';

import React from 'react';
import a6 from '@/public/ast/a6.jpg'

function HeroSection3() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${a6.src})` }}> {/* Change `imageName` to the actual key in the assets object */}
    {/* Overlay */}
      <div className="absolute inset-0 bg-[slate-50] opacity-20"></div>
      
      {/* Text and Button */}
      <div className="absolute left-20 top-1/2 transform -translate-y-2/2 pl-8 sm:pl-12">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-lg font-[800]">Special Discounts</p>
        </div>
        <h1 className="text-3xl sm:py-3 lg:text-6xl font-[400] leading-relaxed">Up to 50% Off</h1>
        <div className="flex items-center gap-2">
          <p className='font-medium text-sm md:text-lg font-[800]'>Shop the Sale</p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection3;
