'use client';
import {
  motion,
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll progress (0 to 1) of the window
  const { scrollY } = useScroll();

  // const springPhysics: SpringOptions = {
  //   damping: 22,
  //   mass: 0.1,
  //   stiffness: 200,
  //   bounce: 0.5,
  //   duration: 0.4,
  //   velocity: 100,
  // };
  const springPhysics: SpringOptions = {
    damping: 20,
    mass: 0.1,
    stiffness: 100,
    restDelta: 0.001,
  };
  const smoothScrollY = useSpring(scrollY, springPhysics);

  const y = useTransform(smoothScrollY, (v) => -v);

  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setTimeout(() => {
          if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
          }
        }, 1000);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children]);

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        className='scrollBody'
        style={{ y, willChange: 'transform' }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
}
