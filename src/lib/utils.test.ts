import { getCategoryNameFromParam, getParamFromCategoryName } from './utils';

describe('getParamFromCategoryName', () => {
  test('convert category in parameter format', () => {
    expect(getParamFromCategoryName('T-Shirts')).toBe('t-shirts');
    expect(getParamFromCategoryName('Shirts')).toBe('shirts');
    expect(getParamFromCategoryName('Trousers')).toBe('trousers');
    expect(getParamFromCategoryName('Long Sleeve T-shirts')).toBe(
      'long-sleeve-t-shirts'
    );
  });
});

describe('getCategoryNameFromParam', () => {
  test('convert parameter to category format', () => {
    expect(getCategoryNameFromParam('t-shirts')).toBe('T-shirts');
    expect(getCategoryNameFromParam('shirts')).toBe('Shirts');
    expect(getCategoryNameFromParam('trousers')).toBe('Trousers');
    expect(getCategoryNameFromParam('long-sleeve-t-shirts')).toBe(
      'Long Sleeve T-shirts'
    );
  });
});
