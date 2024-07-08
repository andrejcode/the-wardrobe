import { Prisma, Gender, Size, Color } from '@prisma/client';

const clothesData: Prisma.ClothesCreateInput[] = [
  // Women

  // Men
  {
    name: 'NIKE regular fit T-shirt',
    gender: Gender.MALE,
    description:
      'This Nike tee offers classic comfort in a plain jersey fabric. The crew neck and straight hem keep it simple, while the quilted details on the hem add a touch of unique style. Soft cotton with a slightly relaxed fit ensures all-day comfort.',
    category: {
      connect: { id: 1 },
    },
    subcategory: {
      connect: { id: 1 },
    },
    clothingItem: {
      create: [
        {
          size: Size.S,
          color: Color.BLACK,
          quantity: 10,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-black.jpg',
        },
        {
          size: Size.M,
          color: Color.BLACK,
          quantity: 12,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-black.jpg',
        },
        {
          size: Size.L,
          color: Color.BLACK,
          quantity: 12,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-black.jpg',
        },
        {
          size: Size.S,
          color: Color.WHITE,
          quantity: 13,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-white.jpg',
        },
        {
          size: Size.M,
          color: Color.WHITE,
          quantity: 32,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-white.jpg',
        },
        {
          size: Size.L,
          color: Color.WHITE,
          quantity: 26,
          priceInCents: 2199,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-white.jpg',
        },
        {
          size: Size.S,
          color: Color.RED,
          quantity: 13,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-red.jpg',
        },
        {
          size: Size.M,
          color: Color.RED,
          quantity: 32,
          priceInCents: 1999,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-red.jpg',
        },
        {
          size: Size.L,
          color: Color.RED,
          quantity: 26,
          priceInCents: 2199,
          imageUrl: '/clothes/nike-tshirt/nike-tshirt-red.jpg',
        },
      ],
    },
  },
];

export default clothesData;
