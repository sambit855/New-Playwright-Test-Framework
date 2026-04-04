import {test,expect} from '@playwright/test'
test("@regression Paytm Flites", async ({page})=>{

    //Navigate to url
await page.goto("https://tickets.paytm.com/flights")

//select round trip
await page.locator("label#rt").check()

//select from 

await page.locator("#srcCode").click();
await page.getByPlaceholder('Source').pressSequentially("bhub", { delay: 300 });

// ✅ Wait for suggestions to appear
const sugessionsOptions = page.locator(".fpRYu");
await sugessionsOptions.first().waitFor();

const suggestioncount = await sugessionsOptions.count();

for (let i = 0; i < suggestioncount; i++) {
  const text = (await sugessionsOptions.nth(i).textContent())?.trim();

  console.log(text); // ✅ debug

  if (text && text.includes('Bhubaneshwar, Odisha, India')) {
    await sugessionsOptions.nth(i).click();
    break;
  }
}







})