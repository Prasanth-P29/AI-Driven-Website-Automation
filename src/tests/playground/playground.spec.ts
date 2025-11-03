// src/tests/playground/explore.spec.ts
import { test } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { PlaygroundPage } from "../../pages/playground.page";

test("Go → Explore Playground → Redirect to /playground", async ({ page }) => {

  const home = new HomePage(page);
  const play = new PlaygroundPage(page);

  // 1) Go to homepage
  await home.goto();
  console.log("✅ Home page loaded");

  // 2) Scroll down
  await home.scrollDown();

  // 3) Click Explore Playground
  await home.clickExplorePlayground();
  console.log("✅ Clicked explore");

  // 4) Verify playground page
  await play.verifyPageLoaded();
  console.log("✅ Playground verified ✅");
});
