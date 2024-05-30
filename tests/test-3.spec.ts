import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/');
  await page.getByRole('link', { name: 'BusSeat.lk logo' }).click();
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Ja');
  await page.locator('div').filter({ hasText: /^Jaffna$/ }).click();
  await page.locator('div:nth-child(2) > .form-group > .selectize-control > .form-control').click();
  await page.getByPlaceholder('Enter your arrival station').fill('Colo');
  await page.getByText('Colombo', { exact: true }).nth(2).click();
  await page.getByPlaceholder('Select journey date').click();
  await page.getByRole('cell', { name: '27' }).click();
  await page.getByRole('button', { name: 'Find Buses' }).click();
  await page.locator('li').filter({ hasText: 'JD COl (Morning) Super Luxury' }).getByRole('link').click();
  await page.getByRole('checkbox', { name: '19' }).click();
  await page.getByRole('button', { name: 'M' }).click();
  await page.getByPlaceholder('Enter passenger name').click();
  await page.getByPlaceholder('Enter passenger name').fill('Kokulan');
  await page.getByPlaceholder('234 5678').click();
  await page.getByPlaceholder('234 5678').fill('0779731605');
  await page.getByPlaceholder('user@domain.com').click();
  await page.getByPlaceholder('user@domain.com').fill('kokulan13axislabs.com');
  await page.getByPlaceholder('Select your boarding point').click();
  await page.getByText('Inuvil Periya Pallikodam - 3:').click();
  await page.getByPlaceholder('Select your destination point').click();
  await page.getByText('Puttalam - 9:30 PM').click();
  await page.getByRole('button', { name: 'Continue to pay' }).click();
});