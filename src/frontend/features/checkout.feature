
Feature: Checkout
  Feature Description: This feature file consists of tests related to checkout in StorePHP

@smoke
@sage300
@guestuser
@paypal
@XMECOM-6599
Scenario: As a Guest User ,I want to checkout products using paypal payment method
Given I am on the Home page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
Then I should see onepage for guest checkout 
When I click Paypal checkout button
Then I should navigate to paypal sandbox page
#When I click on Log In button
And I enter Email id and click Next button
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click on Place Order button in the review order page
Then I should see order has been placed successfully


@smoke
@sage300
@b2cuser
@creditcard
@XMECOM-6979
Scenario Outline: As a B2C User ,I want to checkout products using Credit card payment method
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "Credit Card" payment method is listed successfully
When I select "Credit Card" payment method
And I choose credit card type is "Visa" and enter the card details
|CardHolder Name  |Creditcard Number|Security Code|
|<cName>          |<cNumber>        |<sCode>|
Then I should see review order page 
When I click Place Order button in the review order page
Then I should see order has been placed successfully
Examples:
| cName        | cNumber          |sCode|
|testautomation|4111111111111111  |123  |


@regression
@sage300
@b2cuser
@paypal
@XMECOM-6979
Scenario: As a B2C User ,I want to checkout products using Paypal payment method
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "Paypal" payment method is listed successfully
When I select "Paypal" payment method and click Continue button
#When I click on Log In button
Then I enter Email id and click Next button in the paypal sandbox page
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click on Place Order button in the review order page
Then I should see order has been placed successfully


@smoke
@sage300
@b2cuser
@eftPayment
@XMECOM-6993
Scenario: As a B2C User ,I want to checkout products using EFT payment method
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "EFT Payment" payment method is listed successfully
When I select "EFT Payment" payment method
And I click Continue button 
When I click Place Order button in the review order page
Then I should see order has been placed successfully

@regression
@sage300
@b2buser
@creditcard
@XMECOM-6993
Scenario Outline: As a B2B User ,I want to checkout products using Credit card payment method
Given I am on the storePHP page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button after selecting shipping address 
And I select shipping method and click Continue button  
Then I should see "Credit Card" payment method is listed successfully
When I select "Credit Card" payment method
And I choose credit card type is "Visa" and enter the card details
|CardHolder Name  |Creditcard Number|Security Code|
|<cName>          |<cNumber>        |<sCode>|
Then I should see review order page 
When I click Accept Terms and Conditions checkbox
And  I click Place Order button in the review order page
Then I should see order has been placed successfully
Examples:
| cName        | cNumber          |sCode|
|testautomation|4111111111111111  |123  |


@regression
@sage300
@b2buser
@paypal
@XMECOM-6993
Scenario: As a B2B User ,I want to checkout products using Paypal payment method
Given I am on the storePHP page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |Volume Pricing Test|
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button after selecting shipping address
And I select shipping method and click Continue button  
Then I should see "Paypal" payment method is listed successfully
When I select "Paypal" payment method and click Continue button
#When I click on Log In button
Then I enter Email id and click Next button in the paypal sandbox page
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click Accept Terms and Conditions checkbox
And I click on Place Order button in the review order page
Then I should see order has been placed successfully

#X3 ------------------------------------- Scenarios starts here -------------------------------------

@smokeX3
@xm
@guestuser
@paypal
@XMECOM-6599
Scenario: As a Guest User ,I want to checkout products using paypal payment method
Given I am on the Home page
When I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
  And I click on the product "STANCEBEAM STRIKER"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name            |
 |STANCEBEAM STRIKER      |
 | Normal Order           |
When I click on Proceed to checkout 
Then I should see onepage for guest checkout 
When I click Paypal checkout button
Then I should navigate to paypal sandbox page
#When I click on Log In button
And I enter Email id and click Next button
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click on Place Order button in the review order page
Then I should see order has been placed successfully

