'use client';
import React from 'react';
import { logEvent } from '@/app/lib/googleAnalytics';
import SocialMedia from '@/app/components/shared/SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='container text-[#f9f9f9]'>
        <div className='flex flex-col md:flex-row justify-between py-5 gap-2'>
          {/* Info Section */}
          <div className='text-center md:text-left max-w-[600px]'>
            <h1 className='text-[#1e2a55] font-extrabold'>
              Website Development
            </h1>
            <p className='text-sm'>
              This website is developed and designed by me, Tris, using React,
              Next.js, TailwindCSS, and GSAP for animations. The design reflects
              my personal creativity, crafted not by design standards, but by
              what I truly love and believe in.
            </p>
          </div>

          {/* Links and Social Media Section */}
          <div className='flex flex-col gap-2 items-center md:items-start'>
            <div className='text-center md:text-left'>
              <h1 className='text-[#1e2a55] font-extrabold'>Links</h1>
              <div className='flex gap-4'>
                <a
                  href='https://drive.google.com/file/d/1HAcJfJgYUXMZQqT0p9qaS0nZqE1Pkobs/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() =>
                    logEvent('download', 'Resume', 'Resume PDF', 1)
                  }>
                  Resume
                </a>
                <a
                  href='https://dev.to/trisdev'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Blog
                </a>
              </div>
            </div>

            <div className='text-center md:text-left'>
              <h1 className='text-[#1e2a55] font-extrabold'>Follow Me</h1>
              <div className='py-2'>
                <SocialMedia
                  colors={['#222222', '#2196f3', '#ff0080', '#ffe186']}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='text-center text-[#1e2a55] py-3 border-t border-[#1e2a551f]'>
          &copy; 2024 Tris. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
