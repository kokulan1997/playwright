import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/');
  await page.getByRole('link', { name: 'Booking Cancel' }).click();
  await page.getByPlaceholder('Enter the booking token').click();
  await page.getByPlaceholder('Enter the booking token').fill('sQ2XKzeZeT');
  await page.frameLocator('iframe[name="a-9vssfq1l1qtj"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByText('Booking Cancellation Step1').click();
  await page.getByPlaceholder('Enter the OTP code').click();
  await page.getByPlaceholder('Enter the OTP code').fill('764158');
  await page.getByRole('button', { name: 'Verify OTP' }).click();
  await page.getByRole('checkbox', { name: '21' }).click();
  await page.getByLabel('Cancel And Reuse').check();
  await page.getByPlaceholder('Enter the reason').click();
  await page.getByPlaceholder('Enter the reason').fill('Not intrested');
  await page.getByRole('button', { name: 'View Cancellation Charge' }).click();
  await page.getByRole('button', { name: 'Confirm Cancellation' }).click();
  await page.getByRole('link', { name: ' Book Again' }).click();
});