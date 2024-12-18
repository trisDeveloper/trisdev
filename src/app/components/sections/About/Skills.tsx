'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from 'react';
gsap.registerPlugin(ScrollTrigger);

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

  React.useEffect(() => {
    const randomBetween = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const aboutElement = document.querySelector('.about2');
    const images = document.querySelectorAll('.skills div');

    if (aboutElement) {
      const { width, height, top, left } = aboutElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      let ctx = gsap.context(() => {
        images.forEach((image, index) => {
          let random = randomBetween(50, 500);
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
                start: `center+=${window.innerHeight / 3} center`,
                end: `center+=${(2 * window.innerHeight) / 3} center`,
                scrub: true,
              },
            })
            .fromTo(
              image,
              {
                x: x + Math.cos(angle) * centerX - 28,
                y: y + Math.sin(angle) * centerY - 28,
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
                start: `center+=${window.innerHeight} center`,
                end: `center+=${(4 * window.innerHeight) / 3} center`,
                scrub: true,
              },
            })
            .to(image, {
              x: x + Math.cos(angle) * centerX - 28,
              y: y + Math.sin(angle) * centerY - 28,
              opacity: 0,
            });
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <div>
      <div className='skills pointer-events-none fixed bottom-0 left-0 w-full h-full'>
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className='skill transition-all absolute w-14 h-14 opacity-0'>
            <Image
              src={`/assets/skills/${icon}`}
              alt={icon.replace('.svg', '')}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
