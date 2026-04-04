import {test,expect} from '@playwright/test'
test('@smoke redbus', async ({page})=>{

await page.goto("https://www.redbus.in/")

const FromBox = await page.locator('//input[@id="srcinput" and @role="combobox"]')
await FromBox.click({force:true});
await FromBox.pressSequentially("Bhubne",{delay : 200})


})