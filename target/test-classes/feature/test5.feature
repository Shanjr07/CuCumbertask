@tag
Feature: Adding Tariff plan
  I want to use this template for my feature file

  @tag1
  Scenario: Adding Traffing plan
   
    And user click add traffing option
    When User giving the data for the Adding tariff panning option1
    
    |300|30|30|300|1|10|5|
    |350|35|35|400|2|20|7|
    
    And User click the submit button1
    Then verify the tariff plan added 


