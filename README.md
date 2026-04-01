# Playwright Testing Project

A simple Playwright project for end-to-end testing across Chromium, Firefox, and WebKit browsers.

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

Install dependencies:
```bash
npm install
```

### Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests in headed mode (see browser):**
```bash
npm run test:headed
```

**Debug tests:**
```bash
npm run test:debug
```

**Run tests with UI:**
```bash
npm run test:ui
```

**View test report:**
```bash
npm run test:report
```

## Project Structure

```
.
├── tests/                  # Test files directory
│   ├── example.spec.js    # Sample test file
│   └── fixtures/          # Test fixtures (optional)
├── playwright.config.js    # Playwright configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## Configuration

Edit `playwright.config.js` to:
- Change base URL for tests
- Configure different browsers
- Adjust timeout and retry settings
- Set up parallel execution

## Writing Tests

Tests are located in the `tests/` directory with `.spec.js` extension.

Example test structure:
```javascript
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Title');
});
```

## Documentation

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)
