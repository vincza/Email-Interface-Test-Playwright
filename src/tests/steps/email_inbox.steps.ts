import { Given, Then, When } from '@cucumber/cucumber'
import { composeEmail, emailInbox, navigation, page } from '../global';
import { expect } from 'playwright/test';




Given("I navigate to email url", async () => {
    await navigation.navigateToUrl();
})

When('I switch the tab to {string}', async (tab) => {
    await emailInbox.getDashboardTab(tab).click();
});

Then('I see {string} tab is active', async (tab) => {
    expect(emailInbox.getDashboardTab(tab)).toHaveClass(/active/);
});

Then('I open the compose dialog', async () => {
    await emailInbox.getComposeEmailButton.click();
    expect(composeEmail.getComposeEmailDialog).toBeVisible();
});

Then('I see the label was added', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I add a new label', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the deleted emails are present', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I delete the selected emails', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the marked as spam emails are present', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the inbox is empty', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I mark the selected emails as spam', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I select all emails', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I select the first email', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the email is not present in the Inbox', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('I see the composed email', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});