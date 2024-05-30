import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test3.busseat.lk/sign-in');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('nimda');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('xcr967l2r9hf58zc');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Schedules' }).click();
  await page.getByRole('button', { name: ' Schedules' }).click();
  await page.getByRole('button', { name: ' Schedules' }).click();
  await page.getByRole('link', { name: 'Create Schedule' }).click();
  await page.locator('.selectize-control > .form-control').first().click();
  await page.getByText('Abi Travels').click();
  await page.getByPlaceholder('Enter the name').click();
  await page.getByPlaceholder('Enter the name').fill('Schedule1');
  await page.getByPlaceholder('Select the Bus (Bus name -').click();
  await page.getByText('Bus New - NP ND 7777 (').click();
  await page.locator('#search div').filter({ hasText: 'Select Route Fare' }).locator('div').nth(2).click();
  await page.getByText('|| Colombo-Kandy').click();
  await page.getByPlaceholder('Enter the fare').click();
  await page.getByPlaceholder('Enter the fare').fill('10');
  await page.getByLabel('Daily').check();
  await page.getByPlaceholder('Select start time.').click();
  await page.getByTitle('Pick Minute').click();
  await page.getByRole('cell', { name: '00', exact: true }).click();
  await page.getByRole('cell', { name: 'Daily Weekly' }).click();
  await page.getByPlaceholder('Select journey duration.').click();
  await page.getByRole('link', { name: ' Increment Hours' }).dblclick();
  await page.getByRole('link', { name: ' Decrement Hours' }).click({
    clickCount: 3
  });
  await page.getByRole('link', { name: ' Decrement Hours' }).click({
    clickCount: 3
  });
  await page.getByRole('link', { name: ' Increment Hours' }).click();
  await page.getByPlaceholder('Select start date.').click();
  await page.getByRole('cell', { name: '4', exact: true }).first().click();
  await page.getByPlaceholder('Select end date.').click();
  await page.getByTitle('Next Month').click();
  await page.getByRole('cell', { name: '29' }).nth(2).click();
  await page.getByLabel('Interval').click();
  await page.getByLabel('Interval').fill('1');
  await page.getByPlaceholder('Enter the create journey').click();
  await page.getByPlaceholder('Enter the create journey').fill('10');
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').fill('021456789');
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').click();
  await page.getByPlaceholder(' eg: 0771234567 or').fill('0779764512');
  await page.getByRole('button', { name: 'Generate Locations' }).click();
  await page.getByPlaceholder('Select the location').click();
  await page.getByText('Nochchiyagama').first().click();
  await page.getByRole('row', { name: 'Nochchiyagama select time  ' }).locator('span').nth(1).click();
  await page.getByRole('row', { name: 'Select the location select' }).getByPlaceholder('select time').click();
  await page.getByRole('link', { name: ' Increment Hours' }).click();
  await page.getByPlaceholder('Select the location').click();
  await page.getByText('Achuchuvelay Murugan Kovil').nth(1).click();
  await page.getByRole('button', { name: 'Create Schedule' }).click();
  await page.locator('#action_1').selectOption('DROP_OFF');
  await page.getByText('Operator Abi TravelsAbi Travels Name Select Bus (First select the operator) (').click();
  await page.getByRole('button', { name: 'Create Schedule' }).click();
  await page.locator('li').filter({ hasText: 'Sign Out' }).click();
});