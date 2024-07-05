import { test, expect } from "../../fixtures/fixtures";

test.beforeEach(async ({ page, home }) => {
  await page.goto("/contact");
  await page.waitForLoadState("load");
  await home.allowCookiesButton.click();
});

test("Should check the correct amount of empty form errors exist @emptyFormErrors", async ({
  contact,
}) => {
  await contact.ContactForm().submitButton.click();
  const emptyFieldErrors = await contact.ContactForm().emptyFormError1.count();
  expect(emptyFieldErrors).toEqual(8);
});

test("Should check the invalid email format error is present @populatedFormErrors", async ({
  contact,
}) => {
  await contact.ContactForm().fillContactForm(true, "test@");
  await contact.ContactForm().submitButton.click();
  const emailError = contact.ContactForm().emptyFormError2;
  await expect(emailError).toBeVisible();
  await expect(emailError).toHaveText(/Email must be formatted correctly/, {
    ignoreCase: true,
  });
});
