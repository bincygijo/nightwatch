Feature: Carton Management
    Feature Description: This feature file consists of tests related to carton module in Admin

    @smoke
    @sage300
    @carton
    Scenario: As an admin, I want to navigate to carton Management Page
        Given I am on the admin dashboard
        When I click on the System link from the admin side menu
            And I click on the Shipping Setup link
            And I click on the Cartons link
        Then I should see the "Shipping Cartons Management" loaded successfully
        When I click on Add Carton button
        Then A new carton row is added successfully
        When I enter all the carton details and click Save
        Then the new carton is created successfully
        When I click the delete button on the newly created carton
        Then the carton should be deleted successfully
        

        #X only Scenarios 
    @smokeX3
    @xm
    @carton
    Scenario: As an admin, I want to navigate to carton Management Page
        Given I am on the admin dashboard
        When I click on the System link from the admin side menu
            And I click on the Shipping Setup link
            And I click on the Cartons link
        Then I should see the "Shipping Cartons Management" loaded successfully
        When I click on Add Carton button
        Then A new carton row is added successfully
        When I enter all the carton details and click Save
        Then the new carton is created successfully
        When I click the delete button on the newly created carton
        Then the carton should be deleted successfully