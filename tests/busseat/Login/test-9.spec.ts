import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
});