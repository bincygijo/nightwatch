Feature: Promotions
  Feature Description: This feature file consists of tests related to promotion module in Admin


  @regression
  @sage300
  @promoCode
  Scenario:  As a B2B User ,I want to navigate to promo page
    Given I am on the admin dashboard
    When  I click the Promotions link
      And   I click on the Promo link
    Then  I should navigated to Promotion code for promo page
  
  @regression
  @tax
  @sage300
  @promoCode
  @amount
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Amount)  and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
    And  I enter promo discount based on "Amount" details and click Apply
      | Promo Code | Description | Amount   | PromotionType|
      | <pcode>    | <desc>      | <amount> | <type>       |
    Then The promotion code is created successfully
    When I click on WebStore button
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
    |PromotionType       | Amount   |
    | <type>             | <amount> |
    And I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |Volume Pricing Test |
    | Normal Order       |
    And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode        | desc         | amount   | type|
      | amt50        | amt50        | 50       | flat|


  @smoke
  @tax
  @sage300
  @promoCode
  @discount
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Discount) and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
     When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
      And  I enter promo discount based on "Discount" details and click Apply
      | Promo Code | Description | Discount   | PromotionType|
      | <pcode>    | <desc>      | <discount> | <type>|
    Then The promotion code is created successfully
    When I click on WebStore button
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
   | PromotionType| Discount   |
   | <type>       | <discount> |
    And I should verify for below product - Cart Calculations are correct
   |Product Name        |
   |Volume Pricing Test |
   | Normal Order       |
   And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
   Examples:
      | pcode                | desc                 | discount |type      |
      | discount15           | discount15           | 15       |percentage|


  @smoke
  @tax
  @sage300
  @promoCode
  @buyXgetYfree
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Buy X get Y free) and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
      And  I enter promo discount based on "Buy X get Y free" details and click Apply
      | Promo Code | Description |Item1  |Item2   | 
      | <pcode>    | <desc>      |<item1> |<item2>|
    Then The promotion code is created successfully
    When I click on WebStore button
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Fluorescent Desk Lamp" in the search box and click search Icon
      And I click on the product "Fluorescent Desk Lamp"
    Then I should see the product detail page
    When I update quantity as "2" and click on Add to Cart button
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I should verify for below product - Cart Calculations are correct
    |Product Name          |
    |Fluorescent Desk Lamp |
    | Normal Order         |
    And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode          | desc            | item1    |item2 |  
      | buyXgetYFree   | buyXgetYFree    | A11030   |A11050| 

  @regression
  @tax
  @sage300
  @promoCode
  @amount
  @XMECOM-7503
  @freeShipping
  Scenario Outline: As a B2B User ,I want to add free shipping and verify in the front end onepage checkout page
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
    And  I enter promo discount based on "Amount" details and click Apply
      | Promo Code | Description | Amount   | Shipping |PromotionType|
      | <pcode>    | <desc>      | <amount> | <free>   |<type>|
    Then The promotion code is created successfully
    When I click on WebStore button
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
    |PromotionType       | Amount   |
    | <type>             | <amount> |
    Then I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |Volume Pricing Test |
    | Normal Order       |
    #And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I click on Proceed to checkout 
   And I click on Continue button after selecting shipping address 
   Then I should verify the "Free Shipping Promo US$0.00" in the shipping method page
   
    When I remove the promotion from the cart page after checking free shipping
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode        | desc         | amount | free|type|
      | freeflat50   | free50       | 50     |  on |flat|


  @regression
  @tax
  @sage300
  @promoCode
  @amount
  @XMECOM-7520
  @freeShippingDiscount
  Scenario Outline: As a B2B User ,I want to add free shipping(discount) and verify in the front end onepage checkout page
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
    And  I enter promo discount based on "Discount" details and click Apply
      | Promo Code | Description | Discount   | Shipping|PromotionType|
      | <pcode>    | <desc>      | <discount> | <free>  |<type>|
    Then The promotion code is created successfully
    When I click on WebStore button
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
    |PromotionType       | Discount   |
    | <type>             | <discount> |
    Then I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |Volume Pricing Test |
    | Normal Order       |
    #And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I click on Proceed to checkout 
   And I click on Continue button after selecting shipping address 
   Then I should verify the "Free Shipping Promo US$0.00" in the shipping method page
   When I remove the promotion from the cart page after checking free shipping
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode       | desc        | discount | free|type|
      | discount25  | discount25  | 25       |  on |percentage|  

  @regression
  @tax
  @sage300
  @promoCode
  @amount
  @promousage
  @unlimited
  @XMECOM-7661
  Scenario Outline: As a B2B User ,I want to add Unlimited Usage  and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
    And  I enter promo discount based on "Amount" details and apply Unlimited Usage
      | Promo Code | Description | Amount   | PromoUsage|PromotionType|
      | <pcode>    | <desc>      | <amount> | <usage>   |<type>|
    Then The promotion code is created successfully
     When I click on WebStore button
     And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | ACME Plumbing | 
    And I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
    |PromotionType       | Amount   |
    | <type>             | <amount> |
    And I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |Volume Pricing Test |
    | Normal Order       |
    And I verify state tax as '6.25' percentage and county tax as '2.00' percentage
    When I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode         | desc         | amount   |usage| type|
      | UsageUnltd    | UsageUnltd   | 50       |on   | flat|


  @regression
  @sage300
  @promoCode
  @amount
  @promousage
  @limited
  @XMECOM-7705
  Scenario Outline: As a B2B User ,I want to add limited Usage  and verify promotion in  the front end and delete the same promo
    Given I am on the storePHP page
    And  I switch customer
      | Cust Type | Test Customer |
      | B2B       | Elan Marikit | 
    When I search for the product "Volume Pricing Test" in the search box and click search Icon
      And I click on the product "Volume Pricing Test"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "That promotion code could not be applied." message in the "Cart" page
    Examples:
      | pcode          | desc         |
      | limit2         | limit2       | 
