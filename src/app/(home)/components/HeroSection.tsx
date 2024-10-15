import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';

// Dynamically import RotatingCube with SSR disabled for client-side rendering
const RotatingCube = dynamic(() => import('@/components/rotating-cube'), {
  ssr: false,
  loading: () => <div className='spinner'>Loading animation...</div>,
});

export default function HeroSection() {
  return (
    <div className='relative z-20 pt-[60px] md:h-screen md:max-h-[950px] md:pt-0 min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up max-w-7xl mx-auto'>
      <div className='flex flex-col justify-center items-center lg:items-start space-y-10 text-center lg:text-left md:ml-14'>
        <h1 className='text-4xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 z-10 select-none'>
          Full-Stack Developer
          <br />
          <span>{" I'm Anik."}</span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300 select-none px-4 md:px-0'>
          Mastering a diverse array of technologies, from cutting-edge frontend
          frameworks to robust backend systems.
        </p>
        <Link href='/contact'>
          <Button
            className='rounded-full px-12 py-4 text-lg font-bold text-zinc-900'
            aria-label='Contact Anik'
          >
            Get In Touch{' '}
            <ChevronRightIcon className='h-4 w-4 font-bold text-zinc-900' />
          </Button>
        </Link>
      </div>

      <div className='relative flex justify-center items-center -z-1'>
        {/* For small screens */}
        <div className='relative order-1 min-h-[225px] min-w-[225px] overflow-hidden grayscale md:hidden'>
          <video
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 h-[225px] w-[225px]'
            height='225'
            poster='/cube-fallback.webp'
            src='/cube.mp4'
            width='225'
          ></video>
        </div>

        {/* For larger screens */}
        <div className="absolute order-1 transform-gpu grayscale md:order-2 md:w-[700px] hidden items-center justify-center lg:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] before:from-green-5/5 before:to-yellow-6/25 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:blur-[100px] before:content-['']">
          <div className='lg:absolute top-0 left-0 right-0 bottom-0 flex lg:justify-end items-center lg:mr-40 transform mt-5'>
            <RotatingCube />
          </div>
        </div>
      </div>
    </div>
  );
}
