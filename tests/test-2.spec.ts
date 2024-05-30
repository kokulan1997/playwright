import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.medster.app/login');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('kokulan@3axislabs.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Password@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Clinics' }).click();
  await page.getByRole('button', { name: 'Create Clinic' }).click();
  await page.getByPlaceholder('Enter your address').click();
  await page.getByPlaceholder('Enter clinic name').click();
  await page.getByPlaceholder('Enter clinic name').fill('kokkko');
  await page.getByPlaceholder('Enter your address').click();
  await page.getByPlaceholder('Enter your address').fill('Kand');
  await page.getByPlaceholder('Enter your address').press('ArrowDown');
  await page.getByPlaceholder('Enter your address').press('ArrowDown');
  await page.getByPlaceholder('Enter your address').press('Enter');
  await page.getByPlaceholder('Enter phone number').click();
  await page.getByPlaceholder('Enter phone number').fill('+1 (444) 444-44444');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});