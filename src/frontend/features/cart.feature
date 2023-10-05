Feature: Cart
  Feature Description: This feature file consists of tests related to view cart and cart widget

@smoke
@sage300
@xm
@searchByProductCode
@variantProducts
@b2buser
@XMECOM-7861
Scenario: As a B2B User, I want to verify cart widget against view cart page
Given I am on the storePHP page
When I search for the product "A1757/G" in the search box and click search Icon
 And I click on the product "Paper Clip Dispenser - Image-1500 Series"
Then I should verify the product status is Instock and price in product detail page
When I click on Add to Cart button on the product
Then I should see msg "Item has been added to your cart."
When I click on Cart icon Button
Then I should verify for below product - Cart Calculations are correct
|Product Name                            |
|Paper Clip Dispenser - Image-1500 Series| 
| Normal Order                           | 
And I should verify cart widget product price as well as cart page 