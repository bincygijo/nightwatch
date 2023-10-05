Feature: Elasticsearch
  Feature Description: This feature file consists of tests related to Elasticsearch module in Admin


  @smoke
  @sage300
  @elasticsearch
  Scenario: As an admin I want to reindex the site
    Given I am on the admin dashboard
    When I click on the Catalog link
      And I click on the Product Settings link
      And I click on the Elasticsearch link
    Then I should see the elasticsearch manage modules page
    When I click on the reindex button
    Then I should see the job in progress info pop up
    When I refresh the page the status should say "FINISHED"

  #X3 only scenarios
  
  @smokeX3
  @xm
  @elasticsearch
  Scenario: As an admin I want to reindex the site
    Given I am on the admin dashboard
    When I click on the Catalog link
      And I click on the Product Settings link
      And I click on the Elasticsearch link
    Then I should see the elasticsearch manage modules page
    When I click on the reindex button
    Then I should see the job in progress info pop up
    When I refresh the page the status should say "FINISHED"




