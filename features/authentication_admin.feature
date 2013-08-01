@wip

Feature: Administrator Authentication
  In order to perfom administrative tasks
  As an administrator
  I should be able to login

  Scenario: Logging in as an admin
    Given I am on the "Sign In" page
    When I type my login credentials:
      | email                | password |
      | adrian@proudcloud.net| p@ssw0rd |
    And I press the "Sign In" button
    Then I should be on the "Admin" page
