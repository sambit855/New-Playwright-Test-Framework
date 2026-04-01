import {test,expect} from '@playwright/test'
test('Example Test', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#alertBtn").click()
await page.waitForTimeout(3000)

// setup for handing dialog box
page.on('dialog', async dialog=>{

console.log(dialog.message());
    await dialog.accept();

})
await page.locator("#alertBtn").click()
await page.waitForTimeout(3000)

});