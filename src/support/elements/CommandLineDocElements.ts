import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CommandLineDocElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getDocTile(): Locator {
    return this.page.locator('header > h1');
  }

  getCopyButton(): Locator {
    return this.page
      .getByRole('listitem')
      .filter({
        has: this.page
          .getByRole('paragraph')
          .filter({ hasText: 'Run a single test file' })
      })
      .locator('button[title="Copy"]');
  }

  getDirectLinkToReference(): Locator {
    return this.page.locator('a[href="#reference"].hash-link');
  }

  getEmulationDocMenuItem(): Locator {
    return this.page.locator('a.menu__link[href="/docs/emulation"]');
  }

  getNextDocumentationButton(): Locator {
    return this.page.locator(
      'a[class="pagination-nav__link pagination-nav__link--next"]'
    );
  }
}
