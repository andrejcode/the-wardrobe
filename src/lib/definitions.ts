import type {
  Categories,
  Subcategories,
  Clothing,
  ClothingVariations,
  Inventory,
} from '@prisma/client';

export type CategoriesWithSubcategories = Categories & {
  subcategories?: Subcategories[];
};

export type ClothingVariationWithInventory = ClothingVariations & {
  inventory: Inventory[];
};

export type ClothingWithClothingVariations = Clothing & {
  clothingVariations: ClothingVariations[];
};

export type ClothingWithVariationsAndInventory = Clothing & {
  clothingVariations: ClothingVariationWithInventory[];
};
