import { Page } from "@playwright/test";

export class HomePage {
  constructor(public page: Page) {}

  exploreBtn() {
    return this.page.getByRole("button", { name: "Explore Playground" });
  }

  async goto() {
    await this.page.goto("https://testingpg.netlify.app");
  }

  async scrollDown() {
    await this.page.mouse.wheel(0, 800);
  }

  async clickExplorePlayground() {
    await this.exploreBtn().scrollIntoViewIfNeeded();
    await this.exploreBtn().click();
  }
}
