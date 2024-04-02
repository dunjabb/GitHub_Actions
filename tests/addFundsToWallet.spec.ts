import { test } from "@playwright/test";
const walletAddresses = JSON.parse(
  JSON.stringify(require("../tests/wallet-address.json"))
);

test("Add funds to wallet address", async ({ page }) => {
  await page.goto('https://faucet.flare.network/');
  await page
    .locator('//div[@class="m-8bffd616 mantine-Flex-root __m__-Rardmullfdla"]')
    .click();
  await page.locator('//p[text()="Coston2"]').click();

  for (const address of walletAddresses) {
    await page.pause();
    await page.locator('//input[@id="address"]').fill(address);
    await page.pause();
    await page.locator('//button[@type="submit"]').click();
    await page.pause();
  }
});
