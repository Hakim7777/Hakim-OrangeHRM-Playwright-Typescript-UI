import { Locator, Page } from '@playwright/test';

export class EditEmployeePageOrangehrm {
  readonly page: Page;
  readonly editButton: Locator;
  readonly nicknameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editButton = page.locator('button:has-text("Edit")');
    this.nicknameInput = page.locator('input[name="nickName"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async editNickname(nickname: string) {
    await this.editButton.click();
    await this.nicknameInput.fill(nickname);
    await this.saveButton.click();
  }
}
