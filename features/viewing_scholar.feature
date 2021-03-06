@view

Feature: Viewing Scholars
  In order to pledge for a scholar
  As an admin
  I should be able to see scholar entries

  Background:
    Given I am on the "Sign In" page
    When I type my login credentials:
      | email                | password |
      | adrian@proudcloud.net| p@ssw0rd |
    And I press the "Sign In" button
    Then I should be on the "Home" page

  Scenario: Verifying scholars appear
    Given I am on the "New Scholar" page
    When I fill up the new scholar form:
      | FirstName | LastName | Amount | School | Age | Description |
      | Weto      | Olaguer  | 5000   | UP     | 18  | Please Help |
    And I press the "Save" button
    Then I should see a message:
      """
      Scholar successfully created
      """
    And I am on the "Home" page
    Then I should see the following scholars
      | FirstName | LastName |
      | Weto      | Olaguer  |
