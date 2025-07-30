import { test, expect } from '@playwright/test';

test('Ajouter puis modifier Hakim Alaoui Sahraoui en Smith', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.click('ul.oxd-main-menu li:has-text("PIM")');
  await page.click('button:has-text("Add")');
  await page.fill('input[name="firstName"]', 'Hakim');
  await page.fill('input[name="middleName"]', 'Alaoui');
  await page.fill('input[name="lastName"]', 'Sahraoui');
  await page.click('button[type="submit"]');
  await page.waitForSelector('input[name="firstName"]', { timeout: 15000 });
  await page.fill('input[name="lastName"]', 'Smith');
  await page.click('button:has-text("Save")');
  await page.waitForSelector('input[name="lastName"]', { timeout: 15000 });
  expect(await page.inputValue('input[name="lastName"]')).toBe('Smith');
});
