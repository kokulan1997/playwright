import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.sharonbuslines.ca/');
  await page.goto('https://test.sharonbuslines.ca/quote');
  await page.getByPlaceholder('Enter your company name').click();
  await page.getByPlaceholder('Enter your company name').fill('The Generation X');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('Shawn Michels');
  await page.getByPlaceholder('Enter your phone number, ex +').click();
  await page.getByPlaceholder('Enter your phone number, ex +').fill('+94779731605');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('vijay@3axislabs.com');
  await page.getByPlaceholder('Enter your address').click();
  await page.getByPlaceholder('Enter your address').fill('61 Drake Street Markham Ontario');
  await page.getByPlaceholder('Enter your city').dblclick();
  await page.getByPlaceholder('Enter your city').fill('Markham');
  await page.getByPlaceholder('Enter your state').click();
  await page.getByPlaceholder('Enter your state').fill('Ontario');
  await page.getByPlaceholder('Enter postal code').click();
  await page.getByPlaceholder('Enter postal code').fill('L32 7K6');
  await page.getByPlaceholder('Enter number of passengers').click();
  await page.getByPlaceholder('Enter number of passengers').fill('40');
  await page.getByLabel('Round trip').check();
  await page.getByPlaceholder('Enter depart from').click();
  await page.getByPlaceholder('Enter depart from').fill('MArkham ');
  await page.getByPlaceholder('Enter depart from').click();
  await page.getByPlaceholder('Enter depart from').fill('Markham Town Hall');
  await page.getByPlaceholder('Enter destination').click();
  await page.getByPlaceholder('Enter destination').fill('Gotham City');
  await page.locator('#departure-date').fill('2024-03-11');
  await page.locator('#destination-date').fill('2024-03-13');
  await page.locator('#departure-time').click();
  await page.locator('#departure-time').fill('11:27');
  await page.locator('#destination-time').click();
  await page.locator('#destination-time').fill('11:27');
  await page.getByPlaceholder('Enter your note here...').click();
  await page.getByPlaceholder('Enter your note here...').fill('https://test.sharonbuslines.ca/');
  await page.getByPlaceholder('Enter your note here...').click();
  await page.getByPlaceholder('Enter your note here...').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter your note here...').click();
  await page.getByPlaceholder('Enter your note here...').fill('Gotham Night');
  await page.frameLocator('iframe[name="a-dr0p022zfiau"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});