import React from 'react';
import Image from 'next/image';

const Hero1 = () => {
  return (
    <section className="bg-[#a3b4ce] text-black font-canela w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16">
      
      {/* Left Side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-[500px]">
          Discover stories that celebrate the beauty of overcoming adversity.
        </h1>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-full max-w-[350px] h-[400px] md:max-w-[400px] md:h-[450px] lg:max-w-[550px] lg:h-[700px]">
          <Image
            src="/assets/images/top-image.png"
            alt="Book Cover"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default Hero1;
