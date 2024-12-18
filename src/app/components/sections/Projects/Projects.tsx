'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import '@/app/styles/Projects.scss';
import { projectList } from '@/app/lib/pageContent';

const Projects: React.FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.slider', {
      transform: 'translate(-50%, -50%) perspective(1000vw) rotateY(160deg)',
      scrollTrigger: {
        trigger: '#projects',
        start: 'center+=20px center',
        end: `bottom+=${window.innerHeight} center`,
        scrub: 1,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#projects',
          start: 'center center',
          end: `bottom+=${window.innerHeight} center`,
          pin: true,
        },
      })
      .to('.projects', {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: '.projects',
          start: `bottom+=${window.innerHeight} center`,
          endTrigger: 'body',
          end: '+=300',
          scrub: true,
        },
      });
  });

  return (
    <>
      <div
        id='projects'
        className='relative container z-10 flex flex-col w-full items-center'>
        <h1 className='py-6 mt-[1vh] text-5xl font-bold text-center'>
          Things I&apos;ve build
        </h1>
        <div className='projects relative w-full max-w-7xl text-center h-[70vh]'>
          <div className='slider absolute aspect-[4/3] max-w-2xl w-[90vw] sm:w-[50vw] top-1/2 left-1/2'>
            {projectList.map(
              (
                project: {
                  liveSite: string;
                  image: string;
                  name: string;
                  desc: string;
                  skills: string[];
                },
                index: number
              ) => (
                <a
                  key={index}
                  href={`${project.liveSite}`}
                  aria-label={`View live site for ${project.name}`}
                  className='project cursor-pointer bg-cover bg-center absolute overflow-hidden rounded-2xl'
                  style={{
                    backgroundImage: `url(/assets/projects/${project.image})`,
                  }}>
                  <div className='w-full h-full'>
                    <div className='relative flex flex-col justify-end z-10 text-left w-full h-full p-4 bg-[linear-gradient(transparent,#000814)]'>
                      <h1 className='text-2xl font-bold'>{project.name}</h1>
                      <div className='py-2'>
                        <p>{project.desc}</p>
                      </div>
                      <div className='space-x-5'>
                        {project.skills.map((skill, index) => (
                          <span key={index} className='text-[#b0c9ff] py-2'>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
