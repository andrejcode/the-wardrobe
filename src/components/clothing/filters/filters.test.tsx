import Filters from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

function initializeMocks() {
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

describe('Filters', () => {
  test('adds color parameter to the URL', () => {
    const { mockPush } = initializeMocks();

    render(<Filters />);

    const colorButton = screen.getAllByRole('button', { name: /Color/ })[0];
    fireEvent.click(colorButton);

    const colorCheckbox = screen.getByRole('checkbox', { name: /BLUE/ });
    fireEvent.click(colorCheckbox);

    expect(mockPush).toHaveBeenCalledWith('/test-path?color=blue');
  });

  test('adds size parameter to the URL', () => {
    const { mockPush } = initializeMocks();

    render(<Filters />);

    const sizeButton = screen.getAllByRole('button', { name: /Size/ })[0];
    fireEvent.click(sizeButton);

    const sizeCheckbox = screen.getByRole('checkbox', { name: /S/ });
    fireEvent.click(sizeCheckbox);

    expect(mockPush).toHaveBeenCalledWith('/test-path?size=s');
  });
});
