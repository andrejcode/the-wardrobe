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

  if (process.env.NODE_ENV === 'development') {
    // Seed test user for development environment
    const testUser = await prisma.user.create({
      data: {
        email: 'bob@alice.com',
        name: 'Bob Alice',
        image: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
        role: 'admin',
      },
    });

    console.log(`Created user with id: ${testUser.id}`);
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
