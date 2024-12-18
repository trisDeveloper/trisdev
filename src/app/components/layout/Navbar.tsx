'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/Navbar.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { logEvent } from '@/app/lib/googleAnalytics';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useGSAP(() => {
    gsap.fromTo(
      '.navlinks',
      { opacity: 0 },
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
        delay: 0.2,
        duration: 0.5,
      }
    );
  });

  return (
    <nav className='p-4 bg-transparent'>
      <div className='container flex justify-between items-center relative'>
        {/* Logo */}
        <Link href='/' className='flex items-center logo'>
          <Image
            alt='left wing'
            src='/assets/Logo/wing1.png'
            width={100}
            height={100}
            className='logoWings'
          />
          <span className='text-4xl font-bold text-[#feffb9]'>T</span>
          <Image
            alt='right wing'
            src='/assets/Logo/wing2.png'
            width={100}
            height={100}
            className='logoWings'
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-4 text-white'>
          <li>
            <Link
              href='/#projects'
              className='navlinks inline-block translate-y-5 opacity-0'>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/#footer'
              className='navlinks inline-block translate-y-6 opacity-0'>
              Contact
            </Link>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1HAcJfJgYUXMZQqT0p9qaS0nZqE1Pkobs/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='navlinks inline-block translate-y-7 opacity-0'
              onClick={() => logEvent('download', 'Resume', 'Resume PDF', 1)}>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden w-8 h-8 z-10 btn-bar relative ${
            isOpen ? 'open' : ''
          }`}
        />

        {/* Mobile Menu */}
        <div
          className={`absolute right-1 -top-1 bg-[#5067902e] rounded-lg overflow-hidden transition-all duration-300 ${
            isOpen ? 'p-4 pt-10 opacity-100' : 'p-0 h-0 w-0 opacity-0'
          }`}>
          <ul className='text-white'>
            <li>
              <Link href='/#projects' onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/#footer' onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href='https://drive.google.com/file/d/1HAcJfJgYUXMZQqT0p9qaS0nZqE1Pkobs/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => {
                  logEvent('download', 'Resume', 'Resume PDF', 1);
                  toggleMenu();
                }}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
