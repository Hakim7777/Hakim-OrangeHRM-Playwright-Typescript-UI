import { Locator, Page } from '@playwright/test';

export class LoginPageApprentissage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async loginAsAdmin() {
    await this.usernameInput.fill('Admin');
    await this.passwordInput.fill('admin123');
    await this.loginButton.click();
  }
}
