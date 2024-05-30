import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://uat.medster.app/login');
    await page.getByPlaceholder('Enter your email').click();
    await page.getByPlaceholder('Enter your email').fill('');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('Password@123');
    await page.getByRole('button', { name: 'Sign in' }).click()
});