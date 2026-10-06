const {test, expect} = require('@playwright/test');

const BASE_URL      = 'https://eventhub.rahulshettyacademy.com'
const USER_EMAIL    = process.env.REFUND_EMAIL;
const USER_PASSWORD = process.env.REFUND_PASSWORD; 


async function loginAndGoToBooking(page) {
await page.goto(`${BASE_URL}/login`);

await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);
await page.getByLabel("Password").fill(USER_PASSWORD);

await page.locator("#login-btn").click();

await expect(page.getByText("Browse Events →")).toBeVisible({timeout: 10000});
}


test('Single ticket booking is eligible for refund', async ({ page }) => {

await loginAndGoToBooking(page);

await page.goto(`${BASE_URL}/events`);

await page.getByTestId('event-card').first().getByTestId('book-now-btn').click();

await expect(page.getByPlaceholder('Your full name')).toBeVisible();

await page.getByPlaceholder('Your full name').fill('Martin');

await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);

await page.getByPlaceholder('+91 98765 43210').fill('+1231231231');

await page.locator('.confirm-booking-btn').click();

await expect(page.getByRole('link',({name:"View My Bookings"}))).toBeVisible();

await page.getByRole('link',({name:'View My Bookings'})).click();

await expect(page).toHaveURL(`${BASE_URL}/bookings`);

// The newest booking is displayed first in the My Bookings list

await page.getByRole('button',{name:'View Details'}).first().click();

await expect(page.getByText('Booking Information')).toBeVisible();

const bookingRef = await page.locator('.font-mono').last().innerText();

const eventTitle = await page.locator('.text-2xl').textContent();

console.log(`Booking reference: ${bookingRef}`);

console.log(`Event title: ${eventTitle}`);

expect (bookingRef.trim().charAt(0)).toBe(eventTitle.trim().charAt(0));

console.log(`Booking reference first letter: ${bookingRef.trim().charAt(0)}`);

console.log(`Event title first letter: ${eventTitle.trim().charAt(0)}`);

await page.locator('#check-refund-btn').click();

await expect(page.locator('#refund-spinner')).toBeVisible();

await expect(page.locator('#refund-spinner')).toBeHidden({timeout: 6000});

await expect(page.locator('#refund-result')).toBeVisible();

const refundResultMsg = page.locator('#refund-result');

await expect(refundResultMsg).toContainText('Eligible for refund');

await expect(refundResultMsg).toContainText('Single-ticket bookings qualify for a full refund');

console.log(await refundResultMsg.innerText());






});

test('Group ticket booking is not eligible for refund', async ({ page }) => {

await loginAndGoToBooking(page);

await page.goto(`${BASE_URL}/events`);

await page.getByTestId('event-card').first().getByTestId('book-now-btn').click();

await expect(page.getByPlaceholder('Your full name')).toBeVisible();

await page.getByRole('button',{name:'+'}).click();

await page.getByRole('button',{name:'+'}).click();

const ticketCount = page.locator('#ticket-count');

await expect(ticketCount).toHaveText('3');

await page.getByPlaceholder('Your full name').fill('Martin');

await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);

await page.getByPlaceholder('+91 98765 43210').fill('+1231231231');

await page.locator('.confirm-booking-btn').click();

await expect(page.getByRole('link',({name:"View My Bookings"}))).toBeVisible();

await page.getByRole('link',({name:'View My Bookings'})).click();

await expect(page).toHaveURL(`${BASE_URL}/bookings`);

await page.getByRole('button',{name:'View Details'}).first().click();

await expect(page.getByText('Booking Information')).toBeVisible();

const bookingRef2 = await page.locator('.font-mono').last().innerText();

const eventTitle2 = await page.locator('.text-2xl').textContent();

console.log(`Booking reference: ${bookingRef2}`);

console.log(`Event title: ${eventTitle2}`);

expect (bookingRef2.trim().charAt(0)).toBe(eventTitle2.trim().charAt(0));

console.log(`Booking reference first letter: ${bookingRef2.trim().charAt(0)}`);

console.log(`Event title first letter: ${eventTitle2.trim().charAt(0)}`);

await page.locator('#check-refund-btn').click();

await expect(page.locator('#refund-spinner')).toBeVisible();

await expect(page.locator('#refund-spinner')).toBeHidden({timeout: 6000});

await expect(page.locator('#refund-result')).toBeVisible();

const refundResultMsg2 = page.locator('#refund-result');

await expect(refundResultMsg2).toContainText('Not eligible for refund');

await expect(refundResultMsg2).toContainText('Group bookings (3 tickets) are non-refundable');

console.log(await refundResultMsg2.innerText());


});