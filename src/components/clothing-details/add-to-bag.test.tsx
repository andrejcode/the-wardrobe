import { render, screen, fireEvent } from '@testing-library/react';
import AddToBag from '@/components/clothing-details/add-to-bag';
import { Color, Size } from '@prisma/client';
import { mockClothingItem } from '@/__mocks__/mockData';
import { BagStoreProvider } from '@/providers/bag-store-provider';

describe('AddToBag', () => {
  const item = mockClothingItem;
  const priceInCents = 1000;
  const quantity = 2;
  const color = 'BLUE' as Color;
  const size = 'M' as Size;
  const imageUrl = 'imageUrl';

  test('renders without errors', () => {
    render(
      <BagStoreProvider>
        <AddToBag
          item={item}
          priceInCents={priceInCents}
          quantity={quantity}
          color={color}
          size={size}
          imageUrl={imageUrl}
        />
      </BagStoreProvider>
    );

    expect(screen.getByText('Add to bag')).toBeInTheDocument();
  });

  test('disables button when priceInCents or quantity is null or zero', () => {
    render(
      <BagStoreProvider>
        <AddToBag
          item={item}
          priceInCents={null}
          quantity={0}
          color={color}
          size={size}
          imageUrl={imageUrl}
        />
      </BagStoreProvider>
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
