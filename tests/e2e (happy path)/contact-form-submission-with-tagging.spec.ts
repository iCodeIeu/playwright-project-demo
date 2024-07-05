import { test, expect } from "../../fixtures/fixtures";
import { Page } from "@playwright/test";
import { Home } from "../../pages/home.page";
import { Contact } from "../../pages/contact.page";

let page: Page;
let home: Home;
let contact: Contact;

test.describe.configure({ mode: "serial" });
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  home = new Home(page);
  contact = new Contact(page);
  page.goto("/");
  await page.waitForLoadState("load");
  await home.allowCookiesButton.click();
});

test("Should check we can successfully fill out a contact form @successfulSubmission", async () => {
  await home.findOutMoreButton.click();
  await home.ContactForm().submitButton.waitFor();
  await home.ContactForm().fillContactForm(false);
  await home.ContactForm().submitButton.click();
  await expect(home.ContactForm().successfulSubmissionMessage).toBeVisible();
});

test("Should check we can dismiss the contact form after sucessful submission @successfulSubmission", async () => {
  await home.ContactForm().closeButton.click();
  await expect(home.ContactForm().header).toBeHidden();
});
