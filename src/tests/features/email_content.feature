Feature: Email Content Feature

  Background: 
    Given I navigate to email url

  Scenario Outline: Reply to an email
    When I select the email with subject <subject>
    Then I see the email content is correct
    When I open the reply email dialog
    Then I see the reply email dialog is open with the right values
    And I add "Reply" body to the draft
    And I send the email

    Examples: 
      | subject       |
      | "Street Art"  |
      | "Lores ipsum" |

  Scenario: Forward an email
    When I select the email with subject "Street Art"
    Then I see the email content is correct

  @manual
  Scenario: Forward an email without address
    When I select the email with subject "Street Art"
    Then I see the email content is correct
    Then I see send button is disabled

  @manual
  Scenario: Move email to spam
    When I select the email with subject "Street Art"
    Then I see the email content is correct
    When I press the spam button
    And I switch the tab to 'Spam'
    Then I see the email in spam

  @manual
  Scenario: Print Email
    When I select the email with subject "Street Art"
    Then I see the email content is correct
    When I press the print button
    Then I see the email was printed

  @manual
  Scenario: Delete email
    When I select the email with subject "Street Art"
    Then I see the email content is correct
    When I press the delete button
    And I switch the tab to 'Trash'
    Then I see the email in trash