#X3 --------- Scenarios starts here ---------

  @smokeX3
  @xm
  @promoCode
  Scenario:  As a B2B User ,I want to navigate to promo page
    Given I am on the admin dashboard
    When  I click the Promotions link
      And   I click on the Promo link
    Then  I should navigated to Promotion code for promo page

  @smokeX3
  @taxX3
  @xm
  @promoCode
  @amount
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Amount)  and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
    When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
      And  I enter promo discount based on "Amount" details and click Apply
      | Promo Code | Description | Amount   |PromotionType|
      | <pcode>    | <desc>      | <amount> |<type>       |
    Then The promotion code is created successfully
    When I click on WebStore button
    And I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
      And I click on the product "STANCEBEAM STRIKER"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
   When I verify the promotion discount applied to the product
    |PromotionType       | Amount   |
    | <type>             | <amount> |
    And I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |STANCEBEAM STRIKER  |
    | Normal Order       |
    And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
    And I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode   | desc    | amount  |type|
      |flat20   | pro20   | 20      |flat|
  
  @smokeX3
  @taxX3
  @xm
  @promoCode
  @discount
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Discount) and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
   When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
      And  I enter promo discount based on "Discount" details and click Apply
      | Promo Code | Description | Discount   |PromotionType|
      | <pcode>    | <desc>      | <discount> |<type>       |
    Then The promotion code is created successfully
    When I click on WebStore button
    And I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
      And I click on the product "STANCEBEAM STRIKER"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
     When I verify the promotion discount applied to the product
   | PromotionType|  Discount   |
   | <type>       |  <discount> |
    And I should verify for below product - Cart Calculations are correct
    |Product Name        |
    |STANCEBEAM STRIKER  |
    | Normal Order       |
    And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
    And I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode           | desc         | discount    |<type>    |
      | dealerPercent10 | dealerPromo  | 10          |percentage|


  @smokeX3
  @taxX3
  @xm
  @promoCode
  @buyXgetYfree
  @XMECOM-7354
  Scenario Outline: As a B2B User ,I want to add new Dealer promo(Buy X get Y free) and verify promotion in  the front end and delete the same promo
    Given I am on the Promo listing page
   When I search for the promo code is already exists before creating new one
      | Promo Code |
      | <pcode>    | 
      And  I enter promo discount based on "Buy X get Y free" details and click Apply
      | Promo Code | Description |Item1  |Item2   |
      | <pcode>    | <desc>      |<item1> |<item2>|
    Then The promotion code is created successfully
    When I click on WebStore button
    And I search for the product "NECK GUARD" in the search box and click search Icon
      And I click on the product "NECK GUARD"
    Then I should see the product detail page
    When I click on Add to Cart button on the product
    Then I should see msg "Item has been added to your cart." 
    When I click on Cart icon Button
    And I enter the promotion code in the "cart" page
     | Promo Code |
     | <pcode>    |
    Then I should see "Promotion has been added" message in the "cart" page
    When I verify the promotion discount applied to the product
   | PromotionType| 
   | <type>       |  
    And I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |NECK GUARD    |
    | Normal Order |
    And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage
    And I remove the promotion from the cart page
    And I delete the promotion code which is created
      | Promo Code |
      | <pcode>    | 
    Then The Promo code is deleted successfully
    Examples:
      | pcode         | desc          |  item1      |item2      |PromotionType|
      | buyXgetYfree  | buyXgetYFree  | 3M17501     |3T191399   | <pcode>     |