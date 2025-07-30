import { Locator, Page } from '@playwright/test';

export class SearchEmployeePage {
  readonly page: Page;
  readonly employeeNameInput: Locator;
  readonly employmentStatusSelect: Locator;
  readonly includeSelect: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]');
    this.employmentStatusSelect = page.locator('div.oxd-select-wrapper:has(label:text("Employment Status"))');
    this.includeSelect = page.locator('div.oxd-select-wrapper:has(label:text("Include"))');
    this.searchButton = page.locator('button:has-text("Search")');
  }

  async searchWithFilters(name: string) {
    await this.employeeNameInput.fill(name);
    await this.searchButton.click();
  }
}
