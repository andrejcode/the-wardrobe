import { Color, Gender, Size } from '@prisma/client';
import { CLOTHING_ITEMS_PER_PAGE } from './constants';
import { ClothingWithVariationsAndInventory } from './definitions';

/**
 * Returns the gender associated with a given section.
 * @param section - The section for which to determine the gender.
 * @returns The gender associated with the section, or undefined if the section is not recognized.
 */
export function getGenderForSection(section: string) {
  if (section === 'women') {
    return Gender.FEMALE;
  }

  if (section === 'men') {
    return Gender.MALE;
  }

  return undefined;
}

/**
 * Calculates the number of pages needed to display the given total number of items.
 *
 * @param totalItems - The total number of items.
 * @returns The number of pages needed to display the items.
 */
export function calculatePages(totalItems: number) {
  return Math.ceil(totalItems / CLOTHING_ITEMS_PER_PAGE);
}

/**
 * Converts a category name to a parameter format.
 * @param categoryName - The name of the category.
 * @returns The parameter format of the category name.
 */
export function getParamFromCategoryName(categoryName: string) {
  return categoryName.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Retrieves the category name from a parameter string.
 *
 * @param param - The parameter string.
 * @returns The category name.
 */
export function getCategoryNameFromParam(param: string) {
  const WORDS_WITH_HYPHEN = ['t-shirt', 't-shirts'];

  const parts = param.split('-');

  for (let i = 0; i < parts.length - 1; i++) {
    if (WORDS_WITH_HYPHEN.includes(parts[i] + '-' + parts[i + 1])) {
      parts[i] = parts[i] + '-' + parts[i + 1];
      parts.splice(i + 1, 1);
    }
  }

  parts.forEach((part, index) => {
    parts[index] = part.charAt(0).toUpperCase() + part.slice(1);
  });

  return parts.join(' ');
}

export function getColorsAndSizesArrayFromParams(
  colors?: string[] | string,
  sizes?: string[] | string
) {
  // Convert colors and sizes to uppercase and store them in arrays.
  let colorsArray: Color[] | undefined;
  let sizesArray: Size[] | undefined;

  // Colors and sizes can be undefined or a string or an array of strings.
  if (colors !== undefined && colors.length > 0 && colors !== '') {
    if (typeof colors === 'string') {
      colorsArray = [colors.toUpperCase() as Color];
    }

    if (typeof colors === 'object') {
      colorsArray = colors.map((color) => color.toUpperCase() as Color);
    }
  }

  if (sizes !== undefined && sizes.length > 0 && sizes !== '') {
    if (typeof sizes === 'string') {
      sizesArray = [sizes.toUpperCase() as Size];
    }

    if (typeof sizes === 'object') {
      sizesArray = sizes.map((size) => size.toUpperCase() as Size);
    }
  }

  return { colorsArray, sizesArray };
}

// Return an array of unique sizes for a given clothing item.
export function getUniqueSizes(
  clothingItem: ClothingWithVariationsAndInventory
) {
  const sizes: Size[] = [];
  const order = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  clothingItem.clothingVariations.forEach((variation) => {
    variation.inventory.forEach((item) => {
      if (!sizes.includes(item.size)) {
        sizes.push(item.size);
      }
    });
  });

  sizes.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return sizes;
}
