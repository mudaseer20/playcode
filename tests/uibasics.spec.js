import { test,chromium ,expect} from '@playwright/test';

test.only('first test',async ({browser,page})=>
{

await page.goto("https://kapoorlampshades.com/")
console.log(await page.title())
await expect(page).toHaveTitle("Kapoor Lamp Shades | Buy Luxury Designer Lighting & Premium Home Décor – KAPOOR-E-ILLUMINATIONS PRIVATE LIMITED");

})

test('second test',async ({browser  })=>
{
    browser = await chromium.launch();
const context = await browser.newContext();
const page=await context.newPage()
await page.goto("https://developer-qa.icertis.com")
await page.locator("//button[contains(.,'Login')]").click()
await page.locator('input').fill("sa_idn2@icertisclmaad.onmicrosoft.com")
await page.locator("//span[contains(text(),'Next')]").click()
await page.locator("input[type='email']").fill("sa_idn2@icertisclmaad.onmicrosoft.com")
await page.locator("input[type='submit']").click()
await page.locator("input[type='password']").fill("24Jun@2026IDN1")    
await page.locator("input[type='submit']").click()
await page.locator("input[type='submit']").press('Enter');
const text = await page.locator(".pss-block-header").textContent();
const title = await page.title();
console.log(title);
console.log(text);


})