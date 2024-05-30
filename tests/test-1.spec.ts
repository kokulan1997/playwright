import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.medster.app/login');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('kokulan@3axislabs.com');
  await page.getByText('Email Address *Password *').click();
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Password');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Password@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Clinics' }).click();
  await page.getByRole('button', { name: 'Create Clinic' }).click();
  await page.getByPlaceholder('Enter your address').click();
  await page.getByPlaceholder('Enter clinic name').click();
  await page.getByPlaceholder('Enter clinic name').fill('Home Clinic ');
  await page.getByPlaceholder('Enter your address').click();
  await page.getByPlaceholder('Enter your address').fill('3792-3776 Lawrence Ave E, Scarborough, ON M1G 1P9, Canada');
  await page.locator('div:nth-child(14) > div').first().click();
  await page.getByPlaceholder('Enter phone number').click();
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('End');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').click();
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByPlaceholder('Enter phone number').press('ArrowDown');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByPlaceholder('Enter phone number').click();
  await page.getByPlaceholder('Enter phone number').press('ArrowLeft');
  await page.getByPlaceholder('Enter phone number').press('ArrowLeft');
  await page.getByPlaceholder('Enter phone number').press('ArrowLeft');
  await page.getByPlaceholder('Enter phone number').press('ArrowLeft');
  await page.getByPlaceholder('Enter phone number').press('ArrowLeft');
  await page.getByPlaceholder('Enter phone number').press('ArrowUp');
  await page.getByPlaceholder('Enter phone number').click();
  await page.getByPlaceholder('Enter phone number').press('NumLock');
  await page.getByPlaceholder('Enter phone number').fill('+1 (777) 777-77777');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});