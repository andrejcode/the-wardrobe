import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';
import {
  CategoriesWithSubcategories,
  ClothingWithVariationsAndInventory,
} from './definitions';

export async function fetchCategories(): Promise<
  CategoriesWithSubcategories[]
> {
  const categories = await prisma.categories.findMany({
    include: {
      subcategories: true,
    },
  });

  return categories;
}

/**
 * Fetches clothing items with their variations and inventory.
 *
 * @param gender - The gender of the clothing items to fetch.
 * @param skip - The number of items to skip.
 * @param take - The number of items to take.
 * @returns A promise that resolves to an array of clothing items with their variations and inventory.
 */
export async function fetchClothing(
  gender?: Gender,
  skip?: number,
  take?: number
): Promise<ClothingWithVariationsAndInventory[]> {
  const where = gender ? { gender: gender } : {};

  const clothing = await prisma.clothing.findMany({
    where,
    skip,
    take,
    include: {
      clothingVariations: {
        include: {
          inventory: true,
        },
      },
    },
  });

  return clothing;
}

export async function fetchClothingCount(gender?: Gender): Promise<number> {
  const where = gender ? { gender: gender } : {};

  const count = await prisma.clothing.count({ where });
  return count;
}
