import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

export let browser: Browser;

export let browserContext: BrowserContext;

export let page: Page;


setDefaultTimeout(120000)

const configChrome = {
    headless: false,
    timeout: 15000,
    args: [
        '--start-maximized'
    ]
}


BeforeAll(async function () {
    browser = await chromium.launch(configChrome);

    browserContext = await browser.newContext();

    page = await browserContext.newPage();

    await page.setViewportSize({ height: 1920, width: 1080 })
})


AfterAll(async function () {
    await page.close();

    await browser.close();
})
