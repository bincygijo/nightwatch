
Feature: Account Menu Verification after checkout
  Feature Description: This feature file consists of tests related to verifying orders under Account Menu


@smoke
@sage300
@regression
@addToCartAdminSettings
@b2buser
Scenario: As a B2B User, I want to enable the AddToCart settings in the admin for B2B and B2C user
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I update B2B add-to-cart related features and click update button
Then I see "Your Site Features have been updated" message
When I click on B2C Public settings 
  And I update B2C add-to-cart related features and click update button
Then I see "Your Public Features have been updated" message

@smoke
@tax
@sage300
@searchByCategory
@standardProducts
@b2buser
@XMECOM-7863
Scenario Outline: As a B2B User,  For each UOM I want to add product to cart and verify the cart summary for totals and one page summary
Given I am on the storePHP page
When I switch customer
  | Cust Type | Test Customer |
  | B2B       | ACME Plumbing | 
And I click on the category "Standard Products"
Then I should see all the products in "Standard Products"
When I click on the product "Fluorescent Desk Lamp"
Then I should see the product detail page
When I click "4" different UOMs below one by one and update qty as "7" and click add to cart
  |<each>|<dozen>|<Case> |<Crate>|
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | percent57  |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for different UOMs of product "Fluorescent Desk Lamp" - Cart Calculations are correct
  |<each>|<dozen>|<Case> |<Crate>|
  And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "Receiving Dock A" shipping address and click continue
Then "UPS" Shipping has below methods and rates listed successfully
    |UPS Standard     |
    |US$28.23         |
When I choose "UPS" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
Examples:
|each |dozen |Case |Crate | 
|Ea.  |Dozen |Case |Crate | 

@smoke
@tax
@sage300
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with flat discount.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | ACME Plumbing | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "Receiving Dock A" shipping address and click continue
Then "UPS" Shipping has below methods and rates listed successfully
    |UPS Standard     |
    |US$28.23         |
When I choose "UPS" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
Examples:
    |pro1                        | pro2                       | pro3           | orderType1 | orderType2 | orderType3   |   pcode |       
    |Krugg 220 Arm Tilter-Brown  | Filing Cabinet - 4 Drawers | Desk Note Book | Preorder   | Backorder  | Normal Order |   flat2799 |

@smoke
@tax
@sage300
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with percent discount coupon.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | ACME Plumbing | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "Receiving Dock A" shipping address and click continue
Then "UPS" Shipping has below methods and rates listed successfully
    |UPS Standard     |
    |US$28.23         |
When I choose "UPS" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
Examples:
    |pro1                        | pro2                       | pro3           | orderType1 | orderType2 | orderType3   |   pcode      |       
    |Krugg 220 Arm Tilter-Brown  | Filing Cabinet - 4 Drawers | Desk Note Book | Preorder   | Backorder  | Normal Order |   percent57  |

@smoke
@tax
@sage300
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with buy X get Y free discount coupon.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | ACME Plumbing | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "Receiving Dock A" shipping address and click continue
Then "UPS" Shipping has below methods and rates listed successfully
    |UPS Standard     |
    |US$28.23         |
When I choose "UPS" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
Examples:
    |pro1                        | pro2                       | pro3           | orderType1 | orderType2 | orderType3   |   pcode      |       
    |Krugg 220 Arm Tilter-Brown  | Filing Cabinet - 4 Drawers | Desk Note Book | Preorder   | Backorder  | Normal Order |   XYPromo    |



#X3 ------------------------------------- Scenarios starts here -------------------------------------

@smokeX3
@taxX3
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
@XMECOM-8047
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with flat discount.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | FULLHAMMER    | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "218 CHESTERVILLE RD" shipping address and click continue
  And I choose "Ground Shipping" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
#And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | A01936        | 
Examples:
    |pro1                                | pro2                     | pro3               | orderType1 | orderType2 | orderType3     |   pcode    |       
    |RICHMOND TIGERS AFL INFANT SCARF  | SUPER COACH SKILL SET    | STANCEBEAM STRIKER | Preorder   | Backorder  | Normal Order   |   flat2799 |

@smokeX3
@taxX3
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
@XMECOM-8047
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with percent discount coupon.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | FULLHAMMER    | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "218 CHESTERVILLE RD" shipping address and click continue
  And I choose "Ground Shipping" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
#And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | A01936        | 
Examples:
    |pro1                               | pro2                     | pro3                | orderType1 | orderType2 | orderType3   |   pcode      |       
    |RICHMOND TIGERS AFL INFANT SCARF | SUPER COACH SKILL SET    | STANCEBEAM STRIKER  | Preorder   | Backorder  | Normal Order |   percent57  |

@smokeX3
@taxX3
@b2buser
@XMECOM-6474
@XMECOM-6427
@XMECOM-7859
@XMECOM-7863
@XMECOM-8047
Scenario Outline:AS a B2B User,I want to checkout order, verify order summary vs cart summary pre-order backorder tax etc with buy X get Y free discount coupon.
Given I am on the storePHP page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | FULLHAMMER    | 
And I click on the category "Checkout Order"
Then I should see all the products in "Checkout Order"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
When I click on Cart icon Button
When I enter the promotion code in the "Cart" page
     | Promo Code |
     | <pcode>    |
Then I should see "Promotion has been added" message in the "Cart" page
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | 
    | <pro1>       | <pro2>       | <pro3>       | 
    | <orderType1> | <orderType2> | <orderType3> | 
 And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
When I click on Proceed to checkout 
Then  One page checkout page is shown
When I choose "218 CHESTERVILLE RD" shipping address and click continue
  And I choose "Ground Shipping" shipping method and click on Continue button 
Then I should see "On Account" payment method is listed successfully 
When I choose account payment method and click on Continue button 
When I verify Order Summary
  And I fill necessary details and place order successfully
Then I should see order has been placed and verified successfully
When I click on Account Menu
Then I should see "Orders" details for recent order matching with one page
#And I should see "Back Orders" details for recent order matching with one page
And I should see "Pre Orders" details for recent order matching with one page
When I switch customer
    | Cust Type | Test Customer |
    | B2B       | A01936        | 
Examples:
    |pro1                                | pro2                     | pro3               | orderType1 | orderType2 | orderType3   |   pcode      |       
    |RICHMOND TIGERS AFL INFANT SCARF  | SUPER COACH SKILL SET    | STANCEBEAM STRIKER | Preorder   | Backorder  | Normal Order |   XYPromo    |