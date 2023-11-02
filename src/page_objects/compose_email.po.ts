import { Page, expect } from "@playwright/test";

export class ComposeEmail {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
        * Element corresponding to compose email dialog
     */
    get getComposeEmailDialog() {
        return this.page.locator('div.modal-dialog');
    }

    /**
        * Element corresponding to address input
     */
    get getAddressInput() {
        return this.page.getByPlaceholder('To');
    }

    /**
        * Element corresponding to subject input
     */
    get getSubjectInput() {
        return this.page.getByPlaceholder('Subject');
    }

    /**
        * Element corresponding to close dialog button
     */
    get getCloseDialogButton() {
        return this.page.locator('i.ion-close-round');
    }

    /**
        * Element corresponding to email body input
     */
    get getEmailBodyInput() {
        return this.page.locator('textarea');
    }

    /**
        * Element corresponding to email body 
     */
    get getEmailBody() {
        return this.page.locator('div[ta-bind]');
    }

    /**
        * Element corresponding to text styling group buttons
     */
    get getStylingButtonGroup() {
        return this.page.locator('text-angular-toolbar').first();
    }

    /**
        * Returns all styling buttons
     */
    async getStylingButtonList() {
        return await this.getStylingButtonGroup.locator('div>button').all();
    }

    /**
        * Element corresponding to styling button by name
     */
    getStylingButtonByName(name: string) {
        return this.page.locator('button[name = "' + name + '"]');
    }

    /**
        * Element corresponding to send email button
     */
    get getSendEmailButton() {
        return this.page.locator('button', { hasText: 'Send' });
    }

    /**
       * Element corresponding to delete composed email button
    */
    get getDeleteComposedEmailButton() {
        return this.page.locator('i.ion-android-delete');
    }


    async checkHeadingButtonsAreDisabled() {
        let buttonList = await this.getStylingButtonList();
        for (let index = 0; index < buttonList.length; index++) {
            if (!await buttonList[index].isDisabled()) {
                return false;
            }
        }
        return true;
    }

    async checkHeadingButtonsAreEnabled() {
        let buttonList = await this.getStylingButtonList();
        for (let index = 0; index < buttonList.length; index++) {
            if (!await buttonList[index].isEnabled()) {
                return false;
            }
        }
        return true;
    }

    async fillBody(body: string) {
        await this.getEmailBodyInput.fill(body);
        await this.getEmailBody.click();
    }

    async enableStyle(name: string) {
        await this.getStylingButtonByName(name).click({ timeout: 5000 });
        expect(this.getStylingButtonByName(name)).toHaveClass(/active/)
    }

    async insertAttachments(name: string, text: string) {
        this.page.once('dialog', async (page) => {
            await page.accept(text);
        })
        await this.getStylingButtonByName(name).click({ timeout: 5000 });
    }
}