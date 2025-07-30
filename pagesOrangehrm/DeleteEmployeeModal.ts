import { Locator, Page } from '@playwright/test';

export class DeleteEmployeeModal {
  readonly page: Page;
  readonly confirmDeleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmDeleteButton = page.locator('button:has-text("Yes, Delete")');
  }

  async confirmDeletion() {
    await this.confirmDeleteButton.click();
  }
}
