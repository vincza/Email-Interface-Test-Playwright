@manual
Feature: Email Inbox Test Feature

  Background: 
    Given I navigate to email url

  Scenario: Switch between dashboard tabs
    When I switch the tab to "Sent Mail"
    Then I see "Sent Mail" tab is active
    When I switch the tab to "Important"
    Then I see "Important" tab is active
    When I switch the tab to "Draft"
    Then I see "Draft" tab is active
    When I switch the tab to "Spam"
    Then I see "Spam" tab is active
    When I switch the tab to "Trash"
    Then I see "Trash" tab is active

  @manual
  Scenario: Add draft email
    When I open the compose dialog
    And I add "Test" subject to the draft
    And I add "test123@mailsac.com" address to the draft
    And I close the dialog
    And I switch the tab to 'Draft'
    Then I see the composed email

  @manual
  Scenario: Add new label
    When I add a new label
    Then I see the label was added

  @manual
  Scenario: Add emails to spam
    When I select the first email
    And I mark the selected emails as spam
    Then I see the email is not present in the Inbox
    When I switch the tab to "Spam"
    Then I see the marked as spam emails are present
    When I switch the tab to "Inbox"
    And I select all emails
    And I mark the selected emails as spam
    Then I see the inbox is empty
    When I switch the tab to "Spam"
    Then I see the marked as spam emails are present

  @manual
  Scenario: Delete Emails
    When I select the first email
    And I delete the selected emails
    Then I see the email is not present in the Inbox
    When I switch the tab to "Trash"
    Then I see the deleted emails are present
    When I switch the tab to "Inbox"
    And I select all emails
    And I delete the selected emails
    Then I see the inbox is empty
    When I switch the tab to "Trash"
    Then I see the deleted emails are present
