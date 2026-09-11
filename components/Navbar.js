'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='bg-black w-full h-20 absolute top-0 z-20'></div>

      <div className="fixed top-7 z-30 w-full">
        <nav className='relative'>

          <div className="font-light text-xl text-amber-600 absolute top-0 left-5">
            Ajay - Video Editor
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block mr-8 ml-96 bg-black relative right-0">
            <div className="flex justify-end gap-20 text-[#DBD9D7] mx-5 p-0.5">
              <Link className='hover:text-amber-600 transition-colors' href="#portfolio">NARATIVE</Link>
              <Link className='hover:text-amber-600 transition-colors' href="#portfolio">COMMERCIAL</Link>
              <Link className='hover:text-amber-600 transition-colors' href="#portfolio">MUSIC-VIDEOS</Link>
              <Link className='hover:text-amber-600 transition-colors' href="#about">BIO</Link>
              <Link className='hover:text-amber-600 transition-colors' href="#contact">CONTACT</Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden absolute right-5 top-0 text-amber-600 hover:text-white transition-colors'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='md:hidden absolute top-16 right-5 bg-black border border-gray-800 rounded mt-2 w-48'>
              <div className='flex flex-col gap-4 text-[#DBD9D7] p-6'>
                <Link 
                  className='hover:text-amber-600 transition-colors text-sm font-light' 
                  href="#portfolio"
                  onClick={() => setIsOpen(false)}
                >
                  NARATIVE
                </Link>
                <Link 
                  className='hover:text-amber-600 transition-colors text-sm font-light' 
                  href="#portfolio"
                  onClick={() => setIsOpen(false)}
                >
                  COMMERCIAL
                </Link>
                <Link 
                  className='hover:text-amber-600 transition-colors text-sm font-light' 
                  href="#portfolio"
                  onClick={() => setIsOpen(false)}
                >
                  MUSIC-VIDEOS
                </Link>
                <Link 
                  className='hover:text-amber-600 transition-colors text-sm font-light' 
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  BIO
                </Link>
                <Link 
                  className='hover:text-amber-600 transition-colors text-sm font-light' 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}

        </nav>
      </div>
    </div>
  );
}