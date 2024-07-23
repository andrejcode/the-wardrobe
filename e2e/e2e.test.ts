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

test('should navigate to women section', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: "Shop Women's" }).click();

  await expect(
    page.getByRole('heading', { name: 'Clothing for women' })
  ).toBeVisible();
});

test('should navigate to men section', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: "Shop Men's" }).click();

  await expect(
    page.getByRole('heading', { name: 'Clothing for men' })
  ).toBeVisible();
});
