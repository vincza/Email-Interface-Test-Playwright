import { Page } from "@playwright/test";

export class EmailInbox {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
        * Element corresponding to a dashboard tab
     */
    getDashboardTab(tab: string) {
        return this.page.locator('div.mail-navigation', { hasText: tab });
    }

    /**
        * Element corresponding to an email row
     */
    getEmailRow(subject: string) {
        return this.page.locator('tr', { has: this.page.locator('td>div>span', { hasText: subject }) })
    }

    /**
        * Element corresponding to an email checkbox
     */
    getEmailCheckbox(subject: string) {
        return this.getEmailRow(subject).locator('div.mail-checkbox');
    }


    /**
        * Element corresponding to select all emails checkbox
     */
    get getSelectAllEmailsCheckbox() {
        return this.page.locator('span.select-all-label');
    }

    /**
        * Element corresponding to compose email button 
     */
    get getComposeEmailButton() {
        return this.page.locator('button', { hasText: 'Compose' });
    }
}