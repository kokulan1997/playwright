import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('x2133icncnebwe');
  await page.getByRole('button', { name: 'Sign in' }).click();
});