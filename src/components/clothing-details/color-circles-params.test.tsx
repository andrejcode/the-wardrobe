import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorCirclesParams from './color-circles-params';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ClothingVariation, Color } from '@prisma/client';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

export function initializeMocks() {
  const mockPush = jest.fn();

  (usePathname as jest.Mock).mockImplementation(() => '/test-path');
  (useSearchParams as jest.Mock).mockImplementation(
    () => new URLSearchParams()
  );
  (useRouter as jest.Mock).mockImplementation(() => ({
    push: mockPush,
  }));

  return {
    mockPush,
  };
}

const variations: ClothingVariation[] = [
  {
    id: 1,
    color: Color.RED,
    imageUrl: 'red.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
    clothingItemId: 1,
  },
  {
    id: 2,
    color: Color.BLUE,
    imageUrl: 'blue.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
    clothingItemId: 1,
  },
  {
    id: 3,
    color: Color.GREEN,
    imageUrl: 'green.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
    clothingItemId: 1,
  },
];

describe('ColorCirclesParams', () => {
  it('adds color parameter to the URL', () => {
    const { mockPush } = initializeMocks();

    render(<ColorCirclesParams variations={variations} />);

    const blueCircle = screen.getByTestId('BLUE');

    fireEvent.click(blueCircle);

    expect(mockPush).toHaveBeenCalledWith('/test-path?color=blue');
  });
});
