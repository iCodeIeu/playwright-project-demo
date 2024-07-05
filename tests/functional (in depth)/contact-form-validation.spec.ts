import { test, expect } from "../../fixtures/fixtures";

test.describe.configure({ mode: "parallel" });
test.describe("Contact Form - Validation", () => {
  test.beforeEach(async ({ page, home }) => {
    await page.goto("/contact");
    await page.waitForLoadState("load");
    await home.allowCookiesButton.click();
  });

  test.describe("Empty Form Errors", () => {
    test.beforeEach(async ({ contact }) => {
      await contact.ContactForm().submitButton.click();
    });

    test("Should check the correct amount of empty form errors exist", async ({ contact }) => {
      const emptyFieldErrors = await contact.ContactForm().emptyFormError1.count();
      expect(emptyFieldErrors).toEqual(8);
    });
  });

  test.describe("Populated Form Errors", () => {
    test.beforeEach(async ({ contact }) => {
      await contact.ContactForm().fillContactForm(true, "test@");
      await contact.ContactForm().submitButton.click();
    });

    test("Should check the invalid email format error is present", async ({ contact }) => {
      const emailError = contact.ContactForm().emptyFormError2;
      await expect(emailError).toBeVisible();
      await expect(emailError).toHaveText(/Email must be formatted correctly/, {ignoreCase: true});
    });
  });
});
