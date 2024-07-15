import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';
import {
  CategoriesWithSubcategories,
  ClothingWithVariationsAndInventory,
} from './definitions';
import { getColorsAndSizesArrayFromParams } from './utils';

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
 * @param category - The category of the clothing items to fetch.
 * @param subcategory - The subcategory of the clothing items to fetch.
 * @param colors - The colors of the clothing items to fetch.
 * @param sizes - The sizes of the clothing items to fetch.
 * @returns A promise that resolves to an array of clothing items with their variations and inventory.
 */
export async function fetchClothing(
  gender?: Gender,
  skip?: number,
  take?: number,
  category?: string,
  subcategory?: string,
  colors?: string[] | string,
  sizes?: string[] | string
): Promise<ClothingWithVariationsAndInventory[]> {
  const { colorsArray, sizesArray } = getColorsAndSizesArrayFromParams(
    colors,
    sizes
  );

  const clothing = await prisma.clothing.findMany({
    where: {
      gender: gender,
      category: {
        name: category,
      },
      subcategory: {
        name: subcategory,
      },
      clothingVariations: {
        some: {
          color: {
            in: colorsArray,
          },
          inventory: {
            some: {
              size: {
                in: sizesArray,
              },
            },
          },
        },
      },
    },
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

export async function fetchClothingCount(
  gender?: Gender,
  category?: string,
  subcategory?: string,
  colors?: string[] | string,
  sizes?: string[] | string
): Promise<number> {
  const { colorsArray, sizesArray } = getColorsAndSizesArrayFromParams(
    colors,
    sizes
  );

  const count = await prisma.clothing.count({
    where: {
      gender: gender,
      category: {
        name: category,
      },
      subcategory: {
        name: subcategory,
      },
      clothingVariations: {
        some: {
          color: {
            in: colorsArray,
          },
          inventory: {
            some: {
              size: {
                in: sizesArray,
              },
            },
          },
        },
      },
    },
  });
  return count;
}
