@wip

Feature: Scholar Creation
  In order to collect pledges for the scholars
  As an admin
  I should be able to create scholar accounts

  Background:
    Given I am on the "Sign In" page
    When I type my login credentials:
      | email                | password |
      | adrian@proudcloud.net| p@ssw0rd |
    And I press the "Sign In" button
    Then I should be on the "Home" page

  Scenario: Creating a Scholar with complete entries
    Given I am on the "New Scholar" page
    When I fill up the new scholar form:
      | FirstName | LastName | Amount | School | Age | Description |
      | Weto      | Olaguer  | 5000   | UP     | 18  | Please Help |
    And I press the "Save" button
    Then I should see a message:
      """
        Scholar successfully created
      """
  #Scenario: Creating a Scholar with complete entries
    #When I am on the "new scholar" page
    #And I fill up the new scholar form:
      #| First Name | Last Name | Amount | School | Age | Description |
      #| Weto       | Olaguer   | 5000   | UP     | 18  | Please Help |
    #And I press the "Save" button
    #Then I should see a message:
      #"""
        #Scholar successfully created
      #"""
