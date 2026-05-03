import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Full E2E flow @smoke', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // Login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // Inventory
  await inventory.verifyPageLoaded();
  await inventory.addFirstItemToCart();
  await inventory.goToCart();

  // Cart
  await cart.verifyItemPresent();
  await cart.clickCheckout();

  // Checkout
  await checkout.fillDetails('Ashok', 'Sharma', '132001');
  await checkout.continue();
  await checkout.verifyCheckoutOverview();
});