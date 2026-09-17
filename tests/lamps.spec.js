import { test,chromium ,expect} from '@playwright/test';

test.only('first test',async ({browser,page})=>
{

await page.goto("https://kapoorlampshades.com/")
console.log(await page.title())
await expect(page).toHaveTitle("Kapoor Lamp Shades | Buy Luxury Designer Lighting & Premium Home Décor – KAPOOR-E-ILLUMINATIONS PRIVATE LIMITED");
const textContent = await page.locator("//header//summary|//header/a|//a[contains(text(),'Chan')]|//a[contains(text(),'Sale')]").allTextContents();
console.log(textContent);


await page.waitForLoadState('networkidle');
await page.locator("(//a[contains(text(),'Chandel')])[1]").click();

const chandelierTitle = await page.locator("h1").textContent();
var text=chandelierTitle.trim();
const val="CHANDELIERS";

expect(text).toBe("CHANDELIERS");
await expect(page.locator("h1")).toContainText("CHANDELIERS");
console.log(await page.locator("//div[contains(text(),'products')]").innerText());
const menu=page.locator("//summary[contains(text(),'Wall Lights')][1]");
await menu.hover({force: true,timeout: 5000});


console.log(await page.locator("//summary[contains(text(),'Wall Lights')]//following::ul[1]//a").allInnerTexts());
await page.locator("//span[text()='Availability']//following::span[1]").click({ force: true });
await page.locator("(//span[@class='tag__text'])[1]/../..//span[contains(@class,'checkbox')]").click({ force: true });
console.log(await page.locator(".tag__text").allTextContents());
console.log(await page.locator("//span[@class='tag__text']/..").allTextContents());
// await page.locator("//span[contains(.,'Account')]").click();

// console.log(await page.title())
// await page.locator("(//label[contains(text(),'Email')])[1]//following-sibling::input[1]").fill('hello@gmail.com')


// await page.keyboard.press('Escape');
// await page.locator("//button[contains(text(),'Sign In')]").click();
// await page.keyboard.press('Escape');
// console.log(await page.locator("//div[@class='errors']//li").textContent())

})
