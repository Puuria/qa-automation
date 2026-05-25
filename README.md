# Restaurant Search Automation Assignment

This repository contains an automated test project for the assignment requirements.

## Assignment Coverage

### Part 1: Basic Assertions

The test opens the Wikipedia homepage and asserts:

- The page title contains `Wikipedia`
- The main Wikipedia logo/text area is visible
- The search input is visible
- The search button is visible

Test file:

```text
tests/basic-assertions.spec.js
```

### Part 2: Search Scenario — Restaurant Search

The test opens TripAdvisor, searches for `Restaurants`, and asserts that at least one visible result or page element contains restaurant-related text.

Test file:

```text
tests/restaurant-search.spec.js
```

## Tools and Frameworks Used

- JavaScript
- Playwright
- Playwright Test Runner

I chose Playwright because it supports modern browser automation, reliable auto-waiting, strong assertions, screenshots, traces, and clean test structure with minimal setup.

## Project Structure

```text
restaurant-search-playwright-assignment/
├── tests/
│   ├── basic-assertions.spec.js
│   └── restaurant-search.spec.js
├── artifacts/
│   └── screenshots/
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

Make sure Node.js is installed.

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## How to Run Tests

Run all tests:

```bash
npm test
```

Run tests in headed browser mode:

```bash
npm run test:headed
```

View the HTML report after execution:

```bash
npm run report
```

## Test Artifacts

Playwright is configured to capture:

- Screenshots on failure
- Trace files on first retry
- Video on failure
- HTML test report

The restaurant search test also saves a screenshot here:

```text
artifacts/screenshots/restaurant-search-results.png
```

## Assumptions and Limitations

- Public websites can change their UI, DOM structure, cookie banners, or bot-detection behavior.
- TripAdvisor may show different layouts depending on location, browser state, or A/B testing.
- The restaurant search assertion uses flexible text matching to keep the test robust against minor UI changes.
- For a real production test suite, a more stable test environment or controlled test data would be preferred.

## Improvements With More Time

With more time, I would improve this project by:

- Adding page object models for better maintainability
- Handling cookie banners more explicitly
- Running tests across multiple browsers
- Adding CI/CD execution through GitHub Actions
- Adding more detailed assertions for result cards, names, ratings, and locations
- Adding retry-safe network waits or API-level validation where possible
