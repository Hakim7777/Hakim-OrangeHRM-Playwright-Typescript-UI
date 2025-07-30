import { Page, Locator } from '@playwright/test';

export class ExportPageApprentissage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly exportBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimMenu = page.locator('a:has-text("PIM")');
    this.exportBtn = page.locator('button:has-text("Export")');
  }

  async gotoPIM() {
    await this.pimMenu.click();
    await this.page.waitForURL('**/pim/viewEmployeeList');
  }

  async exportEmployeeList() {
    await this.exportBtn.click();
  }
}
