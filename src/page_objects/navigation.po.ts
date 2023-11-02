import { Page } from "@playwright/test";

export class Navigation {
    public page: Page;

    private emailInterfaceUrl: string = 'https://www.akveo.com/blur-admin-mint/?__hstc=251808470.da243430061193dcadeef8b204b5d1ce.1697635522395.1697635522395.1697635522395.1&__hssc=251808470.1.1697635522396&__hsfp=235981734#/components/mail/inbox';

    constructor(page: Page) {
        this.page = page;
    }

    /**
        * Element corresponding to email dashboard title 
     */
    get getEmailInterfaceTitle() {
        return this.page.locator('h1', { hasText: 'Mail' });
    }



    async navigateToUrl() {
        await this.page.goto(this.emailInterfaceUrl);

        await this.getEmailInterfaceTitle.waitFor({ state: 'visible', timeout: 15000 });

    }
}