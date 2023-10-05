Feature: Shipping Carriers
  Feature Description: This feature file consists of tests related to Carriers module in Admin and Store for XM Simple shipping alone

  @regression
  @sage300
  @carriers
  @ShippingRestrictions
  @B2Bcustomer
  @XMECOM-7189
  @XMECOM-7733
  Scenario Outline:  As an admin, I want to add shipping restriction for customer, customer group, web user group and verify in webstore
  Given I am on the admin dashboard
  When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
  Then I should see available carriers page
  When I click Edit Carriers name 
  |Carrier Name |
  |<Carrier Name>|
  And I select Restriction Type
  | Restriction Type |
  |<Restriction Type>|
  And I select Restriction Value
  | Restriction Value |
  |<Restriction Value>|
  Then I should see "Your Carrier has been updated." successfully
  When I click on WebStore button
  And I switch customer
  | Cust Type | Test Customer |
  |<Cust Type>|<Test Customer>|
  And I search for the product "Dry-erase White Board Markers" in the search box and click search Icon
  And I click on the product "Dry-erase White Board Markers"
  Then I should verify the product status is Instock and price in product detail page
  When I click on Add to Cart button on the product
  Then I should see msg "Item has been added to your cart."
  When I click on Cart icon Button
  Then I should verify for below product - Cart Calculations are correct
 |Product Name                 |
 |Dry-erase White Board Markers|
 | Normal Order                |
 When I click on Proceed to checkout 
 And I click on Continue button after selecting shipping address 
 Then I should verify the carrier code in the shipping method page
 | Carrier Name | Expected Result   |
 |<Carrier Name>|<Expected Result>  |
 Examples: 
| Carrier Name 		   		      	  | Restriction Type   		 |Cust Type |  Restriction Value 		        	    | Test Customer  	   | Expected Result   |
| XM Shipping Restriction Carrier | Customers 			       |B2B       | Mr Elan Marikit 		              	| Mr Elan Marikit 	 | Carrier Shown     |
| XM Shipping Restriction Carrier | Customers           	 |B2B       | Mr Elan Marikit 		              	| Bashaw Bulldozing  | Carrier Not Shown |
| XM Shipping Restriction Carrier | Customers Group        |B2B       | RTL                         	     	| Mr Elan Marikit 	 | Carrier Shown	   |
| XM Shipping Restriction Carrier | Customers Group        |B2B       | RTL 		                            | Bashaw Bulldozing  | Carrier Not Shown |
| XM Shipping Restriction Carrier | Webstore User Groups   |B2C       | Public Users (Registered Users/B2C) | testsss@dfds.com   | Carrier Shown     |
| XM Shipping Restriction Carrier | Webstore User Groups   |B2B       | Public Users (Registered Users/B2C) | Mr Elan Marikit    | Carrier Not Shown |




@smoke
@sage300
@carriers
@ShippingCalculationSettings
@ShippingExceedWeightCriteria
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - Exceeding WEIGHT criteria - carrier not shown
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 0              | 0             | 10             | off                 | off            |off           | 10                    | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on the Item Settings under Shipping Setup Menu
  And I update below item settings
    |  Product              | Length	| Width		| Height 	| Weight  |
    | White Melamine Board  | 0       | 0       | 0       |   10.1  |
Then I should see "Your Product Sizes have been updated" successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|  Carrier Not Shown  | off                 |     off      | off           | 10                    | 2                  |   off                         |       off                 |    off                     |


@smoke
@sage300
@carriers
@ShippingCalculationSettings
@ShippingExceedVolumeCriteria
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - Exceeding VOLUME criteria - carrier not shown
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 30             | 0             | 15             | off                 | off            |off           | 10.9                  | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on the Item Settings under Shipping Setup Menu
  And I update below item settings
    |  Product              | Length	| Width		| Height 	| Weight  |
    | White Melamine Board  | 3       | 3       | 4       |   10.1  |
Then I should see "Your Product Sizes have been updated" successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|  Carrier Not Shown  | off                 |     off      | off           | 10.9                 | 2                   |   off                         |       off                 |    off                     |

