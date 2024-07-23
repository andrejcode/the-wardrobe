import { PrismaClient } from '@prisma/client';
import categoriesData from './data/categoriesData';
import clothingData from './data/clothingData';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed categories and subcategories
  for (const categoryData of categoriesData) {
    const { subcategories, ...category } = categoryData;
    const createdCategory = await prisma.category.create({
      data: {
        ...category,
        subcategories,
      },
    });

    console.log(`Created category with id: ${createdCategory.id}`);
  }

  // Seed clothing
  for (const clothingItemData of clothingData) {
    const createdClothing = await prisma.clothingItem.create({
      data: clothingItemData,
    });

    console.log(`Created clothing with id: ${createdClothing.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
