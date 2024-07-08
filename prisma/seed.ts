import { PrismaClient } from '@prisma/client';
import categoriesData from './data/categoriesData';
import clothesData from './data/clothesData';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed categories and subcategories
  for (const categoryData of categoriesData) {
    const { subcategories, ...category } = categoryData;
    const createdCategory = await prisma.categories.create({
      data: {
        ...category,
        subcategories,
      },
    });

    console.log(`Created category with id: ${createdCategory.id}`);
  }

  // Seed clothes
  for (const clothingData of clothesData) {
    const createdClothing = await prisma.clothes.create({
      data: clothingData,
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
    process.exit(1);
  });
