Feature: Shipping
  Feature Description: This feature file consists of tests related to shipping module in Admin and Store

  @regression
  @sage300
  @Shipping
  @ShippingAdmin
  @FedExShippingSetup
  @XMECOM-6155
  Scenario:  As an admin I want to perform basic shipping set up - FedEx Service
  Given I am on the admin dashboard
   When I click on the Shipping Setup under System Menu 
    And I click on the Integrated Service
    And I click on the Edit button for "FedEx"
  Then Shipping module page is shown successfully
  When I enter all details for FedEx main settings
    | gz8pa7vjJnlVhS1G | slrAAf6Tfyxqj5ujtRtl29haf | 124610710  | 111950491 | Show Negotiated Rates |
  And I enter below sender details
    | USA | 260 | Welter Drive | Monticello | IA | 52310 | 
  And I enable available services with below services
    | FedEx 2Day®A.M. | FedEx 2Day® | FedEx Express Saver® | FedEx Priority Overnight® | FedEx Home Delivery® | FedEx Standard Overnight® |
  Then I Click Apply button and see setting is saved successfully


  @smoke
  @sage300   
  @standardProducts
  @b2buser
  @XMECOM-6602
  @XMECOM-6427
  Scenario Outline: As a B2B User, I want to add 4 product and verify cart totals checkout totals and FedEx shipping services methods
  Given I am on the Homepage as B2B user
  When I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit | 
  And I click on the category "Standard Products"
  Then I should see all the products in "Standard Products"
  When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
  When I click on Cart icon Button
  Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
  When I click on Proceed to checkout
      Then  One page checkout page is shown
  When I choose "99 tennis pl" shipping address and click continue
      Then "FedEx" Shipping has below methods and rates listed successfully
    |FedEx 2Day®|FedEx 2Day®A.M.|FedEx Express Saver® |FedEx Priority Overnight®|FedEx Home Delivery® |FedEx Priority Overnight® |FedEx Standard Overnight®|
    |US$60.12   |US$70.69       |US$45.09             |US$277.81                |US$14.41             |US$109.93                 |US$105.76                |
    And "UPS" Shipping has below methods and rates listed successfully
    |UPS Second Day Air®|
    |US$210.92          |
  When I choose "FedEx 2Day®" shipping method and click on Continue button 
    Then I should see "On Account" payment method is listed successfully 
  When I choose account payment method and click on Continue button 
      And I verify Order Summary
      And I fill necessary details and place order successfully
  Then I should see order has been placed successfully
  Examples:
      |pro1 | pro2                                    |pro3                                    |   pro4               | orderType1   | orderType2   | orderType3   | orderType4   |          
      |Pen  | Filing Cabinet - 4 Drawers - Hunts-2500 |Paper Clip Dispenser - Image-1500 Series| Fluorescent Desk Lamp| Normal Order | Normal Order | Normal Order | Normal Order | 
    
  @regression
  @sage300
  @Shipping
  @ShippingAdmin
  @UPSShippingSetup
  Scenario: As an admin I want to perform basic shipping set up - UPS
    Given I am on the admin dashboard
    When I click on the Shipping Setup under System Menu 
      And I click on the Integrated Service
      And I click on the Edit button for "UPS" 
    Then Shipping module page is shown successfully
    When I enter all details for UPS main settings
    | https://onlinetools.ups.com/ups.app/xml/Rate | Production | novacyclesinc    | newstar | 88E233 | 0D1EFCB989D540AE | 95677 |  USA     | California | https://onlinetools.ups.com/ups.app/xml/Rate|
    And I enable available services with below services
    | UPS Next Day Air® | UPS Second Day Air® | UPS Standard |
    Then I Click Apply button and see setting is saved successfully
  
  @regression
  @sage300
  @Shipping
  @ShippingAdmin
  @UPSShippingVerify
  @XMECOM-6427
  Scenario: As a B2B User I want to perform basic verification of UPS shipping
    Given I am on the Homepage as B2B user
    When I click on the category "Standard Products"
      Then I should see all the products in "Standard Products"
    When I click on the product "Pen"
    And I update quantity as "5" and click on Add to Cart button
      Then I should see msg "Item has been added to your cart."
    When I click on Cart icon Button
      Then Shopping Cart page is displayed successfully
    When I click on Proceed to checkout
      Then  One page checkout page is shown
    When I choose "Bashaw Buulldozing" shipping address and click continue
      Then "UPS" Shipping has below methods and rates listed successfully
      |UPS Standard     |
      |US$146.46        |
    When I choose "UPS Standard" shipping method and click on Continue button 
      Then I should see "On Account" payment method is listed successfully 
    When I choose account payment method and click on Continue button 
      And I fill necessary details and place order successfully
      Then I should see order has been placed successfully

  