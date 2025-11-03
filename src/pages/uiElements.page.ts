import { expect, Page } from "@playwright/test";

export class UIElementsPage {
  constructor(public page: Page) {}

  // ✅ First component → UI Elements Start Button
  get uiElementsStartBtn() {
    return this.page.getByRole("button", { name: "Start Testing" });
  }

  // ✅ Form fields
  nameField = () => this.page.getByPlaceholder("Enter your name");
  emailField = () => this.page.getByPlaceholder("Email Input");
  passwordField = () => this.page.getByPlaceholder("Password Input");
  textareaField = () => this.page.getByPlaceholder("Enter your message");

  // ✅ Submit button
  submitBtn = () => this.page.getByRole("button", { name: "Submit Form" });

  // ✅ Navigate directly to UI Elements page if needed
  async goto() {
    await this.page.goto("https://testingpg.netlify.app/playground-modules/ui-elements");
    await expect(this.page).toHaveURL(/ui-elements/);
  }

  // ✅ Click Start Testing
  async clickStartTesting() {
    await this.uiElementsStartBtn.click();
  }

  // ✅ Validate page loaded
  async verifyUIElementsPage() {
    await expect(this.page).toHaveURL(/ui-elements/);
    await expect(
      this.page.getByRole("heading", { name: "Form Elements" })
    ).toBeVisible();
  }

  // ✅ Fill form
  async fillForm(name: string, email: string, password: string, message: string) {
    await this.nameField().fill(name);
    await this.emailField().fill(email);
    await this.passwordField().fill(password);
    await this.textareaField().fill(message);
  }

  // ✅ Submit
  async submitForm() {
    await this.submitBtn().click();
  }
}
