'use client';
import Image from 'next/image';
import React from 'react';
import '@/app/styles/Loading.scss';

const Loading: React.FC = () => {
  return (
    <div className='loading relative z-10 overflow-hidden bg-[#040a1c] h-screen w-screen flex justify-center'>
      <div className='flex items-center relative z-10'>
        <Image
          alt='wings'
          src={'/assets/Logo/wing1.png'}
          width={500}
          height={500}
          className='loadingWings'></Image>
        <span className='t text-8xl font-bold'>T</span>
        <Image
          alt='wings'
          src={'/assets/Logo/wing2.png'}
          width={500}
          height={500}
          className='loadingWings'></Image>
      </div>
      <div className='yellowGlow rounded-full absolute top-1/2 left-1/2'></div>
    </div>
  );
};
export default Loading;
