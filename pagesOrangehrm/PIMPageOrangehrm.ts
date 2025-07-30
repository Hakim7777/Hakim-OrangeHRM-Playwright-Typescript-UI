import { Locator, Page } from '@playwright/test';

export class PIMPageApprentissage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly employeeNameSearch: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.locator('button:has-text("Add")');
    this.employeeNameSearch = page.locator('input[placeholder="Type for hints..."]');
    this.searchButton = page.locator('button:has-text("Search")');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async searchEmployee(name: string) {
    await this.employeeNameSearch.fill(name);
    await this.searchButton.click();
  }
}
