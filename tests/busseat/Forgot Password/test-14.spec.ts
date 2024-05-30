import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('jack');
  await page.getByRole('radio', { name: 'Email' }).check();
  await page.getByPlaceholder('Enter the email').click();
  await page.getByPlaceholder('Enter the email').fill('kokulan@3axislabs.com');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByPlaceholder('Enter the email').click();
  await page.getByPlaceholder('Enter the email').fill('kokulan@3axislabsm');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.locator('#OTP-form div').filter({ hasText: 'Mobile' }).nth(1).click();
  await page.getByPlaceholder('Enter the email').click();
});