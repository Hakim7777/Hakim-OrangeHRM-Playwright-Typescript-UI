import { Page, Locator } from '@playwright/test';

export class ImportPageApprentissage {
  readonly page: Page;
  readonly configurationMenu: Locator;
  readonly dataImportMenu: Locator;
  readonly downloadBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.configurationMenu = page.locator('button:has-text("Configuration")');
    this.dataImportMenu = page.locator('a:has-text("Data Import")');
    this.downloadBtn = page.locator('button:has-text("Download")');
  }

  async gotoDataImport() {
    await this.configurationMenu.click();
    await this.dataImportMenu.click();
  }

  async downloadCSVTemplate() {
    await this.downloadBtn.click();
  }
}
