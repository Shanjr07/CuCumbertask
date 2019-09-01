@tag
Feature: Adding Customer
  I want to use this template for my feature file

  @tag2 @tag1
  Scenario: Create an unique Customer Id
    And user click add customer option
    When User giving the data for the Addcustomer option2
    
    |name|jaga|
    |last|shan|
    |mail|123asd@gmail.com|
    |address|salem|
    |phno|123654987987|
    And User click the submit button
    Then verify the customer id is displayed


