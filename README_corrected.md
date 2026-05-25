# Restaurant Search Automation Assignment

This repository contains an automated test project developed using Playwright and JavaScript to satisfy the assignment requirements.

## Assignment Coverage

### Part 1: Basic Assertions

This test opens the Wikipedia homepage and validates that key UI elements are displayed correctly:

- Page title contains **Wikipedia**
- Main Wikipedia logo/text area is visible
- Search input field is visible
- Search button is visible

**Test File**

basic-assertions.spec.js

### Part 2: Restaurant Search Scenario

This test opens TripAdvisor, searches for **Restaurants**, and verifies that at least one visible result or page element contains restaurant-related content.

**Test File**

restaurant-search.spec.js

## Technologies Used

- JavaScript
- Playwright
- Playwright Test Runner
- Node.js

## Project Structure

qa-automation-resume/
├── basic-assertions.spec.js
├── restaurant-search.spec.js
├── playwright.config.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md

## Installation

npm install

npx playwright install

## Running the Tests

npm test

npm run test:headed

npm run report

## Reporting and Artifacts

- Screenshots on failure
- Trace files on first retry
- Video recordings on failure
- HTML execution reports

## Future Enhancements

- Implement Page Object Model (POM)
- Multi-browser execution
- GitHub Actions CI/CD integration
- Additional validations

## Author

Puria Ebrahimzadeh
QA Automation Engineer