@smoke
@sage300
@carriers
@ShippingCalculationSettings
@ShippingFreeShippingCalculation
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify FREE shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 50             | 0             | 15             | off                 | off            |on            | off                   | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | on            | off                   | 2                  |   off                         |       off                 |    off                     |

@regression
@sage300
@carriers
@ShippingCalculationSettings
@ShippingFixedAmountShippingCost
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify fixed amount shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | 10.9                  | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 3              | 10.9                  | 2                  |   off                         |       off                 |    off                     |

@regressiony
@sage300
@carriers
@ShippingCalculationSettings
@ShippingCalculatedShippingCost
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify calculated amount shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | off                   | 2                 |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 3              | off                   | 2                  |   50                          |       off                 |    5.3                      |

@regression
@sage300
@carriers
@ShippingCalculationSettings
@ShippingFreeShippingThresholdCheck
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify calculated amount shipping + free shipping threshold
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | off                   | off               |20                            | You Saved %1$s            |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 0             | off                   | off                |  20                           |       You Saved %1$s      |    5.3                      |

@regression
@sage300
@carriers
@ShippingCalculationSettings
@ShippingHideShippingCheck
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify hide shipping price
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 50             | 0             | 15             | on                  | off            |off           | off                   | off               |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | on                  |     off      | off           | off                   | off                |  off                          |       off                 |    5.3                      |


@regression
@sage300
@carriers
@ShippingCalculationSettings
@ShippingTBCCheck
@B2Bcustomer
@XMECOM-7495
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify TBC price
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated  |
    | 50             | 0             | 15             | off                 | TBC            |off           | off                   | off               |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "White Melamine Board" in the search box and click search Icon
  And I click on the product "White Melamine Board"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name           |
    |White Melamine Board   |
    | Normal Order          |
When I click on Proceed to checkout 
  And I choose "Bashaw Buulldozing" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |    TBC       | off           | off                   | off                |  off                          |       off                 |    5.3                      |


 ### X3 Scenarios here onwards 

  @smokeX3
  @xm
  @carriers
  @ShippingRestrictions
  @B2Bcustomer
  @XMECOM-7189
  @XMECOM-7733
  Scenario Outline:  As an admin, I want to add shipping restriction for customer, customer group, web user group and verify in webstore
  Given I am on the admin dashboard
  When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
  Then I should see available carriers page
  When I click Edit Carriers name 
  |Carrier Name |
  |<Carrier Name>|
  And I select Restriction Type
  | Restriction Type |
  |<Restriction Type>|
  And I select Restriction Value
  | Restriction Value |
  |<Restriction Value>|
  Then I should see "Your Carrier has been updated." successfully
  When I click on WebStore button
  And I switch customer
  | Cust Type | Test Customer |
  |<Cust Type>|<Test Customer>|
  And I search for the product "STANCEBEAM STRIKER" in the search box and click search Icon
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
 Then I should verify the carrier code in the shipping method page
 | Carrier Name | Expected Result   |
 |<Carrier Name>|<Expected Result>  |
 Examples: 
| Carrier Name 		   		      	  | Restriction Type   		 |Cust Type |  Restriction Value 		        	    | Test Customer  	            | Expected Result   |
| XM Shipping Restriction Carrier | Customers 			       |B2B       | FULLHAMMER 		                    	| FULLHAMMER 	                | Carrier Shown     |
| XM Shipping Restriction Carrier | Customers           	 |B2B       | FULLHAMMER 		                    	| GLOBECLAD                   | Carrier Not Shown |
| XM Shipping Restriction Carrier | Customers Group        |B2B       | AU Existing Supp to Customer    	  | FULLHAMMER 	                | Carrier Shown	    |
| XM Shipping Restriction Carrier | Customers Group        |B2B       | AU Existing Supp to Customer 		    | GLOBECLAD                   | Carrier Not Shown |
| XM Shipping Restriction Carrier | Webstore User Groups   |B2C       | Public Users (Registered Users/B2C) | blair.r.watkins@gmail.com   | Carrier Shown     |
| XM Shipping Restriction Carrier | Webstore User Groups   |B2B       | Public Users (Registered Users/B2C) | FULLHAMMER                  | Carrier Not Shown |


