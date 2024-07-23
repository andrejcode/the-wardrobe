import {
  getGenderForSection,
  calculatePages,
  getParamFromCategoryName,
  getCategoryNameFromParam,
  getColorsAndSizesArrayFromParams,
  getUniqueSizes,
  findSmallestPriceInCents,
} from './utils';
import { mockClothingItem } from '@/__mocks__/mockData';

describe('getGenderForSection', () => {
  test('returns the correct gender for a given section', () => {
    expect(getGenderForSection('women')).toBe('FEMALE');
    expect(getGenderForSection('men')).toBe('MALE');
    expect(getGenderForSection('kids')).toBeUndefined();
    expect(getGenderForSection('all')).toBeUndefined();
  });
});

describe('calculatePages', () => {
  test('calculates the correct number of pages', () => {
    expect(calculatePages(10)).toBe(1);
    expect(calculatePages(15)).toBe(2);
    expect(calculatePages(20)).toBe(2);
    expect(calculatePages(25)).toBe(3);
    expect(calculatePages(30)).toBe(3);
    expect(calculatePages(48)).toBe(4);
  });
});

describe('getParamFromCategoryName', () => {
  test('converts category name to parameter format', () => {
    expect(getParamFromCategoryName('T-Shirts')).toBe('t-shirts');
    expect(getParamFromCategoryName('Shirts')).toBe('shirts');
    expect(getParamFromCategoryName('Trousers')).toBe('trousers');
    expect(getParamFromCategoryName('Long Sleeve T-shirts')).toBe(
      'long-sleeve-t-shirts'
    );
  });
});

describe('getCategoryNameFromParam', () => {
  test('converts parameter to category format', () => {
    expect(getCategoryNameFromParam('t-shirts')).toBe('T-shirts');
    expect(getCategoryNameFromParam('shirts')).toBe('Shirts');
    expect(getCategoryNameFromParam('trousers')).toBe('Trousers');
    expect(getCategoryNameFromParam('long-sleeve-t-shirts')).toBe(
      'Long Sleeve T-shirts'
    );
  });
});

describe('getColorsAndSizesArrayFromParams', () => {
  test('converts colors and sizes to uppercase arrays', () => {
    expect(getColorsAndSizesArrayFromParams('red', 'M')).toEqual({
      colorsArray: ['RED'],
      sizesArray: ['M'],
    });

    expect(
      getColorsAndSizesArrayFromParams(['red', 'blue'], ['S', 'L'])
    ).toEqual({
      colorsArray: ['RED', 'BLUE'],
      sizesArray: ['S', 'L'],
    });

    expect(getColorsAndSizesArrayFromParams('', '')).toEqual({
      colorsArray: undefined,
      sizesArray: undefined,
    });
  });
});

describe('getUniqueSizes', () => {
  test('returns an array of unique sizes for a given clothing item', () => {
    expect(getUniqueSizes(mockClothingItem)).toEqual(['S', 'M', 'L', 'XL']);
  });
});

describe('findSmallestPriceInCents', () => {
  test('returns the smallest price in cents for a given clothing item', () => {
    expect(findSmallestPriceInCents(mockClothingItem)).toBe(1);
  });
});
