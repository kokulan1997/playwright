import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.locator('div').filter({ hasText: 'Forgot password?' }).nth(4).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Users' }).click();
  await page.getByRole('link', { name: 'Manage User' }).click();
  await page.getByLabel('Action', { exact: true }).click();
  await page.getByRole('row', { name: 'javibc ACTIVE ROLE_AGENT 2020' }).getByRole('button').nth(3).click();
  await page.locator('#reset-yes-button').click();
  await page.getByRole('row', { name: 'javibc ACTIVE ROLE_AGENT 2020' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('row', { name: 'rskbb ACTIVE ROLE_AGENT 2019-' }).getByRole('button').first().click();
  await page.getByRole('row', { name: 'rskbb SUSPENDED ROLE_AGENT' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});