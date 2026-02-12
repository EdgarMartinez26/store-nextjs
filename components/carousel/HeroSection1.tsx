'use client';
import React from 'react';
import a8 from '@/public/ast/a8.jpg'
import Image from 'next/image';

function HeroSection1() {
  return (
    <div className="relative w-full h-screen flex bg-black"> {/* Set background color to black */}
      {/* Left Side (Text) */}
      <div className="w-1/2 flex flex-col justify-center pl-8 sm:pl-12 text-white">
        <div className="flex items-center gap-2">
          <p className="hidden md:block w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-md  md:text-2xl">Our Bestsellers</p>
        </div>
        <h1 className="ml-0 lg:ml-10 max-w-[500px] text-3xl sm:py-3 lg:text-5xl lg:font-medium leading-relaxed">Discover Our Collection</h1>
        <div className="flex items-center ml-0 md:ml-2 gap-2">
          <p>Explore Now</p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
      {/* Right Side (Image with Overlay) */}
      <div className="relative w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${a8.src})` }}>
        <div className="absolute inset-0 bg-black opacity-10"></div> {/* Overlay */}
      </div>
    </div>
  );
}

export default HeroSection1;
