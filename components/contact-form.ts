import { FrameLocator, Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

//prettier-ignore

class ContactForm {
  private readonly page: Page;
  readonly frame: FrameLocator;
  readonly header: Locator;
  readonly customerStatusDropdown: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly organisationInput: Locator;
  readonly clinicalAreaInput: Locator;
  readonly regionDropdown: Locator;
  readonly messageInput: Locator;
  readonly discoveredIslaInput: Locator;
  readonly marketingCheckbox: Locator;
  readonly submitButton: Locator;
  readonly emptyFormError1: Locator;
  readonly emptyFormError2: Locator;
  readonly successfulSubmissionMessage: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page
    this.frame = page.frameLocator("//*[@class='hs-form-iframe']");
    this.header = this.frame.locator(page.getByText('Find out more'))
    this.customerStatusDropdown = this.frame.locator(page.getByText('Are you an existing customer?*'));
    this.nameInput = this.frame.locator(page.getByLabel("Name*"));
    this.emailInput = this.frame.locator(page.getByLabel("Email*"));
    this.organisationInput = this.frame.locator(page.getByLabel("Organisation*"));
    this.clinicalAreaInput = this.frame.locator(page.getByLabel("Clinical Area"));
    this.regionDropdown = this.frame.locator(page.getByLabel("Region*"));
    this.messageInput = this.frame.locator(page.getByLabel("Message*"));
    this.discoveredIslaInput = this.frame.locator(page.getByLabel(/How did you hear about Isla/));
    this.marketingCheckbox = this.frame.locator(page.getByRole("checkbox"));
    this.submitButton = this.frame.locator(page.getByRole("button", { name: "Submit" }));
    this.emptyFormError1 = this.frame.locator(page.locator(
      "//*[@class='hs-error-msg hs-main-font-element']"
    ));
    this.emptyFormError2 = this.frame.locator(page.getByText('Email must be formatted'));
    this.successfulSubmissionMessage = this.frame.locator(page.getByText('Thank you for your enquiry,'));
    this.closeButton = page.locator("//*[@class='elementor-icon']").last();
  }

  async fillContactForm( marketingCheckbox: boolean, email?: string, ) {
    await this.customerStatusDropdown.selectOption({index: 1});
    await this.nameInput.fill(faker.person.fullName());
    await this.emailInput.fill(email || faker.internet.email());
    await this.organisationInput.fill(faker.company.name());
    await this.clinicalAreaInput.fill(faker.person.jobArea());
    await this.regionDropdown.selectOption({index: 1});
    await this.messageInput.fill(faker.lorem.paragraph());
    await this.discoveredIslaInput.selectOption({index: 1});
    if (marketingCheckbox === true) {
      await this.marketingCheckbox.check();
    }
  }
}

export default ContactForm;
