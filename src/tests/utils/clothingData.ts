import { Color, Gender, Size } from '@prisma/client';
import { ClothingItemWithVariationsAndInventory } from '@/lib/definitions';

export const clothingItem: ClothingItemWithVariationsAndInventory = {
  id: 1,
  name: 'MANGO Faux Leather Jacket',
  gender: Gender.FEMALE,
  description:
    'This faux leather jacket from MANGO adds a chic touch to any outfit. It features a zip closure, multiple pockets, and a fitted design, making it perfect for a stylish and edgy look.',
  createdAt: new Date(),
  updatedAt: new Date(),
  categoryId: 4,
  subcategoryId: null,
  clothingVariations: [
    {
      id: 1,
      color: Color.BLACK,
      imageUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      clothingItemId: 1,
      inventory: [
        {
          id: 1,
          size: Size.S,
          quantity: 10,
          priceInCents: 5999,
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 1,
        },
        {
          id: 2,
          size: Size.M,
          quantity: 10,
          priceInCents: 5999,
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 1,
        },
        {
          id: 3,
          size: Size.L,
          quantity: 10,
          priceInCents: 5999,
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 1,
        },
      ],
    },
    {
      id: 2,
      color: Color.GRAY,
      imageUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      clothingItemId: 1,
      inventory: [
        {
          id: 1,
          size: Size.S,
          quantity: 10,
          priceInCents: 5999,
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 2,
        },
        {
          id: 2,
          size: Size.M,
          quantity: 10,
          priceInCents: 5999,
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 2,
        },
        {
          id: 3,
          size: Size.XL,
          quantity: 10,
          priceInCents: 100, // Smallest price
          createdAt: new Date(),
          updatedAt: new Date(),
          clothingVariationId: 2,
        },
      ],
    },
  ],
};
