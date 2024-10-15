import dynamic from 'next/dynamic';
import React from 'react';
// import Spline from "@splinetool/react-spline/next";
// Dynamically import the Spline component
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => <div className='spinner'>Loading animation...</div>,
});

export default function RotatingCube() {
  return (
    <main className='relative animate-webgl-scale-in-fade mr-52 -mt-10 scale-75'>
      <Spline scene='https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode' />
    </main>
  );
}