@smokeX3
@xm
@b2cuser
@creditcard
@XMECOM-6993
Scenario Outline: As a B2C User ,I want to checkout products using Credit card payment method
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I search for the product "STUMP GAUGE" in the search box and click search Icon
  And I click on the product "STUMP GAUGE"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name      |
 |STUMP GAUGE       |
 | Normal Order     |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "Credit Card" payment method is listed successfully
When I select "Credit Card" payment method
And I choose credit card type is "Visa" and enter the card details
|CardHolder Name  |Creditcard Number|Security Code|
|<cName>          |<cNumber>        |<sCode>|
Then I should see review order page 
When I click Place Order button in the review order page
When I should see order has been placed successfully
Examples:
|cName         | cNumber          |sCode|
|testautomation|4111111111111111  |123  |

@smokeX3
@xm
@b2cuser
@paypal
@XMECOM-6993
Scenario: As a B2C User ,I want to checkout products using Paypal payment method
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
  And I click on the product "STANCEBEAM STRIKER"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name      |
 |STANCEBEAM STRIKER|
 | Normal Order     |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "Paypal" payment method is listed successfully
When I select "Paypal" payment method
And I click Continue button on the one page 
Then I should navigate to paypal sandbox page
#When I click on Log In button
And I enter Email id and click Next button
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click on Place Order button in the review order page
Then I should see order has been placed successfully

@smokeX3
@xm
@b2cuser
@eftPayment
@XMECOM-6993
Scenario: As a B2C User ,I want to checkout products using EFT payment method
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I search for the product "STUMP GAUGE" in the search box and click search Icon
  And I click on the product "STUMP GAUGE"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name   |
 |STUMP GAUGE    |
 | Normal Order  |
When I click on Proceed to checkout 
And I click on Continue button on onepage checkout page 
And I select shipping method and click Continue button  
Then I should see "EFT Payment" payment method is listed successfully
When I select "EFT Payment" payment method
And I click Continue button 
When I click Place Order button in the review order page
Then I should see order has been placed successfully

@smokeX3
@xm
@b2buser
@creditcard
@XMECOM-6993
Scenario Outline: As a B2B User ,I want to checkout products using Credit card payment method
Given I am on the storePHP page
When I search for the product "STUMP GAUGE" in the search box and click search Icon
  And I click on the product "STUMP GAUGE"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name |
 |STUMP GAUGE  |
 | Normal Order|
When I click on Proceed to checkout 
And I click on Continue button after selecting shipping address 
And I select shipping method and click Continue button  
Then I should see "Credit Card" payment method is listed successfully
When I select "Credit Card" payment method
And I choose credit card type is "Visa" and enter the card details
|CardHolder Name  |Creditcard Number|Security Code|
|<cName>          |<cNumber>        |<sCode>|
Then I should see review order page 
When  I click Place Order button in the review order page
Then I should see order has been placed successfully
Examples:
| cName        | cNumber          |sCode|
|testautomation|4111111111111111  |123  |

@smokeX3
@xm
@b2buser
@paypal
@XMECOM-6993
Scenario: As a B2B User ,I want to checkout products using Paypal payment method
Given I am on the storePHP page
When I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
  And I click on the product "STANCEBEAM STRIKER"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
 |Product Name       |
 |STANCEBEAM STRIKER |
 | Normal Order      |
When I click on Proceed to checkout 
And I click on Continue button after selecting shipping address
And I select shipping method and click Continue button  
Then I should see "Paypal" payment method is listed successfully
When I select "Paypal" payment method
And I click Continue button on the one page 
Then I should navigate to paypal sandbox page
#When I click on Log In button
And I enter Email id and click Next button
And I enter password and click Log In button
And I click Continue button on the paypal detail page
Then I should navigate to review order page 
When I click on Place Order button in the review order page
Then I should see order has been placed successfully