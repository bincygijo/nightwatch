Feature: Products
  Feature Description: This feature file consists of tests relates to Catalog > products > product variations module in Admin

  @regression
  @sage300
  @products
  Scenario: Add a warehouse restriction to the product and remove it
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "YELLOW003" and click edit
    Then I should see the product general settings page
    When I add a warehouse restriction "Blue" for that product and click Save button
    Then I should see the warehouse restriction is applied for the product successfully
    When I remove the warehouse restriction for the same product and click Save button
    Then I should see the product updated successfully 

  @regression
  @sage300
  @configuratorProduct
  Scenario:As a B2B User ,I want to navigate to the configurator products page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Configurator link
      And I click on the Configurator Products link
    Then I should navigated to the Configurator Products page

  @smoke
  @sage300
  @customField
  Scenario: As a B2B User ,I want to navigate to Custom fields page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Settings link
      And I click on the Custom Fields link
    Then I should navigated to the Custom Fields page


  @smoke
  @sage300
  @products
  @xmecom-7858
  Scenario: As a B2B User , I want to verify product code and price in the front end
    Given I am on the storePHP page
    When I search for the product "Volume Pricing Test" in the search box and click search Icon
    And I click on the product "Volume Pricing Test"
    Then I should verify the product code "Volume Pricing Test" and price "US$150.00" in product detail page

  @smoke
  @sage300
  @products
  @InclusionByCustomer
  @xmecom-7860
  Scenario: As a B2B User , I want to apply Inclusion for the customer level and search the product in the front end
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "SCHOEN" and click edit
    Then I should see the product general settings page 
    When I apply for inclusion for the customer "1200" in the product level
    And I click on WebStore button in the admin dashboard 
    And I search for the product "Schoen Water bottle" in the search box and click search Icon
    Then I should see "There are no products matching the selection"

  @smoke
  @sage300
  @products
  @InclusionBySwitchCustomer
  @xmecom-7879
  Scenario: As a B2B User , I want to apply Inclusion for a specific customer and search the product in the front end
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "PANELFASTNERPCS" and click edit
    Then I should see the product general settings page 
    When I apply for inclusion for the customer "ACME Plumbing" in the product level
    And I click on WebStore button in the admin dashboard 
    When I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Engineered Fasteners 600 PCS" in the search box and click search Icon
    And I should verify the product "Engineered Fasteners 600 PCS" in product listing page
    Then I switch back to default customer
      | Cust Type | Test Customer |
      | B2B       | Elan Marikit  | 

  @smoke
  @sage300
  @products
  @exclusionByCustomer
  @xmecom-7974
  Scenario: As a B2B User , I want to apply exclusion for the customer level and search the product in the front end
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "SHZEN001" and click edit
    Then I should see the product general settings page 
    When I apply for exclusion for the customer "1200" in the product level
    And I click on WebStore button in the admin dashboard 
    And I search for the product "SHZEN001" in the search box and click search Icon
    Then I should verify the product "SHZEN Component 001" in product listing page

  @smoke
  @sage300
  @products
  @ExclusionBySwitchCustomer
  @xmecom-7974
  Scenario: As a B2B User , I want to apply Exclusion for a specific customer and search the product in the front end
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "BRICKMILBEI" and click edit
    Then I should see the product general settings page 
    When I apply for exclusion for the customer "ACME Plumbing" in the product level
    And I click on WebStore button in the admin dashboard 
    When I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "BRICKMILBEI" in the search box and click search Icon
    And I should see "There are no products matching the selection"
    Then I switch back to default customer
      | Cust Type | Test Customer |
      | B2B       | Elan Marikit  | 
 
  @smokeX3
  @xm
  @products
  Scenario: Add a warehouse restriction to the product and remove it
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Products link
    Then I should see the Product Management page
    When I search for a product code "6S10141" and click edit
    Then I should see the product general settings page
    When I add a warehouse restriction "KSA - Production" for that product and click Save button
    Then I should see the warehouse restriction is applied for the product successfully
    When I remove the warehouse restriction for the same product and click Save button
    Then I should see the product updated successfully 

 
 
  @smokeX3
  @xm
  @configuratorProduct
  Scenario:As a B2B User ,I want to navigate to the configurator products page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Configurator link
      And I click on the Configurator Products link
    Then I should navigated to the Configurator Products page

  @smokeX3
  @xm
  @customField
  Scenario: As a B2B User ,I want to navigate to Custom fields page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Settings link
      And I click on the Custom Fields link
    Then I should navigated to the Custom Fields page