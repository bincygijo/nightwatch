Feature: addToCart
  Feature Description: This feature file consists of tests related to addToCart module in StorePHP
@smoke
@sage300
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2buser
@XMECOM-6174
@XMECOM-6198
@XMECOM-6202
@XMECOM-6203
@StandardProduct
Scenario Outline: As a B2B User, I want to update AddToCart settings and test an order on front end where an item is correctly fulfilled across multiple warehouses and qty exceeding stock is backordered against primary warehouse
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I switch off Hide Add to Cart for Out of Stock Items and switch on Enable Backorder and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I switch customer
    | Cust Type | Test Customer |
    | B2B       | Elan Marikit  | 
  And I search for the product "#VOLDISCOUNT" in the search box and click search Icon
When I click on the product "Volume Discount Product"
  And I should verify the product status is Instock and price in product detail page
  And I add sample comment against product
  And I update quantity as "5505" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
And I click on shipping-to link and ensure shipping address is set to "2398 Colorado cres"
Then I should see order is allocated as below and additional qty shown as Backordered for the product "Volume Discount Product" Successfully
  |Warehouse1  | Warehouse2 | Warehouse3 | Warehouse4 |Allocation1  | Allocation2 | Allocation3 | Allocation4 |
  |<warehouse1>|<warehouse2>|<warehouse3>|<warehouse4>|<Allocation1>|<Allocation2>|<Allocation3>|<Allocation4>|
Examples:
  |warehouse1       |warehouse2        |warehouse3     |warehouse4                 | Allocation1 |Allocation2|Allocation3|Allocation4|
  |Port of Vancouver|Newark, New Jersey|Portland Office|Central warehouse - Seattle|   2500      |  0        |  0        |  3000     |


@special
@sage300Special
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2buser
@loadTestAddToCart
@StandardProduct
Scenario: As a B2B user i want to add more than 500 items to cart (using monk2/carribean store so change cucumber config file) and see how pricing or cart behaves. 
Given I am on the Homepage as B2B user
  And I search for the product "" in the search box and click search Icon
When I add "600" listed items to cart
And I can see cart page successfully tallying all product totals

@regression
@sage300
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2cuser
@XMECOM-6379
@StandardProduct
Scenario Outline: As a B2C User, I want to update AddToCart settings and test an order on front end where an item is correctly fulfilled across multiple warehouses and qty exceeding stock is backordered against primary warehouse
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I click on B2C Public settings 
  And I switch off allow Negative qty and switch on Enable Backorder and click update button
Then I see "Your Public Features have been updated" message
When I assume B2C Customer "bincy7@gmail.com"
  And I search for the product "Pen" in the search box and click search Icon
When I click on the product "Pen"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "5505" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
 And I click on shipping-to link and ensure shipping address is set to "2659 Douglas Street"
Then I should see order is allocated as below and additional qty shown as Backordered for the product "Pen" Successfully
  |Warehouse1  | Warehouse2 | Warehouse3 | Warehouse4 |Allocation1  | Allocation2 | Allocation3 | Allocation4 |
  |<warehouse1>|<warehouse2>|<warehouse3>|<warehouse4>|<Allocation1>|<Allocation2>|<Allocation3>|<Allocation4>|
Examples:
  |warehouse1       |warehouse2        |warehouse3     |warehouse4                 | Allocation1 |Allocation2|Allocation3|Allocation4|
  |Port of Vancouver|Newark, New Jersey|Portland Office|Central warehouse - Seattle|   500.0000  |  500.0000 |  500.0000 |  999.0000 |

# A1-900/G - current stock in 100 
@smoke
@sage300
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2buser
@XMECOM-6199
@StandardProduct
Scenario: As a B2B User, I disable backordering and test an order on front end where an item is not fulfilled when ordered beyond stock
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
When I switch off Hide Add to Cart for Out of Stock Items and switch OFF Enable Backorder and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I search for the product "A1-900/G" in the search box and click search Icon
When I click on the product "Calculator"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "215" and click on Add to Cart button
Then I should see error msg "No stock found for the selected item (A1900G)."

