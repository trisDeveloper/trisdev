'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { randomBetween } from '@/app/lib/cursorAnimation';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React from 'react';

const Skills: React.FC = () => {
  const techIcons: string[] = [
    'nodejs.svg',
    'typescript.svg',
    'python.svg',
    'vue.svg',
    'css.svg',
    'gsap.svg',
    'mongodb.svg',
    'reactjs.svg',
    'html.svg',
    'django.svg',
    'nextjs.svg',
    'tailwind.svg',
  ];

  useGSAP(() => {
    const aboutElement = document.querySelector('.about2');
    const images = document.querySelectorAll('.skill');

    gsap.registerPlugin(ScrollTrigger);
    if (aboutElement) {
      const { width, height, top, left } = aboutElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      images.forEach((image, index) => {
        let random = randomBetween(30, 700);
        const radiusX = (width + random) / 2;
        const radiusY = (height + random) / 2;
        const angle = (index / images.length) * Math.PI * 2;
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);

        // about text animations
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.about',
              start: `center+=${window.innerHeight - 300} center`,
              end: `center+=${window.innerHeight} center`,
              scrub: true,
            },
          })
          .fromTo(
            image,
            {
              x: x + (Math.cos(angle) * centerX) / 10 - 28,
              y: y + (Math.sin(angle) * centerY) / 10 - 28,
              opacity: 0,
            },
            {
              x: x - 28,
              y: y - 28,
              scale: randomBetween(0.9, 1.2),
              opacity: 1,
            }
          );
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.about',
              start: `center+=${2 * window.innerHeight - 300} center`,
              end: `center+=${2 * window.innerHeight} center`,
              scrub: true,
            },
          })
          .to(image, {
            x: x + (Math.cos(angle) * centerX) / 10 - 28,
            y: y + (Math.sin(angle) * centerY) / 10 - 28,
            opacity: 0,
          });
      });
    }
  });
  return (
    <div className='skills overflow-hidden absolute top-0 left-0 w-full h-screen'>
      {techIcons.map((icon, index) => (
        <div
          key={index}
          className='skill transition-all absolute w-14 h-14 opacity-1'>
          <Image
            src={`/assets/skills/${icon}`}
            alt={icon.replace('.svg', '')}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};
export default Skills;
