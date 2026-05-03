import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

  async fillDetails(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
  }

  async continue() {
    await this.page.click('#continue');
  }

  async verifyCheckoutOverview() {
    await expect(this.page.locator('.summary_info')).toBeVisible();
  }
}