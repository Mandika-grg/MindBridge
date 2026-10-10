import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'
const TEST_EMAIL = 'qa.user@mindbridge.local'
const TEST_PASSWORD = 'admin12345'

test('Account Update happy path', async ({ page }) => {
  await page.goto('http://localhost:3000/login')
  // 2. Sign in
  await page.getByLabel(/email/i).fill('qa.user@mindbridge.local');
  await page.getByLabel(/password/i).fill('admin12345');
  await page.getByRole('button', { name: /login/i }).click();

  await page.waitForURL('http://localhost:3000/dashboard');

await page.goto('/account');

await page.getByTestId('account-region').selectOption('APAC');

await page.getByTestId('account-save-btn').click();

await expect(page.getByTestId('account-save-success')).toBeVisible();
  
  throw new Error('Complete the TODO steps in account_update.spec.js')
})