@regression
@sage300
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2cuser
@StandardProduct
@XMECOM-6381
Scenario: As a B2C User, I disable backordering and test an order on front end where an item is not fulfilled when ordered beyond stock
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I click on B2C Public settings
  And I switch off allow Negative qty and switch OFF Enable Backorder and click update button
Then I see "Your Public Features have been updated" message
When I assume B2C Customer "bincy7@gmail.com"
  And I search for the product "A1-900/G" in the search box and click search Icon
When I click on the product "Calculator"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "215" and click on Add to Cart button
Then I should see error msg "No stock found for the selected item (A1900G)."

# A1759G - out of stock with negative qty
# F1465B - out of stock 
@smoke
@sage300
@NegQtyBackorderOverride
@OutofStockBackOrderOverride
@StandardProduct
@b2buser
@XMECOM-6161
Scenario: As a B2B User, I want to verify add to cart is not enabled for a product that is negative qty and another product which is out of stock 
Given I am on the storePHP page
When I search for the product "A1759G" in the search box and click search Icon
Then I am On search listing page and I should verify Add to cart button is not shown
When I click on the product "Memo Holder - Image-1500 Series"
Then I should verify Add to cart button is not shown on product details page
When I search for the product "F1465B" in the search box and click search Icon
Then I am On search listing page and I should verify Add to cart button is not shown
When I click on the product "Filing Cabinet - 4 Drawers"
Then I should verify Add to cart button is not shown on product details page

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



@regression
@sage300
@searchByProductCode
@standardProducts
@Instock
@b2buser
Scenario: As a B2B User, I want to verify the product has Instock
Given I am on the storePHP page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page

@regressionx
@sage300x
@searchByProductCode
@standardProducts
@b2buser
@XMECOM-5967
Scenario: As a B2B User, I want to search standardProducts to add into cart
Given I am on the storePHP page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@regressionx
@sage300x
@searchByProductCode
@standardProducts
@guestuser
@XMECOM-6075
Scenario: As a Guest User, I want to search standardProducts to add into cart
Given I am on the Home page
When I search for the product "Volume Pricing Test" in the search box and click search Icon
  And I click on the product "Volume Pricing Test"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@regressionx
@sage300x
@searchByProductCode
@standardProducts
@b2cuser
@XMECOM-6106
Scenario: As a B2C User, I want to search standardProducts to add into cart
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I search for the product "Pen" in the search box and click search Icon
  And I click on the product "Pen"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@regressionx
@sage300x
@searchByProductCode
@variantProducts
@b2buser
@XMECOM-6154
Scenario: As a B2B User, I want to search variant products to add into cart
Given I am on the storePHP page
When I search for the product "calculator" in the search box and click search Icon
  And I click on the product "calculator"
Then I should see the product detail page
When I click one of the variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart." 

@regression
@sage300x
@searchByProductCode
@variantProducts
@b2cuser
@XMECOM-6404
Scenario: As a B2C User, I want to search variant products to add into cart
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I search for the product "calculator" in the search box and click search Icon
  And I click on the product "calculator"
Then I should see the product detail page
When I click one of the variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart."

@regression
@tax
@sage300
@searchByCategory
@standardProducts
@b2buser
@XMECOM-6196
@XMECOM-7815
Scenario: As a B2B User, I want to add product with qty 5 and verify the cart summary for totals and sales tax
Given I am on the storePHP page
When I switch customer
  | Cust Type | Test Customer |
  | B2B       | ACME Plumbing | 
  And I search for the product "A1900B" in the search box and click search Icon
  And I click on the product "Answering Machine"
Then I should see the product detail page
When I update quantity as "1" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
|Product Name      | 
|Answering Machine | 
| Normal Order     | 
And I verify state tax as '6.25' percentage and county tax as '2.00' percentage

@smoke
@tax
@sage300
@searchByCategory
@standardProducts
@b2cuser
@XMECOM-6404
@XMECOM-7815
@XMECOM-7854
Scenario: As a B2C User, I want to add product with qty 8 and verify the cart summary for totals and sales tax
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I click on the category "testcategory"
Then I should see all the products in "testcategory"
When I click on the product "Answering Machine"
  And I update quantity as "8" and click on Add to Cart button
Then I should see msg "Item has been added to your cart." 
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
|Product Name|
|Answering Machine| 
| Normal Order    | 
And I verify state tax as '6.25' percentage and county tax as '2.00' percentage

