'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Loading from '@/components/loading';

const ClientLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleContentLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');
    const animations = document.querySelectorAll('.animated');

    let loadedCount = 0;
    const totalCount = images.length + videos.length + animations.length;

    const checkAllLoaded = () => {
      loadedCount += 1;
      if (loadedCount === totalCount) {
        handleContentLoaded();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener('load', checkAllLoaded);
        img.addEventListener('error', checkAllLoaded);
      }
    });

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        checkAllLoaded();
      } else {
        video.addEventListener('loadeddata', checkAllLoaded);
        video.addEventListener('error', checkAllLoaded);
      }
    });

    animations.forEach((animation) => {
      animation.addEventListener('animationend', checkAllLoaded);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', checkAllLoaded);
        img.removeEventListener('error', checkAllLoaded);
      });
      videos.forEach((video) => {
        video.removeEventListener('loadeddata', checkAllLoaded);
        video.removeEventListener('error', checkAllLoaded);
      });
      animations.forEach((animation) => {
        animation.removeEventListener('animationend', checkAllLoaded);
      });
    };
  }, [handleContentLoaded]);

  return isLoading ? <Loading /> : <>{children}</>;
};

export default ClientLoader;
