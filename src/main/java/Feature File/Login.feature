Feature: Checking Login functionality of the Orange HRM
  #Scenario: Checking Login functionality with the valid login credentials
    #Given User is on Login Page
    #When User enter username in username field
    #When User enter password in password field
   # Then User click on login button
    #And User is on Home Page


#Feature: Checking Login functionality of the application
  Scenario: Checking Login functionality with the valid login credentials
    Given User is on Login Page
    When Enters the username and password
      | username | password |
      | Ravish    | cggvhd    |
      | Admin    | admin123 |
    When Click on the Login button
    Then User is on homepage