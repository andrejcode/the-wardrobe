'use client';

import { useState } from 'react';
import Button from '../button';

export default function VirtualTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getVirtualTryOnImage() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/virtual-try-on');

      if (!response.ok) {
        setError('Unable to get image. Try again!');
      }

      const data = await response.json();

      if (!data.imageUrl) {
        setError('Unable to get image. Try again!');
      }

      window.open(data.imageUrl, '_blank');
    } catch (error) {
      console.error(error);
      setError('Unable to get image. Try again!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      isDisabled={isLoading}
      fullWidth
      rounded
      onClick={getVirtualTryOnImage}
    >
      {isLoading ? (
        'This could take a while...'
      ) : error ? (
        <span className="text-red-500">{error}</span>
      ) : (
        'Virtual Try-On'
      )}
    </Button>
  );
}
