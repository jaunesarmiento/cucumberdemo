Feature: Scholar Creation
  In order to pledge for a scholar
  As user
  I should be able to see scholar entries

  Scenario: Verifying scholars appear
    Given the following scholars exists:
      | First Name | Last Name | Amount | School | Age | Description | Image    |
      | Weto       | Olaguer   | 5000   | UP     | 18  | Please Help | weto.jpg |
      | Adrian     | Co        | 5000   | UP     | 25  | Help Please | pc.jpg   |
    And I am on the "home" page
    Then I should see the following scholars
      | First Name | Last Name |
      | Weto       | Olaguer   |
      | Adrian     | Co        |
