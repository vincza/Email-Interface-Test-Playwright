@manual
Feature: Compose Email Feature

  Background: 
    Given I navigate to email url
    When I open the compose dialog
    And I add "Test" subject to the draft
    And I add "test123@mailsac.com" address to the draft
    And I check the heading buttons are disabled when body is not selected
    And I add "Test" body to the draft
    Then I see the heading buttons are enabled

  Scenario: Compose Email and delete it
    And I delete the composed email

  Scenario: Compose Email with different styles
    When I press the "h1" style button
    Then I expect text to be an 'H1'
    When I press the "h2" style button
    Then I expect text to be an 'H2'
    When I press the "h3" style button
    Then I expect text to be an 'H3'
    When I press the "justifyCenter" style button
    Then I expect "h3" with style 'text-align: center;'
    And I send the email

  Scenario: Compose Email with different attachments
    And I insert link
    Then I check the link is present in the input
    When I insert image
    Then I check the image is present in the input
    When I insert a video link
    Then I check the video link is present in the input
    And I send the email

  @manual
  Scenario: Compose Email and send without address
    When I open the compose dialog
    And I add "Test" subject to the draft
    And I add "Test" body to the draft
    Then I see send button is disabled
