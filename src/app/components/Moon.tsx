'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Moon: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const moonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const moon = moonRef.current;

    // Continuous rotation
    gsap.to(moon, {
      rotate: '360deg',
      duration: 50,
      repeat: -1,
      ease: 'linear',
    });

    // Scroll-based animations
    const scrollAnimations = [
      {
        trigger: '#about',
        start: 'top bottom',
        end: `+=${window.innerHeight}`,
        properties: { scale: 0.3, right: '0%', bottom: '90%' },
      },
      {
        trigger: '#projects',
        start: `bottom+=${window.innerHeight * 1.5} center`,
        end: `+=${window.innerHeight * 1.5}`,
        properties: { scale: 0.5, right: '50%', bottom: '50%' },
      },
      {
        trigger: '#projects',
        start: `bottom+=${window.innerHeight * 3.5} top`,
        end: `+=300`,
        properties: { scale: 0, opacity: 0 },
      },
    ];

    scrollAnimations.forEach(({ trigger, start, end, properties }) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub: true,
          },
        })
        .to(moon, properties);
    });
  });

  return (
    <div
      ref={moonRef}
      className='fixed bottom-0 right-1/2 translate-x-1/2 translate-y-2/3 max-w-[600px] min-w-80 w-[40vw]'
      style={{
        filter:
          'drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 500px rgba(255, 255, 255, 0.3))',
      }}>
      <Image
        width={600}
        height={600}
        alt='moon'
        src='/assets/moon.png'
        priority
      />
    </div>
  );
};

export default Moon;
