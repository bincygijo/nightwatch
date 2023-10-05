Feature: Site Feature settings 
  Feature Description: This feature file consists of tests related to feature settings page

# no grid is used on account menu during testing these features
@smoke
@sage300
@siteFeatureSettings
@b2buser
@PDECOM-201
Scenario: As a B2B User, I want to disable Allow Add To Cart for Zero Priced Items settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Allow Add To Cart for Zero Priced Items" as "off" and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I search for the product "shzen001" in the search box and click search Icon
Then I am On search listing page and I should verify Add to cart button is not shown
When I click on the product "SHZEN Component 001"
Then I should verify Add to cart button is not shown on product details page

@smoke
@sage300
@siteFeatureSettings
@b2buser
@PDECOM-201
Scenario: As a B2B User, I want to enable Allow Add To Cart for Zero Priced Items settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Allow Add To Cart for Zero Priced Items" as "on" and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I search for the product "shzen001" in the search box and click search Icon
Then I should verify Add to cart button is shown on product listing page 
When I click on the product "SHZEN Component 001"
Then I should verify Add to cart button is shown on product details page

@smoke
@smokeX3
@sage300
@siteFeatureSettings
@b2buser
@PDECOM-198
Scenario: As a B2B User, I want to disable Enable Payment for Open Invoice settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Enable Payment for Open Invoice" as "off" and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I click on Account Menu
  And I click "Transaction History" under Account Menu
Then I see "Transaction History" Menu page successfully loaded
  And I can verify "Pay Open Invoice" link "is NOT" available

@smoke
@sage300
@smokeX3
@siteFeatureSettings
@b2buser
@PDECOM-201
Scenario: As a B2B User, I want to enable Enable Payment for Open Invoice settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Enable Payment for Open Invoice" as "on" and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I click on Account Menu
  And I click "Transaction History" under Account Menu
Then I see "Transaction History" Menu page successfully loaded
And I can verify "Pay Open Invoice" link "is" available

@smoke
@smokeX3
@sage300
@siteFeatureSettings
@b2buser
@PDECOM-304
Scenario: As a B2B User, I want to disable Enable Decimal places support settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Enable Decimal places support" as "on" and click update button
  And I update feature "enable_display_decimal_places_value" value to "4"
  And I click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I click on Account Menu
  And I click "Orders" under Account Menu
Then I see "Orders" Menu page successfully loaded
  Then I can verify unit price showing "4" decimals on "Order Details" page 
When I click "Transaction History" under Account Menu
  And I click open first invoice under Pay Open Invoice
Then I can verify unit price showing "4" decimals on "Invoice" page 

@smoke
@smokeX3
@sage300
@siteFeatureSettings
@b2buser
@PDECOM-304
Scenario: As a B2B User, I want to enable Enable Decimal places support settings in the admin for B2B user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B "Enable Decimal places support" as "off" and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I click on Account Menu
  And I click "Orders" under Account Menu
Then I see "Orders" Menu page successfully loaded
  And I can verify unit price showing "2" decimals on "Order Details" page
  When I click "Transaction History" under Account Menu
  And I click open first invoice under Pay Open Invoice
Then I can verify unit price showing "2" decimals on "Invoice" page 
