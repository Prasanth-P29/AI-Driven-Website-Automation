import { test } from "@playwright/test";
import { PlaygroundPage } from "../../pages/playground.page";
import { UIElementsPage } from "../../pages/uiElements.page";

test.describe("UI Elements Lab", () => {

  test("Scroll → Click Start Testing → Open UI Elements → Test form", async ({ page }) => {

    const playground = new PlaygroundPage(page);
    const ui = new UIElementsPage(page);

    // ✅ 1) Go to main playground
    await test.step("Go to /playground", async () => {
      await playground.goto();
      await playground.verifyPageLoaded();
    });

    // ✅ 2) Scroll & Click "Start Testing"
    await test.step("Scroll & Start Testing", async () => {
      await playground.clickStartTesting("UI Elements Lab");
    });

    // ✅ 3) Verify redirect to UI modules page
    await test.step("Verify UI Elements Page Loaded", async () => {
      await ui.verifyUIElementsPage();
    });

    // ✅ 4) Fill & submit first form
    await test.step("Fill Form", async () => {
      await ui.fillForm(
        "Prasanth",
        "testuser@example.com",
        "Password@123",
        "Testing message"
      );
    });

    await test.step("Submit Form", async () => {
      await ui.submitForm();
    });
  });

});
