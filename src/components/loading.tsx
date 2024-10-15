import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='loading-container fade-in'>
      <video className='loading-video' autoPlay loop muted>
        <source src='/cube.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <p className='loading-text'>
        Believe you can and you&apos;re halfway there.
        <br />- Theodore Roosevelt
      </p>
    </div>
  );
};

export default Loading;
