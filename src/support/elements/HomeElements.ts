import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getStartButton(): Locator {
    return this.page.locator('a[class="getStarted_Sjon"]');
  }

  getSearchFieldButton(): Locator {
    return this.page.locator('button[class="DocSearch DocSearch-Button"]');
  }

  getSearchFieldInput(): Locator {
    return this.page.locator('input[class="DocSearch-Input"]');
  }

  getCommandLineDocComponents(): Locator {
    return this.page.locator('a[href="/docs/test-cli"]');
  }

  getSearchField(): Locator {
    return this.page.locator('button[class="DocSearch DocSearch-Button"]');
  }

  getSearchButton(): Locator {
    return this.page.locator('button[name="submit_search"]');
  }

  getProductCount(): Locator {
    return this.page.locator('span[class="heading-counter"]');
  }

  getLoginField(): Locator {
    return this.page.locator('#user-name');
  }

  getPassField(): Locator {
    return this.page.locator('#password');
  }

  getSubmitButton(): Locator {
    return this.page.locator('#login-button');
  }
}
