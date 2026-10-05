# Barbora.lv Manual Testing Project

## Project Overview

This project demonstrates my manual software testing skills by testing selected functionality of the **Barbora.lv online grocery store**.

The project was created as a practical QA portfolio project and focuses on the registration, login and shopping cart functionality of the web application.

Both functional and non-functional testing were performed. The project includes test planning, test case design and execution, defect reporting, and a final testing result report.

> This is an independent testing project created for educational and portfolio purposes and is not affiliated with Barbora.lv.

---

## Testing Objectives

The main objectives of the project were to:

- Verify the correctness of the shopping cart functionality
- Validate the accuracy and reliability of the user registration process
- Validate the login functionality
- Identify and document defects
- Evaluate selected usability, performance, localization and reliability aspects of the application

---

## Test Scope

The following areas were tested:

### Registration

Testing covered:

- Registration with valid data
- E-mail format validation
- Duplicate e-mail validation
- OTP validation
- Password validation
- Phone number validation
- Name and surname validation
- Latvian diacritical character support
- Address and apartment number validation
- Registration page performance under different network conditions

### Login

Testing covered:

- Successful login with valid credentials
- Invalid e-mail formats
- Leading and trailing spaces in the e-mail address
- Incorrect passwords
- Password case sensitivity
- Error message validation
- Latvian localization of validation messages
- Login response time
- Loading indicator behaviour
- Multiple unsuccessful login attempts
- Input field usability and validation feedback

### Shopping Cart

Testing covered:

- Adding products from the product page
- Adding products from the catalogue
- Increasing and decreasing product quantity
- Manual quantity input
- Maximum quantity restrictions
- Invalid quantity input using letters and special characters
- Removing products
- Cart persistence after logout and login
- Cart persistence after changing website language
- Cart behaviour with 20 products
- Shopping cart responsiveness in mobile view

---

## Testing Approach

### Test Level

- System Testing

### Test Techniques

- Black Box Testing
- Experience-based Testing

Experience-based testing was used because detailed system requirements and supporting documentation were not available.

### Functional Testing

Functional testing focused on:

- Registration
- Login
- Shopping cart functionality

### Non-functional Testing

The following non-functional aspects were evaluated:

- Performance
- Usability
- Localization
- Reliability

---

## Test Environment

Testing was performed in the live Barbora.lv environment.

**Operating system:**
- Windows 10 64-bit

**Browser:**
- Google Chrome 142

**Browser user agent:**

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36`

Chrome DevTools was also used during testing for network performance checks and responsive/mobile viewport testing.

---

## Test Execution Results

A total of **37 test cases** were executed.

| Area | Test Cases | Passed | Not Passed |
|---|---:|---:|---:|
| Registration | 13 | 9 | 4 |
| Login | 12 | 7 | 5 |
| Shopping Cart | 12 | 11 | 1 |
| **Total** | **37** | **27** | **10** |

### Functional Testing Results

The core functionality generally performed well.

All functional login test cases passed successfully.

The shopping cart also successfully handled the tested core operations, including adding products, changing quantities, removing products and preserving cart contents after logout/login and language changes.

The main functional issues were identified in the registration process, particularly in input validation.

### Non-functional Testing Results

Several usability, localization, performance and reliability issues were identified during non-functional testing.

Registration performed successfully under both normal and slower network conditions, and a loading indicator was displayed when page loading took longer.

The login flow revealed several areas for improvement, particularly related to localization, validation feedback, usability, response time and protection against repeated unsuccessful login attempts.

The shopping cart handled 20 products without a noticeable functional problem. However, a usability issue was identified in the mobile view because the cart totals were not displayed.

---

## Defects Identified

A total of **10 defects** were documented during testing.

### Registration

Identified issues included:

- Weak e-mail format validation
- First name and last name fields do not support Latvian long vowels and diacritical marks
- Apartment number field accepts letters and words
- Apartment number field does not have an appropriate input length restriction

### Login

Identified issues included:

- Cursor is not automatically active in the first input field when the login page opens
- Invalid input does not provide sufficient validation feedback before the form is submitted
- Invalid e-mail format error message is displayed in English instead of Latvian
- Login process exceeded the defined 2-second response time during the performed test
- Account was not locked after 10 unsuccessful login attempts and no additional protection such as CAPTCHA was presented

### Shopping Cart

Identified issue:

- Cart totals are not displayed in the tested mobile view using an iPhone SE viewport of 375 × 667 px

### Defect Priority

| Priority | Number of Defects |
|---|---:|
| Medium | 4 |
| Low | 6 |
| **Total** | **10** |

No High or Critical priority defects were documented during this testing project.

---

## Key Findings

The tested core functionality of Barbora.lv generally worked successfully.

The login functionality passed all functional test cases, while the shopping cart also performed reliably in the tested desktop scenarios.

The most notable improvement areas were related to:

- Registration input validation
- Latvian localization
- Login form usability
- Login response time
- Protection against repeated unsuccessful login attempts
- Mobile shopping cart usability

One localization issue was particularly noticeable: an invalid e-mail format generated an English browser validation message while the application was being used in Latvian.

The registration process also requires improvements to support Latvian names containing diacritical marks and to apply stricter validation to the apartment number field.

---

## Test Documentation

The following testing artefacts were created as part of this project:

- [Test Plan](./test-plan/Test%20Plan%20Barbora.pdf)
- [Test Cases](./test-cases/Test%20cases.xlsx)
- [Bug Report](./bug-report/Bug%20report.xlsx)
- [Testing Result Report](./testing-result-report/Testing%20Result%20Report.pdf)

---

## Repository Structure

```text
barbora-webshop-testing/
│
├── README.md
│
├── test-plan/
│   └── Test Plan Barbora.pdf
│
├── test-cases/
│   └── Test cases.xlsx
│
├── bug-report/
│   └── Bug report.xlsx
│
└── testing-result-report/
    └── Testing Result Report.pdf
```

---


## Skills Demonstrated

This project demonstrates practical experience with:

- Manual software testing
- Test planning
- Test case design and execution
- Functional and non-functional testing
- Black box testing
- Experience-based testing
- Input validation testing
- Localization testing
- Usability testing
- Basic performance testing
- Responsive/mobile testing
- Defect identification and documentation
- Defect prioritization
- Test result analysis and reporting
- Chrome DevTools
- Git and GitHub