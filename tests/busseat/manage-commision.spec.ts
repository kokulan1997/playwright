import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByText('Username Password Sign in').click();
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Accounts' }).click();
  await page.getByRole('link', { name: 'Manage Commissions' }).click();
  await page.getByLabel('Create New').click();
  await page.getByPlaceholder('Select the operator').click();
  await page.getByText('JD').click();
  await page.getByText('|| Colombo-Kandy').click();
  await page.locator('#bus-type-input').selectOption('ALL');
  await page.getByLabel('Commission\n                                    Type').selectOption('PERCENTAGE');
  await page.getByLabel('Commission\n                                    Value', { exact: true }).click();
  await page.getByLabel('Commission\n                                    Value', { exact: true }).fill('10');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('li').filter({ hasText: 'Sign Out' }).click();
});