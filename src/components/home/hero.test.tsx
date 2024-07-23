import { render, screen } from '@testing-library/react';
import Hero from './hero';

describe('Hero', () => {
  test('buttons should have correct link', () => {
    render(<Hero />);

    const womensButton = screen.getByRole('link', { name: /Shop Women's/i });
    expect(womensButton).toHaveAttribute('href', '/shop/women');

    const mensButton = screen.getByRole('link', { name: /Shop Men's/i });
    expect(mensButton).toHaveAttribute('href', '/shop/men');
  });
});
