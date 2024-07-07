import { test, expect } from "../../fixtures/fixtures";
import { Page } from "@playwright/test";
import { Home } from "../../pages/home.page";
import { Contact } from "../../pages/contact.page";

test.describe.configure({ mode: "serial" });
test.describe("Contact Form - Submission", () => {
  let page: Page;
  let home: Home;
  let contact: Contact;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    home = new Home(page);
    contact = new Contact(page);
    page.goto("/");
    await page.waitForLoadState("load");
    await home.allowCookiesButton.click();
  });

  test.describe("Successful submission", () => {
    test.beforeAll(async () => {
      await home.findOutMoreButton.click();
      await home.ContactForm().submitButton.waitFor();
    });

    test("Should check we can successfully fill out a contact form", async () => {
      await home.ContactForm().fillContactForm(false);
      await home.ContactForm().submitButton.click();
      await expect(
        home.ContactForm().successfulSubmissionMessage
      ).toBeVisible();
    });

    test("Should check we can dismiss the contact form after sucessful submission", async () => {
      await home.ContactForm().closeButton.click();
      await expect(home.ContactForm().header).toBeHidden();
    });
  });
});
