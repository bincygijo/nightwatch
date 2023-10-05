
Feature: Clean up or basic set up/pre-work for following test cases
  Feature Description: This feature file consists of tests related cleaning up test data for failed test cases or set up some basic structure for following test cases
   
@smoke
@sage300
@contentManagement   
@cartGrid
@CartListingModule
@CartPageTitleModule
@Cartpreorder
@cartbackorder
@cartactionbuttons
@cartSummaryModule
@xmecom-7126
@xmecom-7174
Scenario: As a B2B User,I want to add Cart grid configuration at cart level
    Given I am on the Manage default dealer page
    When I click Edit button on the "Cart" link
    Then I should navigate to manage site content page
    When I click Add Container button
    Then I should see grid msg "Container created successfully."
    When I click on the Edit Content link
    And I select "Page Title" from the Content list
    And I enter "Shopping Cart" and click Apply  
    Then I should see grid msg "Contents have been updated."
    When I add New Column by clicking New Column button
    And I select Available column size "5" and "Cart Action Buttons" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart action buttons Module"
    Then I update the Cart Action Buttons Module settings pop up
    When I add New Column by clicking New Column button
    And I select Available column size "4" and "Cart ShipTo" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "3" and "Cart Warehouse Selector" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Listing" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart listing Module" 
    Then I click Apply button and I should see details updated successfully
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Pre-order" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Back Order" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "6" and "Cart Promotion" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "6" and "Cart Summary" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart summary Module"
    Then I update the settings on the Sage 300 Cart summary pop up Module

@smokeX3
@smoke
@sage300
@contentManagement   
@userAccountGrid
Scenario: As a B2B User,I want to add new grid for user account and verify the user account grid in the front end
    Given I am on the Manage default dealer page
    When I click Edit button on the "User Account" link
    Then I should navigate to manage site content page
    When I click Add Container button
    Then I should see grid msg "Container created successfully."
    When I click on the Edit Content link
    And I select "Account Menu" from the Content list
        And I click Apply button on the warning pop up window and close pop up
    When I add New Column by clicking New Column button
        And I select Available column size "12" and "Account Default Content Placeholder" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click on WebStore button
        And I click on the Account link
    Then I should see User Account Grid applied


@smokeX3
@xm
@contentManagement   
@cartGrid
@CartListingModule
@CartPageTitleModule
@Cartpreorder
@cartbackorder
@cartactionbuttons
@cartSummaryModule
@xmecom-7126
@xmecom-7174
Scenario: As a B2B User,I want to add Cart grid configuration at cart level
    Given I am on the Manage default dealer page
    When I click Edit button on the "Cart" link
    Then I should navigate to manage site content page
    When I click Add Container button
    Then I should see grid msg "Container created successfully."
    When I click on the Edit Content link
    And I select "Page Title" from the Content list
    And I enter "Shopping Cart" and click Apply  
    Then I should see grid msg "Contents have been updated."
    When I add New Column by clicking New Column button
    And I select Available column size "5" and "Cart Action Buttons" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart action buttons Module"
    Then I update the Cart Action Buttons Module settings pop up
    When I add New Column by clicking New Column button
    And I select Available column size "4" and "Cart ShipTo" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "3" and "Cart Warehouse Selector" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Listing" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart listing Module" 
    Then I click Apply button and I should see details updated successfully
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Pre-order" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "12" and "Cart Back Order" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "6" and "Cart Promotion" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I add New Column by clicking New Column button
    And I select Available column size "6" and "Cart Summary" from the New Column list
    Then I should see grid msg "New column added successfully."
    When I click edit button on the "Cart summary Module"
    Then I update the settings on the X3 Cart summary pop up Module