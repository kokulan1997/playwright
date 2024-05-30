import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.sharonbuslines.ca/');
  await page.locator('#menu').getByRole('link', { name: 'Get quote now' }).click();
  await page.getByPlaceholder('Enter your First Name').click();
  await page.getByPlaceholder('Enter your First Name').fill('Raju Bhai');
  await page.getByPlaceholder('Enter your Last Name').click();
  await page.getByPlaceholder('Enter your Last Name').fill('Peter');
  await page.getByPlaceholder('Enter your phone number, ex +').click();
  await page.getByPlaceholder('Enter your phone number, ex +').fill('+940779731605');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('kokulan@3axislabs.com');
  await page.getByPlaceholder('Enter your Address Line 1').click();
  await page.getByPlaceholder('Enter your Address Line 1').fill('New South Wales');
  await page.getByPlaceholder('Enter your Address Line 2').click();
  await page.getByPlaceholder('Enter your Address Line 2').fill('Sydney');
  await page.getByPlaceholder('Enter your city').click();
  await page.getByPlaceholder('Enter your city').fill('Sydney');
  await page.getByPlaceholder('Enter your state').click();
  await page.getByPlaceholder('Enter your state').fill('New South Wales');
  await page.getByPlaceholder('Enter your postal code').click();
  await page.getByPlaceholder('Enter your postal code').fill('L1M 1B6');
  await page.getByPlaceholder('Enter Number of passengers').click();
  await page.getByPlaceholder('Enter Number of passengers').fill('40');
  await page.getByLabel('Round trip').check();
  await page.getByPlaceholder('Enter Depart from').click();
  await page.getByPlaceholder('Enter Depart from').fill('A');
  await page.getByPlaceholder('Enter Pickup location').click();
  await page.getByPlaceholder('Enter Pickup location').fill('A1');
  await page.locator('#depart-from-date').fill('2024-01-29');
  await page.locator('#depart-from-time').click();
  await page.locator('#depart-from-time').fill('16:05');
  await page.locator('#pickup-location-date1').fill('2024-01-29');
  await page.locator('#pickup-location-time1').click();
  await page.locator('#pickup-location-time1').fill('16:05');
  await page.locator('#add-another-pickup-location').click();
  await page.getByRole('textbox', { name: 'Enter Pickup location' }).click();
  await page.getByRole('textbox', { name: 'Enter Pickup location' }).fill('A2');
  await page.locator('input[name="pickup-locations\\[1\\]\\.date"]').fill('2024-01-29');
  await page.locator('input[name="pickup-locations\\[1\\]\\.time"]').click();
  await page.locator('input[name="pickup-locations\\[1\\]\\.time"]').fill('16:05');
  await page.getByText('Add another pickup location').click();
  await page.locator('#pickup-location-name2').click();
  await page.locator('#pickup-location-name2').fill('A3');
  await page.locator('#pickup-location-date2').fill('2024-01-29');
  await page.locator('#pickup-location-time2').click();
  await page.locator('#pickup-location-time2').fill('16:05');
  await page.getByText('Add another pickup location').click();
  await page.locator('#pickup-location-name3').click();
  await page.locator('#pickup-location-name3').fill('A4');
  await page.locator('#pickup-location-date3').fill('2024-01-29');
  await page.locator('#pickup-location-time3').click();
  await page.locator('#pickup-location-time3').fill('16:05');
  await page.getByText('Add another pickup location').click();
  await page.locator('#pickup-location-name4').click();
  await page.locator('#pickup-location-name4').fill('A5');
  await page.locator('#pickup-location-date4').fill('2024-01-29');
  await page.locator('#pickup-location-time4').click();
  await page.locator('#pickup-location-time4').fill('16:06');
  await page.getByPlaceholder('Enter Return to').click();
  await page.getByPlaceholder('Enter Return to').fill('B');
  await page.locator('#return-to-date').fill('2024-01-29');
  await page.locator('#return-to-time').click();
  await page.locator('#return-to-time').fill('13:06');
  await page.getByPlaceholder('Enter Drop off location').click();
  await page.getByPlaceholder('Enter Drop off location').fill('B1');
  await page.locator('#drop-off-location-date1').fill('2024-01-29');
  await page.locator('#drop-off-location-time1').click();
  await page.locator('#drop-off-location-time1').fill('16:06');
  await page.locator('#return-to-time').click();
  await page.locator('#return-to-time').click();
  await page.locator('#return-to-time').dblclick();
  await page.locator('#return-to-time').click();
  await page.locator('div:nth-child(18) > .flex').click();
  await page.locator('#return-to-time').click();
  await page.locator('#return-to-time').fill('16:06');
  await page.locator('#add-another-drop-off-location').click();
  await page.getByRole('textbox', { name: 'Enter Drop off location' }).click();
  await page.getByRole('textbox', { name: 'Enter Drop off location' }).fill('B2');
  await page.locator('input[name="drop-off-locations\\[1\\]\\.date"]').fill('2024-01-22');
  await page.locator('input[name="drop-off-locations\\[1\\]\\.time"]').click();
  await page.locator('input[name="drop-off-locations\\[1\\]\\.time"]').fill('16:06');
  await page.getByText('Add another drop off location').click();
  await page.locator('#drop-off-location-name2').click();
  await page.locator('#drop-off-location-name2').fill('B3');
  await page.locator('#drop-off-location-date2').fill('2024-01-29');
  await page.locator('#drop-off-location-time2').click();
  await page.locator('#drop-off-location-time2').fill('16:06');
  await page.locator('#add-another-drop-off-location').click();
  await page.locator('#drop-off-location-name3').click();
  await page.locator('#drop-off-location-name3').fill('B4');
  await page.locator('#drop-off-location-date3').fill('2024-01-29');
  await page.locator('#drop-off-location-time3').click();
  await page.locator('#drop-off-location-time3').fill('16:07');
  await page.getByText('Add another drop off location').click();
  await page.locator('#drop-off-location-name4').click();
  await page.locator('#drop-off-location-name4').fill('B5');
  await page.locator('#drop-off-location-date4').fill('2024-01-22');
  await page.locator('#drop-off-location-time4').click();
  await page.locator('#drop-off-location-time4').fill('16:07');
  await page.getByText('Add another drop off location').click();
  await page.locator('#drop-off-location-name5').click();
  await page.locator('#drop-off-location-name5').fill('B6');
  await page.locator('#drop-off-location-date5').fill('2024-01-29');
  await page.locator('#drop-off-location-time5').click();
  await page.locator('#drop-off-location-time5').fill('16:07');
  await page.getByPlaceholder('Enter your note here...').click();
  await page.getByPlaceholder('Enter your note here...').fill('As the final stop approaches, a bittersweet feeling settles in. Farewells are exchanged, paths diverge, and the bus continues its journey, carrying a new set of stories within its metallic shell. The bus, a silent observer, hums on, a vital artery in the lifeblood of the city, connecting countless lives in its tireless dance through the urban jungle');
  await page.frameLocator('iframe[name="a-pxn1n1ys9xgb"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
});