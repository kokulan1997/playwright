import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/forgot-password');
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('jack');
  await page.getByRole('button', { name: 'Get OTP' }).click();
});