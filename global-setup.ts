import { chromium } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

async function globalSetup() {
  console.log("➡ Starting browser...");
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("➡ Clearing cookies & storage...");
  await context.clearCookies();
  await context.clearPermissions();
  await context.storageState({ path: "storage.json" });   // empty

  console.log("➡ Opening login page...");
  await page.goto("https://testingpg.netlify.app/login", {
    waitUntil: "domcontentloaded",
  });

  // ✅ FORCE redirect → login
  if (!page.url().includes("/login")) {
    console.log("⚠ Auto-redirect → going back to login...");
    await page.goto("https://testingpg.netlify.app/login", {
      waitUntil: "domcontentloaded",
    });
  }

  console.log("➡ Waiting for login inputs...");

  // ✅ Reliable selector wait
  try {
    await page.waitForSelector("input[placeholder*='Email']", {
      timeout: 15000,
    });
  } catch {
    throw new Error("❌ Login page not visible — STOP");
  }

  console.log("➡ Filling login form...");
  await page.getByPlaceholder(/Email/i).fill(process.env.email!);
  await page.getByPlaceholder(/Password/i).fill(process.env.password!);

  console.log("➡ Clicking Sign In...");
  await page.getByRole("button", { name: /sign in/i }).click();

  console.log("➡ Waiting for navigation...");
  await page.waitForLoadState("networkidle");

  console.log("✅ Saving session...");
  await context.storageState({ path: "storage.json" });

  await browser.close();
  console.log("✅ DONE — SESSION SAVED");
}

export default globalSetup;
