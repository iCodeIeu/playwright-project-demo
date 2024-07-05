import { Locator, Page } from "@playwright/test";
import ContactForm  from "../components/contact-form";

export class Contact {
  private readonly page: Page;
  readonly islaLogo: Locator;
  readonly aboutUsNavLink: Locator;
  readonly howIslaWorksNavLink: Locator;
  readonly specialitiesNavLink: Locator;
  readonly careersNavLink: Locator;
  readonly contactNavLink: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page
    this.islaLogo = page.locator(".elementor-widget-container > a").first();
    this.aboutUsNavLink = page.getByRole("link", { name: "About Us" });
    this.howIslaWorksNavLink = page.getByRole("link", {
      name: "How Isla Works",
    });
    this.specialitiesNavLink = page.getByRole("link", { name: "Specialities" });
    this.careersNavLink = page.getByRole("link", { name: "Careers" });
    this.contactNavLink = page.getByRole("link", { name: "Contact" });
  }

  ContactForm() {
    return new ContactForm(this.page);
  }
}
