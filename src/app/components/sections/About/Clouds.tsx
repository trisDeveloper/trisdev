'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import React from 'react';

const Clouds: React.FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // clouds animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about',
          start: `center bottom`,
          end: `center center`,
          scrub: true,
        },
      })
      .to('.clouds', {
        transform: `translateX(0)`,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about',
          start: `center+=${window.innerHeight * 3} center`,
          end: `bottom+=${window.innerHeight * 4} center`,
          scrub: true,
        },
      })
      .to('.clouds', {
        transform: 'translateY(105%)',
      });
  });

  return (
    <>
      <Image
        alt='cloud'
        className='clouds fixed w-[50vw] md:w-[35vw] max-w-[750px] bottom-0 left-0 opacity-80 -translate-x-full'
        width={750}
        height={600}
        src='/assets/cloudLeft.png'
      />
      <Image
        alt='cloud'
        className='clouds fixed w-[50vw] md:w-[35vw] max-w-[750px] bottom-0 right-0 opacity-80 translate-x-full'
        width={750}
        height={600}
        src='/assets/cloudRight.png'
      />
    </>
  );
};
export default Clouds;
