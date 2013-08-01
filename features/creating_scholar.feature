Feature: Scholar Creation
  In order to collect pledges for the scholars
  As an admin
  I should be able to create scholar accounts

  Scenario: Creating a Scholar with incomplete entries
    Given I am logged in as an admin
    When I am on the "new scholar" page
    And I fill up the "new scholar" form:
      | First Name | Last Name | Amount | School | Age | Description |
      | Weto       | Olaguer   | 5000   | UP     | 18  | Please Help |
    And I press the "Save" button
    Then I should see a message:
      """
        Scholar successfully created
      """
  Scenario: Creating a Scholar with complete entries
    Given I am logged in as an admin
    When I am on the "new scholar" page
    And I fill up the "new scholar" form:
      | First Name | Last Name | Amount | School | Age | Description |
      | Weto       | Olaguer   | 5000   | UP     | 18  | Please Help |
    And I press the "Save" button
    Then I should see a message:
      """
        Scholar successfully created
      """
