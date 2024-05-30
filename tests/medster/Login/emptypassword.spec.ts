import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://uat.medster.app/login');
    await page.getByPlaceholder('Enter your email').click();
    await page.getByPlaceholder('Enter your email').fill('vithursiha@3axislabs.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('');
    await page.getByRole('button', { name: 'Sign in' }).click()
});