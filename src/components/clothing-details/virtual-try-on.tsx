'use client';

import { useState } from 'react';
import Button from '../button';

export default function VirtualTryOn() {
  const [isLoading, setIsLoading] = useState(false);

  async function showVirtualTryOnImage() {
    setIsLoading(true);

    try {
      const response = await fetch('/api/virtual-try-on');

      if (!response.ok) {
        throw new Error('Could not get virtual try-on image');
      }

      const data = await response.json();

      if (!data.imageUrl) {
        throw new Error('Could not get virtual try-on image');
      }

      window.open(data.imageUrl, '_blank');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      isDisabled={isLoading}
      fullWidth
      rounded
      onClick={showVirtualTryOnImage}
    >
      {isLoading ? 'This could take a while...' : 'Virtual Try-On'}
    </Button>
  );
}
