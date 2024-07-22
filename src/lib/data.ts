import prisma from '@/lib/prisma';
import { Color, Gender, Size, User } from '@prisma/client';
import {
  CategoriesWithSubcategories,
  ClothingWithClothingVariations,
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
 * @param name - The name of the clothing items to fetch.
 * @param userId - The ID of the user to fetch the wishlist for.
 * @returns A promise that resolves to an array of clothing items with their variations and inventory.
 */
export async function fetchClothing(
  gender?: Gender,
  skip?: number,
  take?: number,
  category?: string,
  subcategory?: string,
  colors?: string[] | string,
  sizes?: string[] | string,
  name?: string,
  userId?: string
): Promise<ClothingWithVariationsAndInventory[]> {
  const { colorsArray, sizesArray } = getColorsAndSizesArrayFromParams(
    colors,
    sizes
  );

  const clothing = await prisma.clothing.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
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
      wishlist: userId ? { some: { userId: userId } } : undefined,
    },
    skip,
    take,
    include: {
      clothingVariations: {
        include: {
          inventory: true,
        },
      },
      wishlist: true,
    },
  });

  return clothing;
}

export async function fetchClothingCount(
  gender?: Gender,
  category?: string,
  subcategory?: string,
  colors?: string[] | string,
  sizes?: string[] | string,
  name?: string,
  userId?: string
): Promise<number> {
  const { colorsArray, sizesArray } = getColorsAndSizesArrayFromParams(
    colors,
    sizes
  );

  const count = await prisma.clothing.count({
    where: {
      name: name,
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
      wishlist: userId ? { some: { userId: userId } } : undefined,
    },
  });
  return count;
}

export async function fetchClothingItemById(
  id: number,
  color?: Color,
  size?: Size
): Promise<ClothingWithVariationsAndInventory | null> {
  const clothingItem = await prisma.clothing.findUnique({
    where: {
      id,
      clothingVariations: {
        some: {
          color: color,
          inventory: {
            some: {
              size: size,
            },
          },
        },
      },
    },
    include: {
      clothingVariations: {
        include: {
          inventory: true,
        },
      },
    },
  });

  return clothingItem;
}

export async function fetchUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function saveClothingItemToWishlist(id: number, userId: string) {
  await prisma.wishlist.create({
    data: {
      clothingId: id,
      userId,
    },
  });
}

export async function removeClothingItemFromWishlist(
  id: number,
  userId: string
) {
  await prisma.wishlist.deleteMany({
    where: {
      clothingId: id,
      userId,
    },
  });
}

export async function isItemInWishlist(id: number, userId: string) {
  if (!userId) {
    return false;
  }

  const wishlistItem = await prisma.wishlist.findUnique({
    where: {
      userId_clothingId: {
        userId,
        clothingId: id,
      },
    },
  });

  return wishlistItem ? true : false;
}

export async function fetchSimilarClothingItems(
  id: number
): Promise<ClothingWithClothingVariations[] | null> {
  const clothingItem = await prisma.clothing.findUnique({
    select: {
      category: true,
    },
    where: {
      id,
    },
  });

  if (!clothingItem) {
    return null;
  }

  const clothingItems = await prisma.clothing.findMany({
    take: 5,
    where: {
      id: {
        not: id,
      },
      category: {
        name: clothingItem.category.name,
      },
    },
    include: {
      clothingVariations: true,
    },
  });

  return clothingItems;
}
