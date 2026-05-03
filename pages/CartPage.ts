import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

  async verifyItemPresent() {
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }

  async clickCheckout() {
    await this.page.click('#checkout');
  }
}