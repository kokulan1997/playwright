import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/');
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Ja');
  await page.locator('div').filter({ hasText: /^Jaffna$/ }).click();
  await page.getByPlaceholder('Enter your arrival station').click();
  await page.getByPlaceholder('Enter your arrival station').fill('Colo');
  await page.getByPlaceholder('Enter your arrival station').press('ArrowDown');
  await page.getByPlaceholder('Enter your arrival station').press('Enter');
  await page.getByPlaceholder('Select journey date').click();
  await page.getByRole('cell', { name: '10' }).first().click();
  await page.getByRole('button', { name: 'Find Buses' }).click();
  await page.locator('li').filter({ hasText: 'Colombo Bus 1 Super Luxury (' }).getByRole('link').click();
  await page.getByRole('checkbox', { name: '2', exact: true }).click();
  await page.getByRole('button', { name: 'M' }).click();
  await page.getByPlaceholder('Enter passenger name').click();
  await page.getByPlaceholder('Enter passenger name').fill('Kokulan');
  await page.getByPlaceholder('234 5678').click();
  await page.getByPlaceholder('234 5678').fill('0779731605');
  await page.locator('.selectize-input').first().click();
  await page.getByText('Manipay Yard - 7:30 PM').click();
  await page.getByPlaceholder('Select your destination point').click();
  await page.getByText('Dehiwala - 5:45 AM').click();
  await page.getByLabel('Reuse Credits').check();
  await page.getByPlaceholder('Reuse Token').click();
  await page.getByPlaceholder('Reuse Token').fill('sQ2XKzeZeT');
  await page.getByPlaceholder('Pin').click();
  await page.getByPlaceholder('Pin').fill('087159');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Continue to pay' }).click();
});