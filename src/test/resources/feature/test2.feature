@tag
Feature: Adding Customer
  I want to use this template for my feature file

  @tag2
  Scenario Outline: Create an unique Customer Id
    Given User should launch the browser
    And user click add customer option
    When User Provide Vaild Details "<name>","<last>","<mail>","<address>","<phoneno>"
    And User click the submit button
    Then verify the customer id is displayed

    
    Examples: 
      | name  | last  | mail              | address | phoneno   |
      | jaga  | shan  | success@gmail.com | salem   | 123456789 |
      | ranji | genzo | genzo@gmail.com   | covai   | 321456698 |
