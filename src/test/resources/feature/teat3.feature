@tag
Feature: Adding Customer
  I want to use this template for my feature file

  @tag1 @tag2
  Scenario: Create an unique Customer Id
    
    And user click add customer option
    When User giving the data for the Addcustomer option1
    
    |jaga|shan|abc@gamil.com|salem|123456789|
    
    And User click the submit button
    Then verify the customer id is displayed


