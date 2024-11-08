import { Page } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import BasePage from './BasePage';
import HomeElements from '../elements/HomeElements';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async goToDocs(): Promise<void> {
    const CONFIG = join(__dirname, '../fixtures/config.yml');
    await this.homeElements.getStartButton().click();
    await this.verifyUrl(
      TheConfig.fromFile(CONFIG).andPath('application.docs_url').retrieveData()
    );
  }

  async findCommandLineDoc(): Promise<void> {
    const CONFIG = join(__dirname, '../fixtures/config.yml');
    await this.homeElements.getSearchFieldButton().click();
    await this.homeElements.getSearchFieldInput().fill('command line');
    await this.homeElements.getCommandLineDocComponents().click();
    await this.verifyUrl(
      TheConfig.fromFile(CONFIG)
        .andPath('application.cli_docs_url')
        .retrieveData()
    );
  }
}
