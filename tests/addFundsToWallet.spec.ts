import { expect, test } from "@playwright/test";
const walletAddresses = JSON.parse(
  JSON.stringify(require("../tests/wallet-address.json"))
);

test("Add funds to wallet address", async ({ page }) => {
  await page.goto("https://faucet.flare.network/");
  await page.locator('//div[@class="m-8bffd616 mantine-Flex-root __m__-Rardmullfdla"]').click();
  await page.locator('//p[text()="Coston2"]').click();
  let successfulTransactions = 0;
  let failedTransactions = 0;

  for (const address of walletAddresses) {
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="address"]').fill(address);
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    const messagePlaceholder = await page.locator('(//p[@class="mantine-focus-auto m-b6d8b162 mantine-Text-root"])[5]');
    const message = await messagePlaceholder.innerText();

    if (message === `Sent 10 C2FLR to ${address}.`) {
      console.log(`Sent 10 C2FLR to ${address}.`);
      successfulTransactions++;
    } else if (message === "You have received funds too recently, please wait up to 24 hours before trying again")
    {
      console.log("You have received funds too recently, please wait up to 24 hours before trying again");
      failedTransactions++;
    }
  }
  console.log(`Number of addresses that successfully received FLARE: ${successfulTransactions}`);
  console.log(`Number of addresses with failed FLARE transaction: ${failedTransactions}`
  );
});
