// testsApprentissage/AddEmployeeApprentissage.spec.ts
import { test, expect } from '@playwright/test';

test('Ajouter employé Hakim Alaoui Sahraoui', async ({ page }) => {
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
  await page.waitForSelector('input[name="lastName"]');
  const first  = await page.inputValue('input[name="firstName"]');
  const middle = await page.inputValue('input[name="middleName"]');
  const last   = await page.inputValue('input[name="lastName"]');
  expect(`${first} ${middle} ${last}`).toBe('Hakim Alaoui Sahraoui');
});
