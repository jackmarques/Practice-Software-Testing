import { test, expect } from '../fixtures/auth.fixture';

test.describe('Practice Software Testing - Área Restrita com Fixture de Sessão', () => {
  test('Deve iniciar diretamente na área logada (My account) exibindo os dados do usuário autenticado', async ({
    dashboardPage,
    page,
  }) => {
    await expect(page).toHaveURL(/.*\/account/);
    await expect(dashboardPage.pageTitle).toBeVisible();
    await expect(dashboardPage.pageTitle).toHaveText('My account');
    await expect(dashboardPage.userIdentifier).toBeVisible();
    await expect(dashboardPage.userIdentifier).toContainText('Jane Doe');
    await expect(dashboardPage.profileLink).toBeVisible();
    await expect(dashboardPage.invoicesLink).toBeVisible();
    await expect(dashboardPage.favoritesLink).toBeVisible();
  });

  test('Deve realizar logout a partir da área restrita e retornar ao estado deslogado', async ({
    dashboardPage,
    page,
  }) => {
    await expect(dashboardPage.userIdentifier).toBeVisible();
    await dashboardPage.logout();

    await expect(page).toHaveURL(/.*\/auth\/login/);
    await expect(dashboardPage.navSignInLink).toBeVisible();
  });
});
