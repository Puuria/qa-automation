const { test, expect } = require('@playwright/test');

test.describe('Part 2: Restaurant Search Scenario', () => {
  test('search for Restaurants and verify at least one restaurant result appears', async ({ page }) => {
    await page.goto('https://www.tripadvisor.com/');

    const searchInput = page.locator(
      'input[type="search"], input[name="q"], input[placeholder*="Search"]'
    ).first();

    await expect(searchInput).toBeVisible();
    await searchInput.fill('Restaurants');
    await searchInput.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    const restaurantResult = page.getByText(/restaurant|restaurants/i).first();
    await expect(restaurantResult).toBeVisible();

    await page.screenshot({
      path: 'artifacts/screenshots/restaurant-search-results.png',
      fullPage: true
    });
  });
});
