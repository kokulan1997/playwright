import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/');
  await page.getByPlaceholder('Enter your departure station').click();
  await page.getByPlaceholder('Enter your departure station').fill('Ja');
  await page.locator('div').filter({ hasText: /^Jaffna$/ }).click();
  await page.locator('div:nth-child(2) > .form-group > .selectize-control > .form-control').click();
  await page.getByPlaceholder('Enter your arrival station').fill('Colo');
  await page.getByText('Colombo', { exact: true }).nth(2).click();
  await page.getByPlaceholder('Select journey date').click();
  await page.getByRole('cell', { name: '20', exact: true }).click();
  await page.getByRole('button', { name: 'Find Buses' }).click();
  await page.locator('li').filter({ hasText: 'Colombo Bus 1 Super Luxury (' }).getByRole('link').click();
  await page.getByRole('checkbox', { name: '3', exact: true }).click();
  await page.getByRole('button', { name: 'M' }).click();
  await page.getByPlaceholder('Enter passenger name').click();
  await page.getByPlaceholder('Enter passenger name').fill('Kokulan');
  await page.getByPlaceholder('234 5678').click();
  await page.getByPlaceholder('234 5678').fill('0779731605');
  await page.locator('.selectize-input').first().click();
  await page.getByText('Manipay Yard - 7:30 PM').click();
  await page.getByPlaceholder('Select your destination point').click();
  await page.getByText('Bampalapitty - 5:45 AM').click();
  await page.getByRole('button', { name: 'Continue to pay' }).click();
  await page.getByRole('button', { name: 'Confirm and pay' }).click();
  await page.goto('https://transaction.geniebiz.lk/664b1335ef1d306aac08b50b?');
  await page.goto('https://transaction.geniebiz.lk/664b1335ef1d306aac08b50b/paynow');
  await page.getByLabel('I agree to the terms and').check();
  await page.getByTestId('pomelopay-button').click();
  await page.locator('div').filter({ hasText: /^Visa\/Mastercard$/ }).nth(3).click();
  await page.getByPlaceholder('Name on card').click();
  await page.getByPlaceholder('Name on card').fill('KOkul');
  await page.getByPlaceholder('Card Number').click();
  await page.getByPlaceholder('Card Number').fill('5045 4545 4454 5444');
  await page.getByPlaceholder('MM/YY').click();
  await page.getByPlaceholder('MM/YY').fill('02/45');
  await page.getByPlaceholder('CVV').click();
  await page.getByPlaceholder('CVV').fill('9999');
  await page.getByPlaceholder('Card Number').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Card Number').click();
  await page.getByPlaceholder('Card Number').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Card Number').click();
});