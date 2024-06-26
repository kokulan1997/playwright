import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.medster.app/login');
  await page.locator('div').filter({ hasText: /^Email Address \*$/ }).nth(1).click();
  await page.getByPlaceholder('Enter your email').fill('kokulan@3axislabs.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Password@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Paycycles' }).click();
  await page.getByRole('button', { name: 'Create Paycycle' }).click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('row', { name: 'Feb 2024 CA$0.00 OPEN Edit' }).locator('span').click();
  await page.getByRole('button', { name: 'Add Transaction' }).click();
  await page.getByPlaceholder('Solo OHIP').click();
  await page.getByPlaceholder('Solo OHIP').fill('200');
  await page.getByPlaceholder('Access Bonus').click();
  await page.getByPlaceholder('Access Bonus').fill('300');
  await page.getByPlaceholder('FHO Group Number Payment').click();
  await page.getByPlaceholder('FHO Group Number Payment').fill('400');
  await page.getByPlaceholder('Third Party Payment').click();
  await page.getByPlaceholder('Third Party Payment').fill('1100');
  await page.locator('#provider').selectOption('0fc1eeb8-df4c-4a13-bc63-6fdd1016434b');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Transaction' }).click();
  await page.getByText('Solo OHIP$').click();
  await page.getByPlaceholder('Solo OHIP').fill('500');
  await page.getByPlaceholder('Access Bonus').click();
  await page.getByPlaceholder('Access Bonus').fill('600');
  await page.getByPlaceholder('FHO Group Number Payment').click();
  await page.getByPlaceholder('FHO Group Number Payment').fill('700');
  await page.getByPlaceholder('Third Party Payment').click();
  await page.getByPlaceholder('Third Party Payment').fill('80');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Transaction' }).click();
  await page.getByPlaceholder('Solo OHIP').click();
  await page.getByPlaceholder('Solo OHIP').fill('20');
  await page.getByPlaceholder('Access Bonus').click();
  await page.getByPlaceholder('Access Bonus').fill('20');
  await page.getByPlaceholder('FHO Group Number Payment').click();
  await page.getByPlaceholder('FHO Group Number Payment').fill('60');
  await page.getByPlaceholder('Third Party Payment').click();
  await page.getByPlaceholder('Solo OHIP').click();
  await page.getByPlaceholder('Third Party Payment').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('#MTable-0').getByText('View').click();
  await page.getByRole('button', { name: 'Add Transaction' }).click();
  await page.locator('div').filter({ hasText: /^Solo OHIPAccess BonusFHO Group Number Payment3rd Party PaymentOther$/ }).locator('#provider').selectOption('OTHER__OTHER');
  await page.getByPlaceholder('Split percentage').click();
  await page.getByPlaceholder('Split percentage').fill('10');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('200');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('200');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Org Trans');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Adjustment' }).click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Car wash fee');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('10');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Adjustment' }).click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Claim');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('15');
  await page.getByLabel('Adjustment included in').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Transaction' }).click();
  await page.locator('div').filter({ hasText: /^Solo OHIPAccess BonusFHO Group Number Payment3rd Party PaymentOther$/ }).locator('#provider').selectOption('OHIP__FHO_GROUP_NUMBER_PAYMENT');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('100');
  await page.getByPlaceholder('Select the Date').click();
  await page.getByLabel('Choose Sunday, January 28th,').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('div').filter({ hasText: /^Paycycles$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Paycycle Adjustments' }).click();
  await page.getByRole('button', { name: 'Add Paycycle Adjustment' }).click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Nurse Fee');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('10');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('div').filter({ hasText: /^Add Paycycle Adjustment$/ }).first().click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Maintain Fee');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('2000');
  await page.locator('div').filter({ hasText: /^Split Across Billable Providers$/ }).click();
  await page.getByLabel('Split Across Billable').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Paycycle Adjustment' }).click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Room Rent');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('20');
  await page.getByLabel('Adjustment included in').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Paycycle Adjustment' }).click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').click();
  await page.getByPlaceholder('Enter Paycycle Adjustment').fill('Party Expenses ');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('2000');
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Split Across Billable Providers$/ }).click();
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Split Across Billable Providers$/ }).click();
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Split Across Billable Providers$/ }).click();
  await page.getByLabel('Split Across Billable').check();
  await page.getByLabel('Adjustment included in').check();
  await page.getByRole('button', { name: 'Create' }).click();
  //await page.getByRole('button', { name: 'Close', exact: true }).click();
  //await page.getByRole('button', { name: 'Close Paycycle' }).click();
});