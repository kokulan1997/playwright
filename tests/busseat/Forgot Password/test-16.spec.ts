import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('jack');
  await page.locator('#OTP-form div').filter({ hasText: 'Mobile' }).nth(1).click();
  await page.getByLabel('Mobile', { exact: true }).check();
  await page.getByPlaceholder('eg:').click();
  await page.getByPlaceholder('eg:').fill('0779731605');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByRole('button', { name: 'Otp Verification' }).click();
});