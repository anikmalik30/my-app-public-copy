'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isMobileDevice = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    const getLinkedInUrl = () => {
      if (isMobileDevice()) {
        return 'https://www.linkedin.com/in/anik-malik-6bb8a1245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; // LinkedIn app URL
      }
      return 'https://www.linkedin.com/in/anik-malik-6bb8a1245'; // Browser URL
    };

    setLinkedinUrl(getLinkedInUrl());
  }, []);

  const socials = [
    {
      link: linkedinUrl,
      label: 'LinkedIn',
      icon: SiLinkedin,
    },
    {
      link: 'https://github.com/anikmalik30',
      label: 'GitHub',
      icon: SiGithub,
    },
    {
      link: 'https://X.com/anikmalik4',
      label: 'X',
      icon: SiX,
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ease-in-out',
        {
          'bg-black/50 backdrop-blur-md': isScrolled,
          'bg-transparent': !isScrolled,
        },
        className,
      )}
    >
      <nav
        className={cn(
          'flex justify-between w-full items-center max-w-screen-xl mx-auto px-4 lg:px-2 lg:shadow-none animate-move-down transition-all duration-300 ease-in-out',
          className,
        )}
      >
        <h1 className='text-2xl font-bold text-gray-200 cursor-pointer'>
          <Link href='/'>Anik Malik</Link>
        </h1>

        <div className='flex items-center gap-5'>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.link}
                href={social.link}
                aria-label={social.label}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon className='w-5 h-5 hover:scale-125 hover:text-gray-200 transition-all text-zinc-400' />
              </Link>
            );
          })}
          {/* CV BUTTON */}
          {/* <a
            href='/cv.pdf'
            download
            className='inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-600 rounded hover:from-gray-600 hover:via-gray-800 hover:to-gray-900 transition-all duration-300'
          >
            Download CV
          </a> */}
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
