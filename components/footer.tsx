import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-myblack text-mycolor w-full px-6 py-10">
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10">

        {/* Section 1 - Book Image */}
        <div className="flex w-full lg:w-1/3 justify-center lg:justify-end">
          <div className="bg-[#c7d3e4] p-2 rounded-md">
            <Image
              src="/assets/images/my-m2.png"
              alt="Footer Book Image"
              width={300}
              height={330}
            />
          </div>
        </div>

        {/* Section 2 - Text and Button */}
        <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/3">
          <p className="text-lg font-serif mb-4 text-detailblog">
            Now available in paperback and eBook from Amazon and other book sellers.
          </p>
          <Link
            href="https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"
            target="_blank"
          >
            <button className="bg-[#c7d3e4] text-black px-8 py-4 rounded-full text-lg font-bold hover:brightness-90 transition-all">
              GET THE BOOK
            </button>
          </Link>
        </div>

        {/* Section 3 - Logo and Contact */}
        <div className="flex flex-col w-full lg:w-1/3 justify-center lg:justify-start items-center lg:items-start">
          <a href="/" className="bg-white p-3 rounded-md mb-4">
            <div className="relative w-[250px] h-[120px]">
              <Image
                src="/assets/logo/Author-Logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
          <div className="text-center lg:text-left space-y-1">
            <p className="text-sm sm:text-base font-medium text-mycolor">
              📧 Email: <a href="mailto:Pdgpnation@gmail.com" className="hover:underline">Pdgpnation@gmail.com</a>
            </p>
            <p className="text-sm sm:text-base font-medium text-mycolor">
              📞 Contact: <a href="tel:7727132353" className="hover:underline">772-713-2353</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;







// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const Footer = () => {
//   return (
//     <footer className="bg-myblack text-mycolor w-full px-6 py-10">
//       <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center lg:items-center gap-10">
        
//         {/* Section 1 - Book Image */}
//         <div className="flex w-full lg:w-1/3 justify-center lg:justify-end">
//           <div className="bg-[#c7d3e4] p-2 rounded-md">
//             <Image
//               src="/assets/images/my-m2.png"
//               alt="Footer Book Image"
//               width={300} // Make image larger here
//               height={330} // Maintain proportion
//               // className="object-contain"
//             />
//           </div>
//         </div>

//         {/* Section 2 - Text and Button */}
//         <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/3">
//           <p className="text-lg font-serif mb-4 text-detailblog">
//             Now available in paperback and eBook from Amazon and other book sellers.
//           </p>
//           <Link href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank">
//           <button className="bg-[#c7d3e4] text-black px-8 py-4 rounded-full text-lg font-bold hover:brightness-90 transition-all">
//             GET THE BOOK
//           </button>
//           </Link>
//         </div>

//         {/* Section 3 - Large Logo */}
//         <div className="flex w-full lg:w-1/3 justify-center lg:justify-start">
//           <a href="/" className="bg-white p-3 rounded-md">
//             <div className="relative w-[250px] h-[120px]">
//               <Image
//                 src="/assets/logo/Author-Logo.png"
//                 alt="Logo"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
