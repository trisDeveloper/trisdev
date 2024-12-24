'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface SocialMediaProps {
  colors: string[];
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/trisDeveloper',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tris-dev-017627226/',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Tris_developer',
    icon: FaXTwitter,
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/trisdev',
    icon: FaDev,
  },
];

const SocialMedia: React.FC<SocialMediaProps> = ({ colors }) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      {socialLinks.map((link, index) => {
        return (
          <a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.name}
            className='cursor-pointer'>
            <link.icon
              size={20}
              style={
                {
                  color: colors[index],
                  '--shadow-color': colors[index] + 80,
                } as any
              }
              className='transition-all hover:drop-shadow-[0_0_3px_var(--shadow-color)]'
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
