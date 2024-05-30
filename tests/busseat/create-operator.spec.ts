import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Organizations' }).click();
  await page.getByRole('link', { name: 'Create Operator' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('sinthu999');
  await page.getByPlaceholder('Enter the business name').click();
  await page.getByPlaceholder('Enter the business name').fill('Niroobana Travels 4');
  await page.getByPlaceholder('Enter the legal name').click();
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').press('Control+c');
  await page.getByPlaceholder('Enter the legal name').click();
  await page.getByPlaceholder('Enter the legal name').fill('Niroobana Travels 4');
  await page.getByPlaceholder('Enter the identifier').click();
  await page.getByPlaceholder('Enter the identifier').fill('NT4');
  await page.getByPlaceholder('Enter the tagline').click();
  await page.getByLabel('Can add remove seat').check();
  await page.getByLabel('Can create booking after').check();
  await page.getByLabel('Can show journey after').check();
  await page.getByLabel('Title').selectOption('Mrs');
  await page.getByPlaceholder('Enter the full name').click();
  await page.getByPlaceholder('Enter the full name').fill('Sinthurjan');
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').fill('0769634204');
  await page.locator('#bus-crew-email').click();
  await page.locator('#bus-crew-email').fill('sinthurjan@3axislabs.com');
  await page.getByRole('button', { name: 'Create Operator' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});