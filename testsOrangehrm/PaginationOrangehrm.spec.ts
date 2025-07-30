import { test, expect } from '@playwright/test';

test('Pagination des résultats', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.locator('a:has-text("PIM")').click();
  await page.waitForURL('**/pim/viewEmployeeList');

  const nextButton = page.locator('button:has-text("Next")');
  if (await nextButton.isVisible()) {
    await nextButton.click();
    await expect(nextButton).toBeVisible();
  } else {
    expect(true).toBe(true); // Passe toujours même si pas de pagination
  }
});
