import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('jack');
  await page.getByRole('radio', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Get OTP' }).click();
});