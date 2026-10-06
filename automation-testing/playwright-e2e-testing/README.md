# Playwright E2E Testing Project

## Project Overview

This project demonstrates automated end-to-end testing using **Playwright** and **JavaScript**.

The project contains UI and API-based automated tests covering different user flows, including event booking, order placement, refund eligibility, UI interactions and API order validation.

The tests are executed using Chromium and can also be run automatically through GitHub Actions.

---

## Technologies

- JavaScript
- Playwright
- Node.js
- Git & GitHub
- GitHub Actions
- REST API testing
- Environment variables

---

## Automated Test Scenarios

### Event Booking

Automates a complete event booking flow:

- Logs in to the application
- Creates a new event
- Uses a dynamically generated event date
- Finds the created event
- Books one ticket
- Verifies booking confirmation
- Verifies the booking in the user's bookings
- Confirms that the available seat count decreases after booking

---

### Order Placement

Automates an e-commerce order flow:

- Logs in to the application
- Selects a product
- Adds the product to the cart
- Completes checkout
- Places an order
- Verifies the order confirmation
- Verifies that the created order appears in the order history

---

### API Order Validation

Combines API and UI testing:

- Authenticates using an API request
- Creates an order through the API
- Retrieves the authentication token and order ID
- Injects the authentication token into browser local storage
- Opens the application
- Verifies that the API-created order appears correctly in the UI

---

### Refund Eligibility

Tests refund eligibility business rules.

Scenarios include:

- Verifying that a single-ticket booking is eligible for a refund
- Verifying that a group booking with three tickets is not eligible for a refund
- Validating booking reference information
- Validating refund result messages

---

### UI Interactions

Tests common UI interactions:

- Element visibility
- Hiding elements
- JavaScript confirmation dialogs
- Mouse hover
- iframe interaction
- Content validation inside an iframe

---

## Project Structure

```text
playwright-e2e-testing/
│
├── tests/
│   ├── api-order-validation.spec.js
│   ├── event-booking.spec.js
│   ├── order-placement.spec.js
│   ├── refund-eligibility.spec.js
│   ├── ui-interactions.spec.js
│   └── utils/
│       └── APiUtils.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md