@regression
@sage300
@searchByCategory
@standardProducts
@b2buser
@XMECOM-6200
Scenario Outline: As a B2B User,  For each UOM I want to add product to cart and verify the cart summary for totals
Given I am on the storePHP page
When I switch customer
  | Cust Type | Test Customer |
  | B2B       | Elan Marikit | 
And I click on the category "Standard Products"
Then I should see all the products in "Standard Products"
When I click on the product "Fluorescent Desk Lamp"
Then I should see the product detail page
When I click "4" different UOMs below one by one verify price and stock and update qty as "7" and click add to cart
  |<each>|<dozen>|<Case> |<Crate>| <priceEach> | <priceDozen> | <priceCase> | <priceCrate> | <stockEach> | <stockDozen> | <stockCase> | <stockCrate> |
Examples:
|each |dozen |Case |Crate | priceEach | priceDozen | priceCase   | priceCrate | stockEach          | stockDozen               | stockCase               |  stockCrate              |
|Ea.  |Dozen |Case |Crate | US$59.99  | US$719.88  | US$1,439.76 | US$2,879.52| 493 (Ea.) in Stock | 41.0833 (Dozen) in Stock | 20.5417 (Case) in Stock | 10.2708 (Crate) in Stock |

@regression
@sage3001
@searchByCategory
@standardProducts
@b2cuser
@XMECOM-6404
@bugExist
Scenario Outline: As a B2C User,  For each UOM I want to add product to cart and verify the cart summary for totals
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I click on the category "Standard Products"
Then I should see all the products in "Standard Products"
When I click on the product "Fluorescent Desk Lamp"
Then I should see the product detail page
When I click "4" different UOMs below one by one verify price and stock and update qty as "5" and click add to cart
  |<each>|<dozen>|<Case> |<Crate>| <priceEach> | <priceDozen> | <priceCase> | <priceCrate> | <stockEach> | <stockDozen> | <stockCase> | <stockCrate> |
When I click on Cart icon Button
Then I should verify for different UOMs of product "Fluorescent Desk Lamp" - Cart Calculations are correct
  |<each>|<dozen>|<Case> |<Crate>|

Examples:
|each |dozen |Case |Crate | priceEach | priceDozen | priceCase   | priceCrate | stockEach          | stockDozen               | stockCase               |  stockCrate              |
|Ea.  |Dozen |Case |Crate | US$59.99  | US$719.88  | US$1,439.76 | US$2,879.52| 493 (Ea.) in Stock | 41.0833 (Dozen) in Stock | 20.5417 (Case) in Stock | 10.2708 (Crate) in Stock |

@smoke
@sage300
@standardProducts
@b2buser
@XMECOM-6197
Scenario Outline: As a B2B User, I want to add 4 product and verify the cart summary for totals
Given I am on the storePHP page
When I click on the category "Standard Products"
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
Examples:
    |pro1 | pro2                                    |pro3                                    |   pro4               |  orderType1  | orderType2   | orderType3   | orderType4    |             
    |Pen  | Filing Cabinet - 4 Drawers - Hunts-2500 |Paper Clip Dispenser - Image-1500 Series| Fluorescent Desk Lamp| Normal Order | Normal Order | Normal Order | Normal Order  | 

@regression
@sage300    
@standardProducts
@b2cuser
@XMECOM-6404
Scenario Outline: As a B2C User, I want to add 4 product and verify the cart summary for totals
Given I am on the admin dashboard and I assume B2C customer "bincy7@gmail.com"
When I click on the category "Standard Products"
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

Examples:
  |pro1 | pro2                                    |pro3                                    |   pro4               |  orderType1  | orderType2   | orderType3   | orderType4    |             
  |Pen  | Filing Cabinet - 4 Drawers - Hunts-2500 |Paper Clip Dispenser - Image-1500 Series| Fluorescent Desk Lamp| Normal Order | Normal Order | Normal Order | Normal Order  | 

@smoke
@sage300x
@searchByProductCode
@variantProducts
@guestuser
@XMECOM-6366
Scenario: As a Guest User, I want to search variant products to add into cart
Given I am on the Home page
When I search for the product "calculator" in the search box and click search Icon
  And I click on the product "calculator"
