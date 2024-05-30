import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.medster.app/login');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('kokulan@3axislabs.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Password@123');
  await page.locator('div').filter({ hasText: /^Forgot your password\?$/ }).first().click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Open user menu K' }).click();
  await page.getByRole('link', { name: 'Your Profile' }).click();
  await page.getByPlaceholder('Enter the current password').click();
  await page.getByPlaceholder('Enter the current password').fill('Password@123');
  await page.getByPlaceholder('Enter the current password').click();
  await page.getByPlaceholder('Enter the new password').click();
  await page.getByPlaceholder('Enter the new password').fill('Password@123');
  await page.getByPlaceholder('Enter the confirm new password').click();
  await page.getByPlaceholder('Enter the confirm new password').fill('Password@1234');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.locator('svg').nth(2).click();
  await page.locator('svg').nth(1).click();
  await page.getByText('Current Password *New').click();
  await page.getByPlaceholder('Enter the confirm new password').click();
  await page.getByPlaceholder('Enter the confirm new password').fill('Password@123');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('button', { name: 'Open user menu K' }).click();
  await page.getByRole('link', { name: 'Sign out' }).click();
});