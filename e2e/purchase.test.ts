import { test, expect } from '@playwright/test';
import prisma from '@/lib/prisma';

let initialInventoryQuantity: number | undefined;

test.beforeAll(async () => {
  const inventory = await prisma.inventory.findUnique({ where: { id: 1 } });
  initialInventoryQuantity = inventory?.quantity;
});

test.afterAll(async () => {
  const inventory = await prisma.inventory.findUnique({ where: { id: 1 } });
  const inventoryQuantity = inventory?.quantity;

  if (
    initialInventoryQuantity !== undefined &&
    inventoryQuantity !== undefined
  ) {
    expect(inventoryQuantity).toBe(initialInventoryQuantity - 1);
  } else {
    throw new Error('Inventory quantity is undefined');
  }
});

test('authenticated user can purchase the item', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('img', { name: 'Sign in' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in with Password' }).click();
  await page.getByLabel("WOMEN's section").click();

  await page.goto('/shop/clothing-item/1?size=s');

  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('img', { name: 'Bag' }).click();
  await page.getByRole('link', { name: 'Go to checkout' }).click();
  await page.getByPlaceholder('1234 1234 1234').click();
  await page.getByPlaceholder('1234 1234 1234').fill('4242 4242 4242 4242');
  await page.getByPlaceholder('MM / YY').click();
  await page.getByPlaceholder('MM / YY').fill('04 / 42');
  await page.getByPlaceholder('CVC').click();
  await page.getByPlaceholder('CVC').fill('424');
  await page.getByPlaceholder('Full name on card').click();
  await page.getByPlaceholder('Full name on card').fill('Test Test');
  await page.getByTestId('hosted-payment-submit-button').click();
  await expect(
    page.getByRole('heading', { name: 'Payment Successful' })
  ).toBeVisible();
});
