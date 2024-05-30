import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/');
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Ja');
  await page.locator('div').filter({ hasText: /^Jaffna$/ }).click();
  await page.getByPlaceholder('Enter your arrival station').click();
  await page.getByPlaceholder('Enter your arrival station').fill('Colo');
  await page.getByText('Colombo', { exact: true }).nth(2).click();
  await page.getByPlaceholder('Select journey date').click();
  await page.getByRole('cell', { name: '30' }).nth(1).click();
  await page.getByRole('button', { name: 'Find Buses' }).click();
});