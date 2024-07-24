import { test, expect } from '@playwright/test';

test('should add clothing item to the bag and then remove it', async ({
  page,
}) => {
  await page.goto('/');

  await page.getByLabel("ALL's section").click();
  await page
    .getByRole('link', { name: 'ZARA Floral Summer Dress ZARA' })
    .click();
  await page.getByRole('button', { name: 'SIZE S' }).click();
  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('img', { name: 'Bag' }).click();

  await expect(page.getByRole('banner')).toContainText('Quantity: 1');

  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByRole('banner')).toContainText('Bag is empty');
});

test('should add same clothing item to the bag twice display quantity 2', async ({
  page,
}) => {
  await page.goto('/');

  await page.getByLabel("ALL's section").click();
  await page
    .getByRole('link', { name: 'ZARA Floral Summer Dress ZARA' })
    .click();
  await page.getByRole('button', { name: 'SIZE S' }).click();
  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('img', { name: 'Bag' }).click();

  await expect(page.getByRole('banner')).toContainText('Quantity: 2');
});
