// testsApprentissage/LoginTestApprentissage.spec.ts
import { test, expect } from '@playwright/test';

test('Login et Logout Admin', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('ul.oxd-main-menu');
  const menus = await page.locator('ul.oxd-main-menu li a').allTextContents();
  expect(menus).toEqual([
    'Admin','PIM','Leave','Time',
    'Recruitment','My Info','Performance',
    'Dashboard','Directory','Maintenance',
    'Claim','Buzz'
  ]);
  await page.click('.oxd-userdropdown-name');
  await page.click('a[href="/web/index.php/auth/logout"]');
  await page.waitForSelector('button[type="submit"]');
});
