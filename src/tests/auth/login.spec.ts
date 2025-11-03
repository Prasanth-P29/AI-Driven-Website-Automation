import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import dotenv from "dotenv";

dotenv.config();

const EMAIL = process.env.email!;
const PASSWORD = process.env.password!;

test("Trainer Login - POM", async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();
  await login.login(EMAIL, PASSWORD);

  await page.waitForLoadState("networkidle");

  await expect(page).not.toHaveURL(/login/);

  console.log("✅ Login successful ✅");
});
