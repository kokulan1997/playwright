import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Ja');
  await page.getByText('Jaffna').click();
  await page.locator('div:nth-child(2) > .form-group > .selectize-control > .form-control').click();
  await page.getByRole('button', { name: ' Organizations' }).click();
  await page.getByRole('link', { name: 'Create Operator' }).click();
  await page.getByRole('button', { name: 'Create Operator' }).click();
});