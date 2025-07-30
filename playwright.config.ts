import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'testsOrangehrm',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  retries: 1,
 reporter: [
  ['list'],
  ['html'],
  ['allure-playwright'],
],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
