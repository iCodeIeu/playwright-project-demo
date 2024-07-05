import { Locator, Page } from "@playwright/test";
//prettier-ignore
export class Login {
  private readonly page: Page;
  readonly signupButton: Locator;
  readonly forgotPasswordButton: Locator;
  readonly nhsLoginButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signupButton = page.getByRole('link', { name: 'Sign up' })
    this.forgotPasswordButton = page.getByRole('link', { name: 'Forgotten password?' });
    this.nhsLoginButton = page.getByRole('button', { name: 'nhs-logo-sm Log in with NHS' })
  }
}

export class ForgotPasswordForm {
  private readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "Reset password" });
  }
}

export class SignupForm {
  private readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "Sign up to Isla" });
  }
}
