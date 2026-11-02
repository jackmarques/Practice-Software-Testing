import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly emailInputSelector = '[data-test="email"]';
  private readonly passwordInputSelector = '[data-test="password"]';
  private readonly loginSubmitSelector = '[data-test="login-submit"]';
  private readonly loginErrorSelector = '[data-test="login-error"], [data-test="email-error"], [data-test="password-error"]';
  private readonly pageTitleSelector = 'h3';
  private readonly navSignInSelector = '[data-test="nav-sign-in"]';

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async login(usuario: string, senha: string): Promise<void> {
    await this.emailInput.fill(usuario);
    await this.passwordInput.fill(senha);
    await this.loginButton.click();
  }

  get emailInput(): Locator {
    return this.page.locator(this.emailInputSelector);
  }

  get passwordInput(): Locator {
    return this.page.locator(this.passwordInputSelector);
  }

  get loginButton(): Locator {
    return this.page.locator(this.loginSubmitSelector);
  }

  get errorMessage(): Locator {
    return this.page.locator(this.loginErrorSelector);
  }

  get pageTitle(): Locator {
    return this.page.locator(this.pageTitleSelector);
  }

  get navSignInLink(): Locator {
    return this.page.locator(this.navSignInSelector);
  }
}
