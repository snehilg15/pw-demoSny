import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(public page: Page) {}

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addFirstItemToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}