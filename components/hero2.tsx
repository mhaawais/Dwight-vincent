import React from 'react';
import Image from 'next/image';

const Hero2 = () => {
  return (
    <div className="bg-[#c7d3e4] w-full py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
        
        {/* Image Section */}
        <div className="bg-[#a3b4ce] p-6 rounded-md w-full max-w-[350px]">
          <Image 
            src="/assets/images/m1.png" 
            alt="Book Image" 
            width={300} 
            height={400} 
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="bg-[#a3b4ce] p-8 rounded-md w-full max-w-[500px] flex flex-col justify-center items-center lg:items-start min-h-[450px] text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-myblack mb-4">
            Being different is ok!
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            The Skunk With a Powerful Scent is a story about a little skunk who falls into a barrel of cologne, and his friends won’t have anything to do with him because he smells so bad…
          </p>
          <a 
            href="#"
            className="inline-block bg-black text-white px-6 py-3 font-semibold text-lg rounded-md transition-all duration-300 hover:bg-gray-800"
          >
            READ MORE!
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero2;
