import { Prisma, Gender } from '@prisma/client';

const categoriesData: Prisma.CategoryCreateInput[] = [
  {
    name: 'T-shirts',
    gender: Gender.UNISEX,
    subcategories: {
      create: [{ name: 'Classic T-shirts' }, { name: 'Long Sleeves' }],
    },
  },
  { name: 'Jeans', gender: Gender.UNISEX, subcategories: { create: [] } },
  { name: 'Pants', gender: Gender.UNISEX, subcategories: { create: [] } },
  {
    name: 'Jackets',
    gender: Gender.UNISEX,
    subcategories: {
      create: [
        // { name: 'Leather jackets' },
        // { name: 'Denim jackets' },
        // { name: 'Winter jackets' },
      ],
    },
  },
  { name: 'Dresses', gender: Gender.FEMALE, subcategories: { create: [] } },
  { name: 'Skirts', gender: Gender.FEMALE, subcategories: { create: [] } },
  { name: 'Shirts', gender: Gender.UNISEX, subcategories: { create: [] } },
  {
    name: 'Tracksuits And Joggers',
    gender: Gender.UNISEX,
    subcategories: { create: [] },
  },
  {
    name: 'Sweatshirts And Hoodies',
    gender: Gender.UNISEX,
    subcategories: { create: [] },
  },
];

export default categoriesData;
