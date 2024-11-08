import { Page, expect } from '@playwright/test';
import CommandLineDocElements from '../elements/CommandLineDocElements';
import BasePage from './BasePage';

export default class CommandLineDocPage extends BasePage {
  readonly commandLineDocElements: CommandLineDocElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.commandLineDocElements = new CommandLineDocElements(page);
  }

  async verifyDocTitle(): Promise<void> {
    expect(await this.commandLineDocElements.getDocTile().isVisible());
  }

  static async getClipboardText(): Promise<string> {
    const text = await navigator.clipboard.readText();
    return text;
  }

  async copyCommand(): Promise<void> {
    await this.commandLineDocElements.getCopyButton().click();
    const clipboardText = await this.page.evaluate(
      CommandLineDocPage.getClipboardText
    );
    expect(clipboardText).toBe('npx playwright test tests/todo-page.spec.ts');
  }

  async goToReferenceDirectLink(): Promise<void> {
    await this.commandLineDocElements.getDirectLinkToReference().click();
    expect(this.verifyUrl('https://playwright.dev/docs/test-cli#reference'));
  }

  async goToEmulationDocByMenu(): Promise<void> {
    await this.commandLineDocElements.getEmulationDocMenuItem().click();
    expect(this.verifyUrl('https://playwright.dev/docs/emulation'));
  }

  async goToEmulationDocByNext(): Promise<void> {
    await this.commandLineDocElements.getNextDocumentationButton().click();
    expect(this.verifyUrl('https://playwright.dev/docs/emulation'));
  }
}
