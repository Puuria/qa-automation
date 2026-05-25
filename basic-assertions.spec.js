const { test, expect } = require('@playwright/test');

test.describe('Part 1: Basic Assertions', () => {
  test('assert page title and visible elements on Wikipedia homepage', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');

    // Assert page title
    await expect(page).toHaveTitle(/Wikipedia/);

    // Assert two additional visible elements
    await expect(page.locator('.central-textlogo-wrapper')).toBeVisible();
    await expect(page.locator('input#searchInput')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});
