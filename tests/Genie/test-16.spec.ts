//import { test, expect } from '@playwright/test';

//test('test', async ({ page }) => {
//await page.goto('https://www.google.com/search?q=test3.busseat.l&oq=test3.busseat.l&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDcwNzNqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
//});
const { test, expect } = require('@playwright/test');

// Replace with your actual booking page URL
const bookingPageUrl = 'https://test3.busseat.lk/seats/66263dc9b3e26e201638bf38';

test.describe('Booking functionality', () => {
  test('should not create booking with missing required fields', async ({ page }) => {
    await page.goto(bookingPageUrl);

    // Click on submit button without entering any details
    await page.click('#find-buses');

    // Expect error messages for missing fields
    await expect(page).toHaveLocator('#name-error');
    await expect(page).toHaveLocator('#email-error');
    // Add locators for other required fields

    // Additional assertions for specific error messages (optional)
  });

  test('should not create booking with invalid date', async ({ page }) => {
    await page.goto(bookingPageUrl);

    // Fill in booking details with an invalid date (e.g., past date)
    await page.fill('#date', '2023-05-20'); // Example: Past date
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    // ... fill other booking details

    await page.click('#submit-booking');

    // Expect error message for invalid date
    await expect(page).toHaveLocator('#date-error');
  });

  // Add more test cases for booking conflicts, payment failures, etc. (refer to previous response for details on these scenarios)
});