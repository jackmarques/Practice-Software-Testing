import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type AuthFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<AuthFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

    await page.waitForURL(/.*\/account/);
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.pageTitle.waitFor({ state: 'visible' });

    await use(dashboardPage);
  },
});

export { expect } from '@playwright/test';
