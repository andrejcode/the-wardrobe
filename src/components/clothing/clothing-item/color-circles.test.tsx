import { render, screen, fireEvent } from '@testing-library/react';
import ColorCircles from './color-circles';
import { Color } from '@prisma/client';

test('renders color circles correctly', () => {
  const activeColor = 'RED' as Color;
  const variations = [
    {
      id: 1,
      color: 'RED' as Color,
      imageUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      clothesId: 0,
    },
    {
      id: 2,
      color: 'BLUE' as Color,
      imageUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      clothesId: 0,
    },
    {
      id: 3,
      color: 'GREEN' as Color,
      imageUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      clothesId: 0,
    },
  ];
  const changeColor = jest.fn();

  render(
    <ColorCircles
      activeColor={activeColor}
      variations={variations}
      changeColor={changeColor}
    />
  );

  const colorCircles = screen.getAllByRole('button');

  expect(colorCircles).toHaveLength(variations.length);

  colorCircles.forEach((circle, index) => {
    expect(circle).toHaveStyle({ backgroundColor: variations[index].color });

    const parentDiv = circle.parentElement;

    if (variations[index].color === activeColor) {
      expect(parentDiv).toHaveClass('border-black');
    } else {
      expect(parentDiv).not.toHaveClass('border-black');
    }

    fireEvent.click(circle);
    expect(changeColor).toHaveBeenCalledWith(variations[index].color);
  });
});
