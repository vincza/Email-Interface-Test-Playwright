import { Given, Then, When } from '@cucumber/cucumber'
import { composeEmail, emailContent, emailInbox, navigation, page } from '../global';
import { expect } from 'playwright/test';


Given("I select the email with subject {string}", async (subject) => {
    let senderName = await emailInbox.getEmailSenderName(subject).textContent() ?? '';

    let firstName = senderName.split(' ')[0];

    let lastName = senderName.split(' ')[1];

    let emailLabel = await emailInbox.getEmailLabel(subject).textContent() ?? '';

    emailContent.setPersonalInformation(firstName, lastName, subject, emailLabel);

    await emailInbox.getEmailRow(subject).click();
})



Then('I see the email content is correct', async () => {
    await emailContent.getSubjectLocator.waitFor({ state: 'visible', timeout: 7000 });

    expect(await emailContent.getFirstNameLocator.textContent()).toEqual(emailContent.getFirstName);

    expect(await emailContent.getLastNameLocator.textContent()).toEqual(emailContent.getLastName,);

    expect(await emailContent.getSubjectLocator.textContent()).toEqual(emailContent.getSubject);

    expect(await emailContent.getLabelLocator.textContent()).toEqual(emailContent.getLabel);
})


When('I open the reply email dialog', async () => {
    await emailContent.setEmail();

    await emailContent.getReplyButton.click({ timeout: 7000 });
})

Then('I see the reply email dialog is open with the right values', async () => {
    expect(composeEmail.getComposeEmailDialog).toBeVisible();

    expect(composeEmail.getAddressInput).toHaveValue(emailContent.getEmail);

    expect(composeEmail.getSubjectInput).toHaveValue(emailContent.getSubject);
})

When('I open the forward email dialog', async () => {
    await emailContent.setEmail();

    await emailContent.getReplyButton.click({ timeout: 7000 });
})


Then('I see the email in trash', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I press the delete button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the email was printed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I press the print button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the email in spam', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I press the spam button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});







