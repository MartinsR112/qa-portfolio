// @ts-check
import { defineConfig } from '@playwright/test';
import 'dotenv/config';

const config = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,
  workers: 1,

  expect: {
    timeout: 8000,
  },

  reporter: 'list',

  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});

module.exports = config;


