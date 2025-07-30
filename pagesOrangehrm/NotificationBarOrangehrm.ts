import { Locator, Page } from '@playwright/test';

export class NotificationBarApprentissage {
  readonly page: Page;
  readonly notificationIcon: Locator;
  readonly notificationPopup: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notificationIcon = page.locator('i.oxd-icon.bi-bell');
    this.notificationPopup = page.locator('div.oxd-dropdown-menu');
    this.closeButton = page.locator('button[aria-label="Close"]');
  }

  async openNotifications() {
    await this.notificationIcon.click();
  }

  async closeNotifications() {
    await this.closeButton.click();
  }
}
