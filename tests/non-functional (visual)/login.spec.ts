import { test, expect } from "../../fixtures/fixtures";

test.describe.configure({ mode: "parallel" });

test.describe("Visual - Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://portal.islacare.co.uk/auth/login");
    await page.waitForLoadState("load");
  });

  test("Login form", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("Forgot your password form", async ({
    login,
    forgotPasswordForm,
    page,
  }) => {
    await login.forgotPasswordButton.click();
    await forgotPasswordForm.header.waitFor();
    await expect(page).toHaveScreenshot();
  });

  test("Signup Form", async ({ login, signupForm, page }) => {
    await login.signupButton.click();
    await signupForm.header.waitFor();
    await expect(page).toHaveScreenshot();
  });
});
