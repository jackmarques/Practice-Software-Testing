import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { listaUsuarios } from '../data/usuarios.data';

test.describe('Practice Software Testing - Login Data-Driven', () => {
  for (const cenario of listaUsuarios) {
    test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);

      await loginPage.goto();
      await loginPage.login(cenario.usuario, cenario.senha);

      if (cenario.sucesso) {
        await expect(page).toHaveURL(/.*\/account/);
        await expect(dashboardPage.pageTitle).toBeVisible();
        await expect(dashboardPage.pageTitle).toHaveText('My account');
        await expect(dashboardPage.userIdentifier).toBeVisible();
        await expect(dashboardPage.userIdentifier).toContainText(cenario.mensagemEsperada);
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(cenario.mensagemEsperada);
        await expect(page).toHaveURL(/.*\/auth\/login/);
      }
    });
  }
});
