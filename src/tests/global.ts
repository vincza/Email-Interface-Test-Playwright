import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { Navigation } from "../page_objects/navigation.po";
import { EmailInbox } from "../page_objects/email_inbox.po";
import { ComposeEmail } from "../page_objects/compose_email.po";
import exp from "constants";
import { EmailContent } from "../page_objects/email_content.po";

export let browser: Browser;

export let browserContext: BrowserContext;

export let page: Page;

export let navigation: Navigation

export let emailInbox: EmailInbox

export let composeEmail: ComposeEmail

export let emailContent: EmailContent


setDefaultTimeout(120000)

const configChrome = {
    headless: false,
    timeout: 15000,
}


BeforeAll(async function () {
    browser = await chromium.launch(configChrome);
})


Before(async function () {
    browserContext = await browser.newContext();

    page = await browserContext.newPage();

    await page.setViewportSize({ height: 1080, width: 1920 })

    navigation = new Navigation(page);

    emailInbox = new EmailInbox(page);

    composeEmail = new ComposeEmail(page);

    emailContent = new EmailContent(page);

})


After(async function () {
    await page.close();
    await browserContext.close();
})



AfterAll(async function () {
    await browser.close();
})
