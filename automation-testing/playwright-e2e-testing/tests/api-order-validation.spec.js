const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');
const loginPayLoad = {userEmail: process.env.API_EMAIL, userPassword: process.env.API_PASSWORD};
const orderPayLoad = {"orders":[{country:"Cuba",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

let response;

test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

});

    

// create order is success
test('Order created via API is displayed correctly in the UI', async ({page})=>
{
    
    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);

    
    }, response.token );
    
    await page.goto("https://rahulshettyacademy.com/client");
   
    
    
    await page.locator("[class='btn btn-custom']").nth(1).click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(let i =0; i<await rows.count(); ++i)
    {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }

    }
    
    const orderDetails = await page.locator("[class*='col-text']").textContent();
    expect(response.orderId.includes(orderDetails)).toBeTruthy();
    

    
    


});

