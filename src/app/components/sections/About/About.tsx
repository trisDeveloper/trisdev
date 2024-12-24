'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import Skills from './Skills';
import { useGSAP } from '@gsap/react';
import Clouds from './Clouds';
import { AboutList } from '@/app/lib/pageContent';

const About: React.FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'center center',
        end: `bottom+=${window.innerHeight * 3} center`,
        pin: true,
      },
    });
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
      .to('.about1', {
        opacity: 0,
      })
      .fromTo('.about2', { opacity: 0 }, { opacity: 1 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.about',
          start: `center+=${2 * window.innerHeight - 300} center`,
          end: `center+=${2 * window.innerHeight} center`,
          scrub: true,
        },
      })
      .to('.about2', {
        opacity: 0,
      })
      .fromTo('.about3', { opacity: 0 }, { opacity: 1 });
  });

  return (
    <div>
      <div
        id='about'
        className='z-10 sticky flex items-center justify-center min-h-screen'>
        <div className='about flex justify-center '>
          <div className='about1 max-w-3xl text-center w-full absolute -translate-y-1/2'>
            <h1 className='text-3xl text-white font-extrabold my-5'>
              {AboutList[0].title}
            </h1>
            <div className='w-full pb-10 px-4 text-[#dde5e9] text-lg'>
              {AboutList[0].content}
            </div>
          </div>
          <div className='about2 max-w-3xl text-center w-full absolute -translate-y-1/2'>
            <h1 className='text-3xl text-white font-extrabold my-5'>
              {AboutList[1].title}
            </h1>
            <div className='w-full pb-10 px-4 text-[#dde5e9] text-lg'>
              {AboutList[1].content}
            </div>
          </div>
          <div className='about3 max-w-3xl text-center w-full absolute -translate-y-1/2'>
            <h1 className='text-3xl text-white font-extrabold my-5'>
              {AboutList[2].title}
            </h1>
            <div className='w-full pb-10 px-4 text-[#dde5e9] text-lg'>
              {AboutList[2].content}
            </div>
          </div>
        </div>
        <Skills />
      </div>
      <Clouds />
    </div>
  );
};
export default About;
