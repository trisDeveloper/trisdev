'use client';
import React from 'react';
import '@/app/styles/Hero.scss';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialMedia from '@/app/components/shared/SocialMedia';
import { CursorSparkle } from '@/app/lib/cursorAnimation';

const Hero: React.FC = () => {
  useGSAP(() => {
    const words = document.querySelectorAll('.hero-words');
    gsap.registerPlugin(ScrollTrigger);
    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0, translateY: 20 + index * 5 },
        {
          opacity: 1,
          translateY: 0,
          delay: 0.1 * index + 0.5,
          duration: 0.5 + 1 / (index + 3),
        }
      );
    });

    gsap.to('.hero', {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 0,
        end: `+=${window.innerHeight * 0.5}`,
        scrub: true,
      },
    });
  });
  React.useEffect(() => {
    const Header = document.querySelector('header') as HTMLElement;
    if (Header) {
      CursorSparkle(Header);
    }
  }, []);
  return (
    <div className='min-h-screen w-full'>
      <header className='absolute z-10 top-0 left-0 w-full h-full'>
        <div className='container mt-40 flex justify-center items-center text-center'>
          <h1
            className='hero top-0 fixed font-bold text-center'
            aria-label='Hello! I am Tris, A creative developer'>
            <span className='hero-words'>Hello!&nbsp;</span>
            <span className='hero-words'>I&apos;m&nbsp;</span>
            <span className='hero-words'>Tris</span>
            <br />
            <span className='hero-words'>A&nbsp;</span>
            <span className='hero-words'>creative&nbsp;</span>
            <span className='hero-words'>developer</span>
          </h1>
        </div>

        <div className='absolute bottom-0 left-0 z-10 m-4 py-2 px-3 rounded-full bg-[#080721b3]'>
          <SocialMedia colors={['#91ff76', '#75d8ff', '#ffc9e4', '#ffefbf']} />
        </div>
        <div className='bg-[#080721b3] absolute bottom-0 right-0 m-4 z-10 text-sm rounded-full py-2 px-3'>
          <span className='HeroRainbow'>Built with Next.js</span>
        </div>
      </header>
    </div>
  );
};
export default Hero;
