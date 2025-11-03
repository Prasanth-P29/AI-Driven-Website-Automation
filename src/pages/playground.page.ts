import { expect, Page } from "@playwright/test";

export class PlaygroundPage {
  constructor(public page: Page) {}

  get exploreBtn() {
    return this.page.getByRole("button", { name: "Explore Playground" });
  }

  async goto() {
    await this.page.goto("https://testingpg.netlify.app/playground");
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/https:\/\/testingpg\.netlify\.app\/playground/);
  }

  async clickStartTesting(cardName: string) {
    console.log("📌 Finding card:", cardName);

    const card = this.page.getByText(cardName, { exact: false });
    await card.scrollIntoViewIfNeeded();

    console.log("✅ Card located, clicking Start Testing");

    const btn = card.locator("xpath=../../..").getByRole("button", {
      name: "Start Testing",
    });

    await btn.click();
    console.log("✅ Start Testing clicked ✅");
  }
}
