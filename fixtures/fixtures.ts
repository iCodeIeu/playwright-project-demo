import { test as base } from "@playwright/test";
import { Home } from "../pages/home.page";
import { Contact } from "../pages/contact.page";
import { Login, ForgotPasswordForm, SignupForm } from "../pages/login.page";

type Fixtures = {
  home: Home;
  contact: Contact;
  login: Login;
  forgotPasswordForm: ForgotPasswordForm;
  signupForm: SignupForm;
};

export const test = base.extend<Fixtures>({
  home: async ({ page }, use) => {
    const home = new Home(page);
    await use(home);
  },

  contact: async ({ page }, use) => {
    const contact = new Contact(page);
    await use(contact);
  },

  login: async ({ page }, use) => {
    const login = new Login(page);
    await use(login);
  },

  forgotPasswordForm: async ({ page }, use) => {
    const forgotPasswordForm = new ForgotPasswordForm(page);
    await use(forgotPasswordForm);
  },

  signupForm: async ({ page }, use) => {
    const signupForm = new SignupForm(page);
    await use(signupForm);
  },
});

export { expect } from "@playwright/test";
