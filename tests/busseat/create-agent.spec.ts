import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Users' }).click();
  await page.getByRole('link', { name: 'Create Agent' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('96');
  await page.getByText('Create User User Name Select').click();
  await page.getByLabel('Select User Role').selectOption('ROLE_AGENT');
  await page.getByLabel('Title').selectOption('Mr');
  await page.getByPlaceholder('Enter the full name').click();
  await page.getByPlaceholder('Enter the full name').fill('Ram 96');
  await page.getByPlaceholder('eg: 0771234567 or').click();
  await page.getByPlaceholder('eg: 0771234567 or').fill('0779731605');
  await page.getByText('Create User User Name Select').click();
  await page.getByPlaceholder('Enter the the email').click();
  await page.getByPlaceholder('Enter the the email').fill('kokulan@3axislabs.com');
  await page.getByLabel('Max Allowed Seats Per Booking').click();
  await page.getByLabel('Max Allowed Seats Per Booking').fill('10');
  await page.locator('#submit div').filter({ hasText: 'Select Partner' }).locator('div').nth(1).click();
  await page.getByText('Dare Devil Depot', { exact: true }).click();
  await page.getByRole('button', { name: 'Create Agent' }).click();
  
  expect(loginPage.getSuccessMessage()).toBe('Welcome, user123!');
  await page.getByRole('link', { name: 'Sign Out' }).click();
});