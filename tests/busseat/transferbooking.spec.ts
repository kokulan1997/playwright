import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  //await page.getByRole('link', { name: ' Home Page' }).click();
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Jaff');
  await page.getByText('Jaff').click();
  await page.locator('div:nth-child(2) > .form-group > .selectize-control > .form-control').click();
  await page.getByPlaceholder('Enter your arrival station').fill('Colo');
  await page.getByText('Colombo').nth(1).click();
  await page.getByPlaceholder('Select journey date').click();
  await page.getByRole('cell', { name: '1' }).first().click();
  await page.getByRole('button', { name: 'Find Buses' }).click();
  await page.locator('li').filter({ hasText: 'Colombo Bus 1' }).getByRole('link').click();
  await page.getByRole('checkbox', { name: '2', exact: true }).click();
  await page.getByRole('button', { name: 'M', exact: true }).click();
  await page.getByRole('checkbox', { name: '30', exact: true }).click();
  await page.getByRole('button', { name: 'M', exact: true }).click();
  await page.getByRole('checkbox', { name: '31', exact: true }).click();
  await page.getByRole('button', { name: 'M', exact: true }).click();
  await page.getByPlaceholder('Enter passenger name').click();
  await page.getByPlaceholder('Enter passenger name').fill('Kokulan');
  await page.getByPlaceholder('234 5678').click();
  await page.getByPlaceholder('234 5678').fill('0779731605');
  await page.locator('.selectize-input').first().click();
  await page.getByText('Manipay Yard - 7:30 PM').click();
  await page.locator('div:nth-child(6) > .col-xs-12 > .selectize-control > .selectize-input').click();
  await page.getByText('Dehiwala - 5:45 AM').click();
  //await page.getByText('Kankesanthurai - 6:38 PM').nth(1).click();
  //await page.locator('div').filter({ hasText: /^Kankesanthurai - 6:38 PM$/ }).first().click();
  await page.getByRole('button', { name: 'Continue to pay' }).click();
  await page.getByRole('button', { name: 'Confirm and pay' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});