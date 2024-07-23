import { render, screen } from '@testing-library/react';
import HomeCategories from './home-categories';
import { Category } from '@prisma/client';
import React from 'react';
import '@testing-library/jest-dom';

const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Category1',
    gender: 'MALE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Category2',
    gender: 'MALE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('HomeCategories', () => {
  test('renders correctly', () => {
    render(<HomeCategories categories={mockCategories} categoryFor="men" />);

    const title = screen.getByText("Men's categories");
    expect(title).toBeInTheDocument();

    mockCategories.forEach((category) => {
      const categoryElement = screen.getByText(`Men's ${category.name}`);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
