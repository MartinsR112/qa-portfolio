const {test, expect} = require('@playwright/test');




test('User can place an order and verify it in order history', async ({page})=>
{
    const email = process.env.CLIENT_EMAIL;
    const password = process.env.CLIENT_PASSWORD;
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i = 0; i < count; ++i)
    {
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        
        await products.nth(i).locator("text = Add To Cart").click();
        break;
    }

    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("[type='button']").last().click();
    await page.locator("[class='input txt']").first().fill("444");
    await page.locator("[class='input txt']").last().fill("MARTINS MARTINS");
    await page.locator("[name='coupon']").last().fill("coupon1");
    await page.locator("select.input.ddl").first().selectOption("11");
    await page.locator("select.input.ddl").last().selectOption("10");
    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i = 0; i < optionsCount; ++i)

    {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }

    }
    await expect (page.locator(".user__name  [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("[class='btn btn-custom']").nth(1).click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(let i =0; i<await rows.count(); ++i)
    {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }

    }
    
    const orderDetails = await page.locator("[class*='col-text']").textContent();
    expect(orderId.includes(orderDetails)).toBeTruthy();


    
    


});
