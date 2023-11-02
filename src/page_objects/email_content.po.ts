import { Page } from "@playwright/test";

export class EmailContent {
    public page: Page;

    private firstName: string = '';

    private lastName: string = '';

    private subject: string = '';

    private label: string = '';

    private email: string = '';

    constructor(page: Page) {
        this.page = page;
    }

    get getEmail() {
        return this.email;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getSubject() {
        return this.subject;
    }

    get getLabel() {
        return this.label;
    }

    /**
        * Element corresponding to email label
    */
    get getLabelLocator() {
        return this.page.locator('span.mail-tag');
    }

    /**
        * Element corresponding to first name
    */
    get getFirstNameLocator() {
        return this.page.locator('h2.name-h').first();

    }

    /**
        * Element corresponding to last name
    */
    get getLastNameLocator() {
        return this.page.locator('h2.second-name');
    }

    /**
        * Element corresponding to subject
    */
    get getSubjectLocator() {
        return this.page.locator('span.subject');
    }

    /**
        * Element corresponding to email
    */
    get getEmailLocator() {
        return this.page.locator('span.email');
    }

    /**
       * Element corresponding to reply button
    */
    get getReplyButton() {
        return this.page.locator('button', { has: this.page.locator('i.ion-reply') });
    }

    /**
       * Element corresponding to forward button
     */
    get getForwardButton() {
        return this.page.locator('button', { has: this.page.locator('i.ion-forward') });
    }


    setPersonalInformation(firstName: string, lastName: string, subject: string, label: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.label = label;
        this.subject = subject;
    }

    async setEmail() {
        this.email = await this.getEmailLocator.textContent() ?? '';
    }
}