Then I should see the product detail page
When I click one of the variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart."

#X3 Only scenarios 

@smokeX3
@xm
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2buser
@XMECOM-6174
@XMECOM-6198
@XMECOM-6202
@XMECOM-6203
@StandardProduct
Scenario Outline: As a B2B User, I want to update AddToCart settings and test an order on front end where an item is correctly fulfilled across multiple warehouses and qty exceeding stock is backordered against primary warehouse
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I switch off Hide Add to Cart for Out of Stock Items and switch on Enable Backorder and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I search for the product "3M17501" in the search box and click search Icon
When I click on the product "NECK GUARD"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "539" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
And I click on shipping-to link and ensure shipping address is set to "218 CHESTERVILLE RD"
Then I should see order is allocated as below and additional qty shown as Backordered for the product "NECK GUARD" Successfully
  |Warehouse1  | Warehouse2 | Warehouse3 | Allocation1  | Allocation2 | Allocation3 | 
  |<warehouse1>|<warehouse2>|<warehouse3>|<Allocation1> |<Allocation2>|<Allocation3>|
  
Examples:
  |warehouse1     |warehouse2  |warehouse3    | Allocation1 |Allocation2|Allocation3|
  | KSA - Sales   | KRL - Sales| KNZ - Sales  |    194      |  0        |  38       | 


@smokeX3
@xm
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2cuser
@XMECOM-6379
@StandardProduct
Scenario Outline: As a B2C User, I want to update AddToCart settings and test an order on front end where an item is correctly fulfilled across multiple warehouses and qty exceeding stock is backordered against primary warehouse
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I click on B2C Public settings 
  And I switch off allow Negative qty and switch on Enable Backorder and click update button
Then I see "Your Public Features have been updated" message
When I assume B2C Customer "blair.r.watkins@gmail.com"
  And I search for the product "SUPER COACH THREE BALL PACK" in the search box and click search Icon
When I click on the product "SUPER COACH THREE BALL PACK"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "380" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
And I click on shipping-to link and ensure shipping address is set to "218 Chesterville Road"
Then I should see order is allocated as below and additional qty shown as Backordered for the product "SUPER COACH THREE BALL PACK" Successfully
  |Warehouse1  | Warehouse2 | Warehouse3 | Allocation1  | Allocation2 | Allocation3 | 
  |<warehouse1>|<warehouse2>|<warehouse3>|<Allocation1> |<Allocation2>|<Allocation3>|
Examples:
  |warehouse1     |warehouse2  |warehouse3    | Allocation1 |Allocation2  |Allocation3|
  | KSA - Sales   | KRL - Sales| KNZ - Sales  |    0        |  0          |  162      | 



@smokeX3
@xm
@searchByProductCode
@standardProducts
@b2buser
@XMECOM-5967
Scenario: As a B2B User, I want to search standardProducts to add into cart
Given I am on the storePHP page
When I search for the product "STUMP GAUGE" in the search box and click search Icon
  And I click on the product "STUMP GAUGE"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@smokeX3
@xm
@searchByProductCode
@standardProducts
@guestuser
@XMECOM-6075
Scenario: As a Guest User, I want to search standardProducts to add into cart
Given I am on the Home page
When I search for the product "KB PRO PLAYERS WRISTBAND 11 CM" in the search box and click search Icon
  And I click on the product "KB PRO PLAYERS WRISTBAND 11 CM"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@smokeX3
@xm
@searchByProductCode
@standardProducts
@b2cuser
@XMECOM-6106
Scenario: As a B2C User, I want to search standardProducts to add into cart
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I search for the product "STUMP GAUGE" in the search box and click search Icon
  And I click on the product "STUMP GAUGE"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."

@smokeX31
@xm
@searchByProductCode
@variantProducts
@b2buser
@XMECOM-6154
Scenario: As a B2B User, I want to search variant products to add into cart
Given I am on the storePHP page
When I search for the product "ORIGIN 980 HOCKEY STICK" in the search box and click search Icon
  And I click on the product "ORIGIN 980 HOCKEY STICK"
Then I should see the product detail page
When I click "2" variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart." 

