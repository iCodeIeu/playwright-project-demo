import { Locator, Page } from "@playwright/test";
import ContactForm from "../components/contact-form";

//prettier-ignore
export class Home {
  private readonly page: Page;
  readonly allowCookiesButton: Locator;
  readonly islaLogo: Locator;
  readonly aboutUsNavLink: Locator;
  readonly howIslaWorksNavLink: Locator;
  readonly specialitiesNavLink: Locator;
  readonly careersNavLink: Locator;
  readonly contactNavLink: Locator;
  readonly loginButton: Locator;
  readonly findOutMoreButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowCookiesButton = page.getByRole("button", {name: "Allow all cookies"});
    this.islaLogo = page.locator(".elementor-widget-container > a").first();
    this.aboutUsNavLink = page.getByRole("link", { name: "About Us" });
    this.howIslaWorksNavLink = page.getByRole("link", {name: "How Isla Works",});
    this.specialitiesNavLink = page.getByRole("link", { name: "Specialities" });
    this.careersNavLink = page.getByRole("link", { name: "Careers" });
    this.contactNavLink = page.getByRole("link", { name: "Contact" });
    this.findOutMoreButton = page.getByRole("link", { name: "Find out more" }).first();
  }

  ContactForm() {
    return new ContactForm(this.page);
  }
}
