import { Then, When } from "@cucumber/cucumber";
import { composeEmail, page } from "../global";
import { expect } from "@playwright/test";

const url = 'https://google.ro'

const imageUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const videoLink = 'https://www.youtube.com/embed/V3dbG9pAi8I';

When('I add {string} subject to the draft', async (subject: string) => {
    await composeEmail.getSubjectInput.fill(subject, { timeout: 7000 });
});


When('I add {string} address to the draft', async (address: string) => {
    await composeEmail.getAddressInput.fill(address, { timeout: 7000 });
})

When('I check the heading buttons are disabled when body is not selected', async () => {
    let allButtonsDisabled = await composeEmail.checkHeadingButtonsAreDisabled();
    expect(allButtonsDisabled).toEqual(true);
})

When('I add {string} body to the draft', async (body: string) => {
    await composeEmail.fillBody(body);
})


When('I send the email', async () => {
    await composeEmail.getSendEmailButton.click({ timeout: 7000 });
})


When('I see the heading buttons are enabled', async () => {
    let allButtonsDisabled = await composeEmail.checkHeadingButtonsAreEnabled();
    expect(allButtonsDisabled).toEqual(true);
})

When('I close the dialog', async () => {
    await composeEmail.getCloseDialogButton.click();
});

When('I press the {string} style button', async (button: string) => {
    await composeEmail.enableStyle(button);

    //Added timeout to see what happens in scenario
    await page.waitForTimeout(2000);
})

When('I expect text to be an {string}', async (type: string) => {
    expect(composeEmail.getEmailBody.locator(type)).toBeVisible();
})

When('I insert link', async () => {
    await composeEmail.insertAttachments('insertLink', url);

    //Added timeout to see what happens in scenario
    await page.waitForTimeout(2000);
})

When('I insert image', async () => {
    await composeEmail.insertAttachments('insertImage', imageUrl);
    await page.waitForTimeout(2000);
})

When('I insert a video link', async () => {
    await composeEmail.insertAttachments('insertVideo', videoLink);
    await page.waitForTimeout(2000);
})

When('I expect {string} with style {string}', async (type: string, style: string) => {
    expect(composeEmail.getEmailBody.locator(type)).toBeVisible({ timeout: 7000 });
    expect(composeEmail.getEmailBody.locator(type)).toHaveAttribute('style', style, { timeout: 7000 });
})

When('I check the link is present in the input', async () => {
    expect(composeEmail.getEmailBody.locator('a')).toHaveAttribute('href', url, { timeout: 7000 })
});

When('I check the image is present in the input', async () => {
    expect(composeEmail.getEmailBody.locator('img')).toHaveAttribute('src', imageUrl, { timeout: 7000 })
});

When('I check the video link is present in the input', async () => {
    expect(composeEmail.getEmailBody.locator('img.ta-insert-video')).toHaveAttribute('ta-insert-video', videoLink, { timeout: 7000 })
});


Then('I delete the composed email', async () => {
    await composeEmail.getDeleteComposedEmailButton.click({ timeout: 7000 });
});

Then('I see send button is disabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