@smokeX3
@xm
@searchByProductCode
@variantProducts
@b2cuser
@XMECOM-6404
Scenario: As a B2C User, I want to search variant products to add into cart
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I search for the product "Automation Test Variant" in the search box and click search Icon
  And I click on the product "Automation Test Variant"
Then I should see the product detail page
When I click "2" variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart."

@smokeX3
@xm
@searchByProductCode
@variantProducts
@guestuser
@XMECOM-6366
Scenario: As a Guest User, I want to search variant products to add into cart
Given I am on the Home page
When I search for the product "Automation Test Variant" in the search box and click search Icon
  And I click on the product "Automation Test Variant"
Then I should see the product detail page
When I click "2" variant options and I click on Add to Cart button
Then I should see msg "Item has been added to your cart."

@smokeX3
@taxX3
@xm
@searchByCategory
@standardProducts
@b2buser
@XMECOM-6196
@XMECOM-7815
Scenario: As a B2B User, I want to add product with qty 6 and verify the cart summary for totals and sales tax
Given I am on the storePHP page
When I click on the category "Standing Products"
Then I should see all the products in "Standing Products"
When I click on the product "STUMP GAUGE"
Then I should see the product detail page
When I update quantity as "6" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
|Product Name|
|STUMP GAUGE | 
| Normal Order| 
And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage

@smokeX3
@taxX3
@xm
@searchByCategory
@standardProducts
@b2cuser
@XMECOM-6404
Scenario: As a B2C User, I want to add product with qty 6 and verify the cart summary for totals
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I click on the category "Standing Products"
Then I should see all the products in "Standing Products"
When I click on the product "STUMP GAUGE"
Then I should see the product detail page
When I update quantity as "6" and click on Add to Cart button
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
|Product Name|
|STUMP GAUGE | 
| Normal Order | 
And I verify state tax as '10.0000' percentage and county tax as '0.00' percentage

@smokeX3
@xm
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2buser
@XMECOM-6199
@StandardProduct
Scenario: As a B2B User, I disable backordering and test an order on front end where an item is not fulfilled when ordered beyond stock
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
When I switch off Hide Add to Cart for Out of Stock Items and switch OFF Enable Backorder and click update button
Then I see "Your Site Features have been updated" message
When I click on WebStore button
  And I search for the product "7T183102D" in the search box and click search Icon
When I click on the product "SMALL SWEATBAND"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "500" and click on Add to Cart button
Then I should see error msg "No stock found for the selected item (7T183102D)."

@smokeX3
@xm
@addToCartAdminSettings
@addToCartFrontEndBackorderTest
@b2cuser
@StandardProduct
@XMECOM-6381
Scenario: As a B2C User, I disable backordering and test an order on front end where an item is not fulfilled when ordered beyond stock
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
  And I click on the Features link to see Site Features Settings Page
  And I click on B2C Public settings 
  And I switch off allow Negative qty and switch OFF Enable Backorder and click update button
Then I see "Your Public Features have been updated" message
When I assume B2C Customer "brett@kooka.com.au"
  And I search for the product "7T183202D" in the search box and click search Icon
When I click on the product "KB PRO PLAYERS WRISTBAND 11 CM"
  And I should verify the product status is Instock and price in product detail page
  And I update quantity as "705" and click on Add to Cart button
Then I should see error msg "No stock found for the selected item (7T183202D)."

@regressionX3
@xm
@NegQtyBackorderOverride
@OutofStockBackOrderOverride
@StandardProduct
@b2buser
@XMECOM-6161
Scenario: As a B2B User, I want to verify add to cart is not enabled for a product that is negative qty and another product which is out of stock 
Given I am on the storePHP page
When I search for the product "A1759G" in the search box and click search Icon
Then I am On search listing page and I should verify Add to cart button is not shown
When I click on the product "Memo Holder - Image-1500 Series"
Then I should verify Add to cart button is not shown on product details page
When I search for the product "F1465B" in the search box and click search Icon
Then I am On search listing page and I should verify Add to cart button is not shown
When I click on the product "Filing Cabinet - 4 Drawers"
Then I should verify Add to cart button is not shown on product details page

@smokeX3
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





