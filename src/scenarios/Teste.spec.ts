import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';
import CommandLineDocPage from '../support/pages/CommandLineDocPage';

test.describe('Playwright Docs', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Ir para a página de documentação', async () => {
    await homePage.goToDocs();
  });

  test('Pesquisar documentação de command line', async () => {
    await homePage.findCommandLineDoc();
  });
});

test.describe('Playwright Docs', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let commandLineDocPage: CommandLineDocPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.cli_docs_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    commandLineDocPage = new CommandLineDocPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar o título da documentaçaõ de command line', async () => {
    await commandLineDocPage.verifyDocTitle();
  });

  test('Copiar o comando da documentação', async ({ context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await commandLineDocPage.copyCommand();
  });

  test('Verificar o funcionament do direct link', async () => {
    await commandLineDocPage.goToReferenceDirectLink();
  });

  test('Ir para a documentação de Emulation a partir do menu', async () => {
    await commandLineDocPage.goToEmulationDocByMenu();
  });

  test('Ir para a documentação de Emulation a partir do botão next', async () => {
    await commandLineDocPage.goToEmulationDocByNext();
  });
});
