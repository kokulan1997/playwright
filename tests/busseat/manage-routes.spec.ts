import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Routes' }).click();
  await page.getByRole('link', { name: 'Create Route' }).click();
  await page.getByPlaceholder('Enter Route Number').click();
  await page.getByPlaceholder('Enter Route Number').fill('JAFFNa');
  await page.getByPlaceholder('Total distance in km').click();
  await page.getByPlaceholder('Enter Route Number').click();
  await page.getByPlaceholder('Enter Route Number').fill('EU 541');
  await page.getByPlaceholder('Total distance in km').click();
  await page.getByPlaceholder('Total distance in km').fill('2500');
  await page.getByRole('cell', { name: 'Enter your station' }).locator('div').nth(1).click();
  await page.getByPlaceholder('Enter your station').fill('Ja');
  await page.getByText('Jaffna').click();
  await page.getByRole('cell', { name: '' }).locator('span').click();
  await page.getByRole('cell', { name: 'Enter your station' }).locator('div').nth(1).click();
  await page.getByPlaceholder('Enter your station').fill('Lon');
  await page.getByPlaceholder('Total distance in km').click();
  await page.getByPlaceholder('Total distance in km').fill('250');
  await page.getByPlaceholder('Enter Route Number').click();
  await page.getByPlaceholder('Enter Route Number').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter Route Number').fill('81');
  await page.getByRole('button', { name: 'Create Route' }).click();
  await page.getByRole('button', { name: ' Routes' }).click();
  await page.getByRole('button', { name: ' Routes' }).click();
  await page.getByRole('link', { name: 'Create Location' }).click();
  await page.getByPlaceholder('Enter Location Name.').click();
  await page.getByPlaceholder('Enter Location Name.').fill('Polanaruwa Temple');
  await page.getByRole('button', { name: 'Create Location' }).click();
  await page.getByRole('button', { name: ' Routes' }).click();
  await page.getByRole('link', { name: 'Manage Station' }).click();
  await page.getByLabel('Create New').click();
  await page.getByPlaceholder('Enter Station Name.').click();
  await page.getByPlaceholder('Enter Station Name.').fill('Polanaruwa Station');
  await page.locator('#station-yes-button').click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});