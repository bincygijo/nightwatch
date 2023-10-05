Feature: Ship-to custom fields
  Feature Description: This feature file consists of tests related to Shipping module in Admin

  @regression
  @smokeX3
  @sage300
  @Shipping
  Scenario: As an admin I want to enable the feature custom fields for ship-to location and verify custom ship-to is enabled and fields are assigned.
    Given I am on the admin dashboard
    When I click on the Sage Integration link
      And I click on the Master Admin link
      And I click on the Add On Features link
    Then I should see the addOnFeatures page
    When I click on the Customer Ship-to Custom Fields button
      And I click on the apply button to save settings
    Then I should see "Custom Settings Saved successfully" message 
    When I click on Customer Menu
      And I click on Customer settings Menu
      And I click on Custom Fields Ship-to Menu
    Then I should see Customer Ship-to Custom Fields page
    When I click on add new custom fields if not added already
      | Primary Warehouse | Secondary Warehouse | Third Warehouse | Fourth Warehouse | 
    Then I should see "The customer ship-to custom fields have been verified successfully" message

  @regression
  @sage300
  @Shipping
  Scenario Outline: As an admin I want to assign custom-ship-to fields to shipping location to influence warehouse order in cart page
  Given I am on the admin dashboard
   When I click on Customer Menu
	  And I click on Sage Accounts Menu
	  And I click on Customer Listings Menu
  Then Customer Listing page is loaded successfully
	When I search for "Elan Marikit" Customer
  Then I find entry for Customer "Elan Marikit"
  When I click on Locations button
    Then Ship-to Location Management page is shown successfully
  When I search for "Bashaw Buulldozing" location and hit Go button
    Then I find entry for "Bashaw Buulldozing" location
  When I click on Edit button for "Bashaw Buulldozing" location 
  Then Ship-to Location Management page is shown successfully
  When I click on Custom Fields Dropdown and set below values
    | Primary Warehouse | Secondary Warehouse | Third Warehouse   | Fourth Warehouse |
    | <pwarehouse>      | <swarehouse>        | <twarehouse>      | <fwarehouse>    |
    And I click on Update Custom Fields button
  Then Custom ship-to fields are assigned to Location and message "Successfully updated customer ship-to custom fields" is shown
  Examples:
    | pwarehouse        | swarehouse         | twarehouse      | fwarehouse      |
    | Port of Vancouver | Newark, New Jersey | Portland Office | Central warehouse - Seattle |

#remember to update constant file for this feature if new product & address is to be tested
  @regression
  @sage300
  @Shipping
  Scenario Outline: As a B2B user verify if warehouse order on cart page is as per order of custom ship-to fields for location chosen on cart page
    Given I am on the Homepage as B2B user
    When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
    When I click on the category "Standard Products"
      Then I should see all the products in "Standard Products"
    When I click on the product "Pen"
     And I update quantity as "5" and click on Add to Cart button
      Then I should see msg "Item has been added to your cart."
    When I click on Cart icon Button
      Then Shopping Cart page is displayed successfully
    When I click on shipping-to link and ensure shipping address is set to "2398 Colorado cres"
      Then Warehouse order on cart matches with admin setting for that shipping-to location
    | ItemNo   | Primary Warehouse | Secondary Warehouse | Third Warehouse   | Fourth Warehouse |
    | <itemNo> | <pwarehouse>      | <swarehouse>        | <twarehouse>      | <fwarehouse>     |
      Examples:
    | itemNo   | pwarehouse        | swarehouse         | twarehouse      | fwarehouse                  |
    | A16550   | Port of Vancouver | Newark, New Jersey | Portland Office | Central warehouse - Seattle |


    # X3 only Scenarios below 

  @smokeX3
  @xm
  @Shipping
  Scenario Outline: As an admin I want to assign custom-ship-to fields to shipping location to influence warehouse order in cart page
  Given I am on the admin dashboard
   When I click on Customer Menu
	  And I click on Sage Accounts Menu
	  And I click on Customer Listings Menu
  Then Customer Listing page is loaded successfully
	When I search for "A01936" Customer
  Then I find entry for Customer "A01936"
  When I click on Locations button
    Then Ship-to Location Management page is shown successfully
  When I search for "DELIVERY" location and hit Go button
    Then I find entry for "DELIVERY" location
  When I click on Edit button for "DELIVERY" location 
  Then Ship-to Location Management page is shown successfully
  When I click on Custom Fields Dropdown and set below values
    | Primary Warehouse | Secondary Warehouse | Third Warehouse   | 
    | <pwarehouse>      | <swarehouse>        | <twarehouse>      | 
    And I click on Update Custom Fields button
  Then Custom ship-to fields are assigned to Location and message "Successfully updated customer ship-to custom fields" is shown
  Examples:
    | pwarehouse     | swarehouse  | twarehouse  | 
    | KSA - Sales    | KRL - Sales | KNZ - Sales | 

#remember to update constant file for this feature if new product & address is to be tested
  @smokeX3
  @xm
  @Shipping
  Scenario Outline: As a B2B user verify if warehouse order on cart page is as per order of custom ship-to fields for location chosen on cart page
    Given I am on the Homepage as B2B user
    #When I switch B2B customer to "WEB SALES"
    When  I search for the product "7T183202D" in the search box and click search Icon
      And I click on the product "KB PRO PLAYERS WRISTBAND 11 CM"
    Then I should see the product detail page
    When I update quantity as "2" and click on Add to Cart button
    Then I should see msg "Item has been added to your cart."
    When I click on Cart icon Button
    Then Shopping Cart page is displayed successfully
    When I click on shipping-to link and ensure shipping address is set to "218 CHESTERVILLE RD"
    Then Warehouse order on cart matches with admin setting for that shipping-to location
    | ItemNo   | Primary Warehouse | Secondary Warehouse | Third Warehouse  | 
    | <itemNo> | <pwarehouse>      | <swarehouse>        | <twarehouse>     | 
      Examples:
    | itemNo  | pwarehouse     | swarehouse  | twarehouse  | 
    | 7T183202D | KSA - Sales    | KRL - Sales | KNZ - Sales |  