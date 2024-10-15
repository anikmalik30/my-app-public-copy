'use client';

import { useCallback, useState } from 'react';

export default function ExitPreviewButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleExitPreview = useCallback(async () => {
    setIsLoading(true); // Set loading to true when starting the request
    setIsSuccess(false); // Reset success state before making the request

    try {
      const response = await fetch('/api/exit-preview', {
        method: 'POST', // Ensure the method is POST
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Failed to exit preview mode:', await response.text());
        setIsSuccess(false); // Ensure success state is false on failure
      } else {
        setIsSuccess(true); // Set success state to true on successful response
        // Optionally, you can add a short delay before showing the reload button
        // setTimeout(() => setIsSuccess(true), 500); // Uncomment if you want a delay
      }
    } catch (error) {
      console.error('Error exiting preview mode:', error);
      setIsSuccess(false); // Ensure success state is false on error
    } finally {
      setIsLoading(false); // Set loading to false when the request is done
    }
  }, []);

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className='relative'>
      {!isSuccess ? (
        <button
          onClick={handleExitPreview}
          className='fixed bottom-72 right-1/2 transform -translate-y-1/2 bg-transparent text-white border-2 border-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition'
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? (
            <div className='w-6 h-6 border-4 border-t-4 border-white border-solid rounded-full animate-spin'></div>
          ) : (
            'Exit Preview'
          )}
        </button>
      ) : (
        <button
          onClick={handleReload}
          className='fixed bottom-72 right-1/2 transform -translate-y-1/2 bg-transparent text-white border-2 border-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition'
        >
          Reload Page
        </button>
      )}
    </div>
  );
}
