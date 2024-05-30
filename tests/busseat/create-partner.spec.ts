import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Organizations' }).click();
  await page.getByRole('link', { name: 'Create Partner' }).click();
  await page.getByPlaceholder('Enter the user name').click();
  await page.getByPlaceholder('Enter the user name').fill('matt10');
  await page.getByLabel('Select User Role').selectOption('ROLE_AGENT_ADMIN');
  await page.getByPlaceholder('Enter the business name').click();
  await page.getByPlaceholder('Enter the business name').fill('Dare Devil Depot10');
  await page.getByPlaceholder('Enter the legal name').click();
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter the business name').press('Control+c');
  await page.getByPlaceholder('Enter the legal name').click();
  await page.getByPlaceholder('Enter the legal name').fill('Dare Devil Depot10');
  await page.getByPlaceholder('Enter the identifier').click();
  await page.getByPlaceholder('Enter the identifier').fill('DDD10');
  await page.getByPlaceholder('Enter the tagline').click();
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').fill('0771234567');
  await page.getByLabel('Can show journey after').check();
  await page.getByLabel('Can create booking after').check();
  await page.getByLabel('Title').selectOption('Mr');
  await page.getByPlaceholder('Enter full name').click();
  await page.getByPlaceholder('Enter full name').fill('Matt Murdock');
  await page.getByPlaceholder('eg: 0771234567 or 0111234567', { exact: true }).click();
  await page.getByPlaceholder('eg: 0771234567 or 0111234567', { exact: true }).fill('0779731605');
  await page.locator('#agent-email').click();
  await page.locator('#agent-email').fill('sinthurjan@3axislabs.com');
  await page.getByRole('button', { name: 'Create Partner' }).click();

  await page.locator('#location-yes-button').click();
   //await page.waitForSelector('#location-yes-button', { timeout: 6000 });

  // Verify successful create by checking the presence of a success message
  const successMessage = await page.locator('#location-yes-button');
  const successText = await successMessage.innerText();
  expect(successText).toContain('create partener Successful');
  await page.getByRole('link', { name: 'Sign Out' }).click();
});