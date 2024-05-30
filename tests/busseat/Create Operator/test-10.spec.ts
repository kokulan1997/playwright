import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').press('Control+c');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Organizations' }).click();
  await page.getByRole('link', { name: 'Create Operator' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('tommy');
  await page.getByRole('button', { name: 'Create Operator' }).click();
});