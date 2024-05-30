import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Payment Instrument' }).click();
  await page.getByRole('button', { name: ' Payment Instrument' }).click();
  await page.getByRole('button', { name: ' Payment Instrument' }).click();
  await page.getByRole('button', { name: ' Payment Instrument' }).click();
  await page.getByRole('button', { name: ' Payment Instrument' }).click();
  await page.getByRole('link', { name: 'Payment Instrument' }).click();
  await page.getByLabel('Action', { exact: true }).click();
  await page.getByRole('row', { name: 'FYI - Card FYI IMMEDIATE 0 %' }).getByRole('button').first().click();
  await page.locator('#confirm-yes-button').click();
  await page.getByRole('row', { name: 'FYI - Card FYI IMMEDIATE 0 %' }).getByRole('button').nth(1).click();
  await page.getByPlaceholder('Enter the instrument fee').click();
  await page.getByPlaceholder('Enter the instrument fee').fill('51');
  await page.getByPlaceholder('Enter the instrument fee').press('ArrowRight');
  await page.getByPlaceholder('Enter the instrument fee').fill('5');
  await page.locator('#edit-yes-button').click();
  await page.getByRole('row', { name: 'FYI - Card FYI IMMEDIATE 5 %' }).getByRole('button').first().click();
  await page.locator('#confirm-yes-button').click();
  await page.locator('li').filter({ hasText: 'Sign Out' }).click();
});