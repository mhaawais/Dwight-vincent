"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <header className={`bg-white w-full border-b md:sticky md:top-0 md:z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      
    <header className={`bg-white w-full border-b sticky top-0 z-50 transition-shadow duration-300 md:static ${scrolled ? 'shadow-md' : ''}`}>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-10 py-6 h-[250px]">
        <div>
          {/* Left - Navigation */}
          <nav className="flex gap-10 text-xl font-semibold tracking-wide">
            <a href="/" className="text-myblack transition-colors border-b-2 border-black">
              HOME
            </a>
            {/* <a href="/blog" className="text-gray-700  hover:text-myblack transition-colors">
              BLOG
            </a> */}
            <a href="/about" className="text-gray-700 hover:text-myblack transition-colors">
              ABOUT
            </a>
            <a href="/blog" className="text-gray-700  hover:text-myblack transition-colors">
              BLOG
            </a>
          </nav>
        </div>

        <div className="h-[200px]">
          {/* Center - Logo */}
          <a href="/" className="relative w-[180px] h-[70px]">
            <Image
              src="/assets/logo/Author-Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
        </div>

        <div>
          {/* Right - Large Styled Button */}
          <Link href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank">
          <button className="bg-[#c7d3e4] text-myblack px-16 py-6 rounded-full text-xl font-bold hover:brightness-90 transition-all">
            GET THE BOOK
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 py-2 h-[200px] ">
        {/* Left Logo */}
        <a href="/" className="relative w-[120px] h-[100px]">
          <Image
            src="/assets/logo/Author-Logo.png"
            alt="Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </a>

        {/* Hamburger / Cross */}
        <button onClick={toggleMenu} className="text-4xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Top - Logo and Cross */}
          <div className="flex items-center justify-between px-4 py-2 h-[200px]">
            {/* Left Logo */}
            <a href="/" className="relative w-[120px] h-[100px]">
              <Image
                src="/assets/logo/Author-Logo.png"
                alt="Logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </a>

            {/* Hamburger / Cross */}
            <button onClick={toggleMenu} className="text-4xl">
              <FiX />
            </button>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-10 text-3xl font-semibold tracking-wide">
            <a
              href="/"
              onClick={toggleMenu}
              className="text-myblack border-b-2 border-black"
            >
              HOME
            </a>
            {/* <a
              href="/blog"
              onClick={toggleMenu}
              className="text-gray-700  hover:text-myblack"
            >
              BLOG
            </a> */}
            <a
              href="/about"
              onClick={toggleMenu}
              className="text-gray-700  hover:text-myblack"
            >
              ABOUT
            </a>
            <a
              href="/blog"
              onClick={toggleMenu}
              className="text-gray-700  hover:text-myblack"
            >
              BLOG
            </a>
            <Link href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank">
            <button
              onClick={toggleMenu}
              className="mt-10 bg-[#c7d3e4] text-myblack px-12 py-7 rounded-full text-2xl font-bold hover:brightness-90 transition-all"
            >
              GET THE BOOK
            </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


