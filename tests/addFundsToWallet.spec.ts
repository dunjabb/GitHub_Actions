import { test } from "@playwright/test";
import fs from "fs";
const walletAddresses = JSON.parse(
  JSON.stringify(require("../tests/wallet-address.json"))
);

test("Add funds to wallet address", async ({ page }) => {
  await page.goto("https://faucet.flare.network/");
  await page.locator('(//div[contains(@class, "m-8bffd616")])[1]').click();
  await page.locator('//p[text()="Coston2"]').click();
  let successfulTransactions = 0;
  let failedTransactions = 0;
  let results: any[] = [];

  for (const address of walletAddresses) {
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="address"]').fill(address);
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    const messagePlaceholder = await page.locator('(//p[contains(@class, "Text-root")])[5]');
    const message = await messagePlaceholder.innerText();
    results.push( message);

    if (message.includes("Sent")) {
      console.log(`${message}`);
      successfulTransactions++; 
    } else if (message.includes("wait up") || message.includes("captcha")) {
      console.log(`${message}`);
      failedTransactions++;
    }
  }

  results.push(`Successful transfer: ${successfulTransactions} \nFailed transfer: ${failedTransactions}`);
  const date = new Date().toDateString();
  const fileData = `Date: ${date}\n${results.join("\n")}`;
    fs.writeFile("results.txt", fileData, (error) => {
    if (error) {
      console.error("An error occurred while writing to the file:", error);
    }
  });
});
