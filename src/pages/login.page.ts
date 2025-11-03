import { Page } from "@playwright/test";

export class LoginPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto("https://testingpg.netlify.app");
  }

  async clickLogin() {
    await this.page.getByRole("link", { name: /login/i }).click();
  }

  async enterEmail(email: string) {
    await this.page.getByPlaceholder(/email/i).fill(email);
  }

  async enterPassword(password: string) {
    await this.page.getByPlaceholder(/password/i).fill(password);
  }

  async clickSignIn() {
    await this.page.getByRole("button", { name: /sign in/i }).click();
  }

  async login(email: string, password: string) {
    await this.clickLogin();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}
