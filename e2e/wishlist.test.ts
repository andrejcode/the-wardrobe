import { test, expect } from '@playwright/test';
import prisma from '@/lib/prisma';

test.beforeEach(async ({ page }) => {
  await page.goto('/api/auth/signout');
  await page.getByRole('button', { name: 'Sign out' }).click();

  await prisma.wishlist.deleteMany({ where: { userId: 'test-user-id' } });
});

test('authenticated user can add item to the wishlist', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('img', { name: 'Sign in' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in with Password' }).click();
  await page.getByLabel("WOMEN's section").click();
  await page
    .getByRole('link', { name: 'ZARA Floral Summer Dress ZARA' })
    .click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Saved clothing items' }).click();
  await expect(
    page.getByRole('link', { name: 'ZARA Floral Summer Dress ZARA' })
  ).toBeVisible();
});
