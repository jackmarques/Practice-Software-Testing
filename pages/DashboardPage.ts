import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly userMenuBadgeSelector = '[data-test="nav-menu"]';
  private readonly pageTitleSelector = '[data-test="page-title"]';
  private readonly logoutButtonSelector = '[data-test="nav-sign-out"], [data-test="sign-out"]';
  private readonly navSignInSelector = '[data-test="nav-sign-in"]';
  private readonly navProfileSelector = '[data-test="nav-profile"]';
  private readonly navInvoicesSelector = '[data-test="nav-invoices"]';
  private readonly navFavoritesSelector = '[data-test="nav-favorites"]';

  constructor(private page: Page) {}

  get userIdentifier(): Locator {
    return this.page.locator(this.userMenuBadgeSelector);
  }

  get pageTitle(): Locator {
    return this.page.locator(this.pageTitleSelector);
  }

  get logoutButton(): Locator {
    return this.page.locator(this.logoutButtonSelector);
  }

  get navSignInLink(): Locator {
    return this.page.locator(this.navSignInSelector);
  }

  get profileLink(): Locator {
    return this.page.locator(this.navProfileSelector);
  }

  get invoicesLink(): Locator {
    return this.page.locator(this.navInvoicesSelector);
  }

  get favoritesLink(): Locator {
    return this.page.locator(this.navFavoritesSelector);
  }

  async logout(): Promise<void> {
    await this.userIdentifier.click();
    await this.logoutButton.click();
  }
}
