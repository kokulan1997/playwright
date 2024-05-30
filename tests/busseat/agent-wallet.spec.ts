import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Accounts' }).click();
  await page.getByRole('link', { name: 'Manage Agent Wallet' }).click();
  await page.getByLabel('Action', { exact: true }).click();
  await page.getByRole('row', { name: '654a2ed910c6264f69ac0de5 ABI' }).getByRole('button').click();
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('100');
  await page.getByPlaceholder('Select payment deposit date.').click();
  await page.getByRole('cell', { name: '10' }).first().click();
  await page.getByLabel('Reference').click();
  await page.getByLabel('Reference').fill('Hello 203');
  await page.getByLabel('Reference').press('Insert');
  await page.getByLabel('Reference').fill('Hello 2024');
  await page.locator('#deposit-yes-button').click();
});