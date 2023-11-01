import { Given } from '@cucumber/cucumber'
import { page } from '../global';


const emailInterfaceUrl: string = 'https://www.akveo.com/blur-admin-mint/?__hstc=251808470.da243430061193dcadeef8b204b5d1ce.1697635522395.1697635522395.1697635522395.1&__hssc=251808470.1.1697635522396&__hsfp=235981734#/components/mail/inbox';


Given("I navigate to email url", async () => {
    await page.goto(emailInterfaceUrl);
})