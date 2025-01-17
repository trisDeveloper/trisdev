'use client';
import React from 'react';

import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Moon from './components/Moon';
import { playStars } from './lib/backgroundSky';

const Home: React.FC = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('skyStars') as HTMLCanvasElement;
    if (canvas) {
      playStars(canvas);
    }
  }, []);
  return (
    <main className='min-h-screen overflow-x-hidden'>
      {/* Animations */}
      <canvas className='fixed top-0' id='skyStars'></canvas>
      <div className='shootingStar'></div>
      <Moon />

      {/* Page Sections */}
      <Hero />
      <About />
      <Projects />
    </main>
  );
};
export default Home;