@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingExceedWeightCriteria
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - Exceeding WEIGHT criteria - carrier not shown
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 0              | 0             | 10             | off                 | off            |off           | 10                    | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on the Item Settings under Shipping Setup Menu
  And I update below item settings
    |  Product     | Length	| Width		| Height 	| Weight  |
    | 3S18705      | 0      | 0       | 0       |   10.1  |
Then I should see "Your Product Sizes have been updated" successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|  Carrier Not Shown  | off                 |     off      | off           | 10                    | 2                  |   off                         |       off                 |    off                     |


@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingExceedVolumeCriteria
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - Exceeding VOLUME criteria - carrier not shown
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 30             | 0             | 15             | off                 | off            |off           | 10.9                  | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on the Item Settings under Shipping Setup Menu
  And I update below item settings
    |  Product     | Length	| Width		| Height 	| Weight  |
    | 3S18705      | 3      | 3       | 4       |   10.1  |
Then I should see "Your Product Sizes have been updated" successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|  Carrier Not Shown  | off                 |     off      | off           | 10.9                 | 2                   |   off                         |       off                 |    off                     |

@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingFreeShippingCalculation
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify FREE shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 50             | 0             | 15             | off                 | off            |on            | off                   | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | on            | off                   | 2                  |   off                         |       off                 |    off                     |

@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingFixedAmountShippingCost
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify fixed amount shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | 10.9                  | 2                 |off                           | off                       |   off                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated  |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 3              | 10.9                  | 2                  |   off                         |       off                 |    off                     |

@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingCalculatedShippingCost
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify calculated amount shipping
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | off                   | 2                 |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 3              | off                   | 2                  |   50                          |       off                 |    5.3                      |

@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingFreeShippingThresholdCheck
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify calculated amount shipping + free shipping threshold
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Profit Margin  | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 3              | 50             | 0             | 15             | off                 | off            |off           | off                   | off               |20                            | You Saved %1$s            |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Profit Margin  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |     off      | off           | 3              | off                   | off                |  20                           |       You Saved %1$s      |    5.3                      |

@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingHideShippingCheck
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify hide shipping price
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated   |
    | 50             | 0             | 15             | on                  | off            |off           | off                   | off               |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | on                  |     off      | off           | off                   | off                |  off                          |       off                 |    5.3                      |


@smokeX3
@carriers
@ShippingCalculationSettings
@ShippingTBCCheck
@B2Bcustomer
@XMECOM-7495
@XMECOM-7952
Scenario:  As an admin, I want to configure various calculation settings on carrier page for XM Simple shipping and verify on webstore - verify TBC price
Given I am on the admin dashboard
When I click on the Shipping Setup under System Menu 
  And I click on the Carriers link
Then I should see available carriers page
When I click Edit Carriers name
  |Carrier Name |
  |XM Shipping Carrier| 
  And I update below calculation settings
    | Input          | Input         | Input          | Button              | Checkbox-Input |Button        | Checkbox-Input        | Input             |Checkbox-Input                | Checkbox-Input            | Checkbox-Input             |
    | Maximum Volume | Minimum Weight| Maximum Weight | Hide Shipping Price | TBC Shipping   |Free Shipping | Fixed Amount Shipping | Additional Charges|Free Shipping for Orders over | Enable calculation amount | Shipping Cost Calculated  |
    | 50             | 0             | 15             | off                 | TBC            |off           | off                   | off               |50                            | off                       |   5.3                      |
Then I should see "Your Carrier has been updated." successfully
When I click on WebStore button
  And I search for the product "KIT BAG" in the search box and click search Icon
  And I click on the product "KIT BAG"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
    |Product Name  |
    |KIT BAG       |
    | Normal Order |
When I click on Proceed to checkout 
  And I choose "218 CHESTERVILLE RD" shipping address and click continue
Then I should verify below XM Carrier results on one-page checkout
 | Carrier Name       | Carrier to be shown | Hide Shipping Price | TBC Shipping |Free Shipping  | Fixed Amount Shipping | Additional Charges | Free Shipping for Orders over | Enable calculation amount |  Shipping Cost Calculated   |
 | XM Shipping Carrier|   Carrier Shown     | off                 |    TBC       | off           | off                   | off                |  off                          |       off                 |    5.3                      |
