const {test, expect} = require('@playwright/test')


test("User interactions with visibility, dialogs, hover and iframe content",async({page})=>

{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on('dialog',dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    const framesPage = page.frameLocator('#courses-iframe');
    await framesPage.locator("li a[href*='lifetime-access']:visible").click(); 
    const iframeHeading = framesPage.locator(".text h2");
    await expect(iframeHeading).toBeVisible();
    await expect(iframeHeading).not.toBeEmpty();


})