import { expect, Locator, Page } from '@playwright/test';

export class HomePageApprentissage {
  readonly page: Page;

  // ✅ Locators
  readonly dashboardMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly avatar: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.dashboardMenu = page.locator('span:has-text("Dashboard")');
    this.pimMenu = page.locator('span:has-text("PIM")');
    this.leaveMenu = page.locator('span:has-text("Leave")');
    this.avatar = page.locator('p.oxd-userdropdown-name'); // nom utilisateur en haut à droite
    this.logoutButton = page.locator('a:has-text("Logout")');
  }

  // ✅ Méthodes de la HomePage
  async goToDashboard() {
    await this.dashboardMenu.click();
  }

  async goToPIM() {
    await this.pimMenu.click();
  }

  async goToLeave() {
    await this.leaveMenu.click();
  }

  async logout() {
    await this.avatar.click();
    await this.logoutButton.click();
  }

  async isDashboardVisible() {
    await expect(this.dashboardMenu).toBeVisible();
  }
}
