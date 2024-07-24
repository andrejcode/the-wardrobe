import { test, expect } from '@playwright/test';

test('should show categories on homepage', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('link', { name: "Women's T-shirts" })
  ).toBeVisible();
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