@regressionX3
@xm
@searchByCategory
@standardProducts
@b2buser
@XMECOM-6200
Scenario Outline: As a B2B User,  For each UOM I want to add product to cart and verify the cart summary for totals
Given I am on the storePHP page
When I click on the category "Standard Products"
Then I should see all the products in "Standard Products"
When I click on the product "Fluorescent Desk Lamp"
Then I should see the product detail page
When I click "4" different UOMs below one by one verify price and stock and update qty as "7" and click add to cart
  |<each>|<dozen>|<Case> |<Crate>| <priceEach> | <priceDozen> | <priceCase> | <priceCrate> | <stockEach> | <stockDozen> | <stockCase> | <stockCrate> |
When I click on Cart icon Button
Then I should verify for different UOMs of product "Fluorescent Desk Lamp" - Cart Calculations are correct
  |<each>|<dozen>|<Case> |<Crate>|
Examples:
    |each |dozen |Case |Crate | priceEach | priceDozen | priceCase   | priceCrate | stockEach          | stockDozen               | stockCase               |  stockCrate             |
    |Ea.  |Dozen |Case |Crate | US$59.99  | US$719.88  | US$1,426.80 | US$2,853.60| 501 (Ea.) in Stock | 41.75 (Dozen) in Stock | 20.875 (Case) in Stock | 10.4375 (Crate) in Stock |  

@regressionX3
@xm
@searchByCategory
@standardProducts
@b2buser
@XMECOM-6404
Scenario Outline: As a B2C User,  For each UOM I want to add product to cart and verify the cart summary for totals
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I click on the category "Standing Products"
Then I should see all the products in "Standing Products"
When I click on the product "Fluorescent Desk Lamp"
Then I should see the product detail page
When I click "4" different UOMs below one by one verify price and stock and update qty as "5" and click add to cart
  |<each>|<dozen>|<Case> |<Crate>| <priceEach> | <priceDozen> | <priceCase> | <priceCrate> | <stockEach> | <stockDozen> | <stockCase> | <stockCrate> |
When I click on Cart icon Button
Then I should verify for different UOMs of product "Fluorescent Desk Lamp" - Cart Calculations are correct
  |<each>|<dozen>|<Case> |<Crate>|
Examples:
    |each |dozen |Case |Crate | priceEach | priceDozen | priceCase   | priceCrate | stockEach          | stockDozen             | stockCase              |  stockCrate              |
    |Ea.  |Dozen |Case |Crate | US$59.99  | US$719.88  | US$1,426.80 | US$2,853.60| 501 (Ea.) in Stock | 41.75 (Dozen) in Stock | 20.875 (Case) in Stock | 10.4375 (Crate) in Stock |  

@smokeX3
@xm      
@standardProducts
@b2buser
@XMECOM-6197
Scenario Outline: As a B2B User, I want to add 4 product and verify the cart summary for totals
Given I am on the storePHP page
When I click on the category "Standing Products"
Then I should see all the products in "Standing Products"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
Examples:
    |pro1                 | pro2           |pro3        |   pro4    |  orderType1  | orderType2  | orderType3  | orderType4  |             
    |STANCEBEAM STRIKER   | BOWLER MARKERS |GRADE STUMPS| NECK GUARD| Normal Order |Normal Order |Normal Order |Normal Order |


@smokeX3
@xm     
@standardProducts
@b2cuser
@XMECOM-6404
Scenario Outline: As a B2C User, I want to add 4 product and verify the cart summary for totals
Given I am on the admin dashboard and I assume B2C customer "brett@kooka.com.au"
When I click on the category "Standing Products"
Then I should see all the products in "Standing Products"
When I click add to cart button for the below products
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    | Product1     | Product2     | Product3     | Product 4    |
    | <pro1>       | <pro2>       | <pro3>       | <pro4>       |
    | <orderType1> | <orderType2> | <orderType3> | <orderType4> | 
Examples:
    |pro1                 | pro2           |pro3       |   pro4                     |  orderType1  | orderType2  | orderType3  | orderType4  |             
    |STANCEBEAM STRIKER   | BOWLER MARKERS |STUMP GAUGE| SUPER COACH THREE BALL PACK| Normal Order |Normal Order |Normal Order |Normal Order | 

