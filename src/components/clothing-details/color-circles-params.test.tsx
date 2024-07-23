import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorCirclesParams from './color-circles-params';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { mockVariations } from '@/__mocks__/mockData';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

describe('ColorCirclesParams', () => {
  it('adds color parameter to the URL', () => {
    const mockPush = jest.fn();
    (usePathname as jest.Mock).mockImplementation(() => '/test-path');
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams()
    );
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));

    render(<ColorCirclesParams variations={mockVariations} />);

    const blueCircle = screen.getByTestId('BLUE');

    fireEvent.click(blueCircle);

    expect(mockPush).toHaveBeenCalledWith('/test-path?color=blue');
  });
});
