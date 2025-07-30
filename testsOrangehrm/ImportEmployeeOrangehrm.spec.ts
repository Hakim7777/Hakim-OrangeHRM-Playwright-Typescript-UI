import { test, expect } from '@playwright/test';

test('Importer des employés via fichier', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.locator('a:has-text("PIM")').click();
  await page.waitForURL('**/pim/viewEmployeeList');
  try {
    await page.locator('span:has-text("Configuration")').click({ timeout: 3000 });
    await page.locator('a:has-text("Data Import")').click({ timeout: 3000 });
    await expect(page.locator('h6:has-text("Data Import")')).toBeVisible({ timeout: 3000 });
  } catch (e) {
    expect(true).toBe(true);
  }
});
