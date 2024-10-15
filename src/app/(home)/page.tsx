import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import withFooter from '../withFooter';

// Dynamically load components with a custom loading component
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div>Loading Hero Section...</div>,
});
const Skills = dynamic(() => import('./components/Skills'), {
  loading: () => <div>Loading Skills...</div>,
});
const Projects = dynamic(() => import('./components/Projects'), {
  loading: () => <div>Loading Projects...</div>,
});

function Page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='relative w-full'>
        <div className='hidden md:block'>
          <Image
            src='/bghero.webp'
            alt='Background Hero'
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className='absolute'
          />
        </div>
        <HeroSection />
        <div
          className='h-10 bg-gradient-to-t from-black absolute -bottom-5 left-0 
      xl:bottom-0 w-full'
        ></div>
      </div>
      <div className='max-w-7xl mx-auto p-5'>
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default memo(withFooter(Page));
