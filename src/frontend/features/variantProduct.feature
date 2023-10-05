Feature: Variant Products
  Feature Description: This feature file consists of tests relates to Catalog > products > product variant

 
  @regression
  @sage300
  @variantProduct
  Scenario: As a B2B User ,I want to navigate to variant products page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Variations link
      And I click on the Variant Products link
    Then I should navigated to Variant Products page

  @smoke
  @sage300
  @variantProduct
  @variantdropdown
  @xmecom-7799
  Scenario: As a B2B User ,I want to add/assign/verify/delete variant dropdown and assign those product to category and addtocart in the front end 
    Given I am on the Variant Products page
    When I search for the variant is already exists before creating new one
      | VariantName   |
      | dropdownTest  | 
    And I enter variant products details and click Save button
      | Description  | VariantName    |
      | dropdownTest | dropdownTest   |
    Then I should see variant details saved successfully
    When I click Variants tab on the variant product page
    Then I should see variant product details page
    When I select "Automation" variants option and click Add Option button
      And I search for the product and click Link Item to Variant
          |productName  |VariantOptions|
          |A16550       |Test   |
    When I click General Tab on the variant product detail page
      And I add Price Itemno "A16550" on the General Settings page and click Apply button
    Then I should see details saved successfully
    When I select Category "Variant Test" and assign newly created variant product
    | dropdownTest   | 
      And I click on WebStore button
      And I click on the category "Variant Test"
      And I click on the product "dropdownTest"
      And I select variant dropdown "Test" and click on Add to Cart button
   Then I should see msg "Item has been added to your cart."     

  @smoke
  @sage300
  @variantProduct
  @swatches
  @XMECOM-7747
  Scenario: As a B2B User ,I want to add/assign/verify/delete variant swatches and assign those product to category and addtocart in the front end 
      Given I am on the Variant Products page
      When I search for the variant is already exists before creating new one
        | VariantName   |
        | swatchesTest  | 
      And I enter variant products details and click Save button
        | Description  | VariantName    |
        | swatchesTest | swatchesTest   |
      Then I should see variant details saved successfully
      When I click Variants tab on the variant product page
      Then I should see variant product details page
      When I select "color" variants option and click Add Option button
        And I search for the product and click Link Item to Variant
            |productName  |VariantOptions|
            |A17000       |red   |
            |A1779B       |blue  |
            |A14010       |yellow|
      When I click General Tab on the variant product detail page
        And I add Price Itemno "A17000" on the General Settings page and click Apply button
      Then I should see details saved successfully
      When I select Category "Variant Test" and assign newly created variant product
      | swatchesTest   | 
        And I click on WebStore button
        And I click on the category "Variant Test"
        And I click on the product "swatchesTest"
        And I click on variant swatches color "yellow" and click on Add to Cart button
    Then I should see msg "Item has been added to your cart." 

  @smoke
  @sage300
  @variantProduct
  @matrix
  @XMECOM-7828
  Scenario: As a B2B User ,I want to add/assign/verify/delete variant matrix and assign those product to category and addtocart in the front end 
      Given I am on the Variant Products page
      When I search for the variant is already exists before creating new one
        | VariantName   |
        | matrixTest  | 
      And I enter variant products details and click Save button
        | Description  | VariantName    |
        | matrixTest   | matrixTest   |
      Then I should see variant details saved successfully
      When I click Variants tab on the variant product page
      Then I should see variant product details page
      When I select variants option and click Add Option button
          |Matrix X - Size  |Matrix Y - Color|                     
    And I search for the product and click Link Item to Variant matrix
            |productName  |matrix-x  |matrix-y|
            |A11050       | M        |BLUE   |
            |A17000       | XS       |YELLOW  |  
    When I click General Tab on the variant product detail page
    And I add Price Itemno "A11050" on the General Settings page and click Apply button
      Then I should see details saved successfully
      When I select Category "Variant Test" and assign newly created variant product
      | matrixTest   | 
        And I click on WebStore button
        And I click on the category "Variant Test"
        And I click on the product "matrixTest"
        And I click on variant matrix "YELLOW" and click on Add to Cart button
    Then I should see msg "Your product has been added to the cart" 

  
  @smokeX3
  @xm
  @variantProduct
  Scenario: As a B2B User ,I want to navigate to variant products page
    Given I am on the sage admin page
    When I click on the Catalog link
      And I click on the Product Variations link
      And I click on the Variant Products link
    Then I should navigated to Variant Products page
 
  @smokeX3
  @xm
  @variantProduct
  @variantdropdown
  @xmecom-7799
  Scenario: As a B2B User ,I want to add/assign/verify/delete variant dropdown and assign those product to category and addtocart in the front end 
    Given I am on the Variant Products page
    When I search for the variant is already exists before creating new one
      | VariantName   |
      | dropdownTest  | 
    And I enter variant products details and click Save button
      | Description  | VariantName    |
      | dropdownTest | dropdownTest   |
    Then I should see variant details saved successfully
    When I click Variants tab on the variant product page
    Then I should see variant product details page
    When I select "Automation" variants option and click Add Option button
      And I search for the product and click Link Item to Variant
          |productName     |VariantOptions|
          |7T183202D       |TestX3   |
    When I click General Tab on the variant product detail page
      And I add Price Itemno "7T183202D" on the General Settings page and click Apply button
    Then I should see details saved successfully
    When I select Category "Variant Test" and assign newly created variant product
    | dropdownTest   | 
      And I click on WebStore button
      And I click on the category "Variant Test"
      And I click on the product "dropdownTest"
      And I select variant dropdown "TestX3" and click on Add to Cart button
   Then I should see msg "Item has been added to your cart."      

   
@smokeX3
@xm
@variantProduct
@swatches
@XMECOM-7799
Scenario: As a B2B User ,I want to add/assign/verify/delete variant swatches and assign those product to category and addtocart in the front end 
    Given I am on the Variant Products page
    When I search for the variant is already exists before creating new one
      | VariantName   |
      | swatchesTest  | 
    And I enter variant products details and click Save button
      | Description  | VariantName    |
      | swatchesTest | swatchesTest   |
    Then I should see variant details saved successfully
    When I click Variants tab on the variant product page
    Then I should see variant product details page
    When I select "colour" variants option and click Add Option button
      And I search for the product and click Link Item to Variant
          |productName    |VariantOptions|
          |3A10191C       |red   |
          |3A10191F       |blue  |
          |3A10191H       |yellow|
    When I click General Tab on the variant product detail page
      And I add Price Itemno "3A10191F" on the General Settings page and click Apply button
    Then I should see details saved successfully
    When I select Category "Variant Test" and assign newly created variant product
    | swatchesTest   | 
      And I click on WebStore button
      And I click on the category "Variant Test"
      And I click on the product "swatchesTest"
      And I click on variant swatches color "Yellow" and click on Add to Cart button
   Then I should see msg "Item has been added to your cart."  

@smokeX3
@xm
@variantProduct
@matrix
@XMECOM-7835
Scenario: As a B2B User ,I want to add/assign/verify/delete variant matrix and assign those product to category and addtocart in the front end 
    Given I am on the Variant Products page
    When I search for the variant is already exists before creating new one
      | VariantName   |
      | matrixTest  | 
    And I enter variant products details and click Save button
      | Description  | VariantName    |
      | matrixTest   | matrixTest   |
    Then I should see variant details saved successfully
    When I click Variants tab on the variant product page
    Then I should see variant product details page
    When I select variants option and click Add Option button
         |Matrix Y - Size  |Matrix X - Color|                     
   And I search for the product and click Link Item to Variant matrix
          |productName    |matrix-x     |matrix-y|
          |3A10191F       | Blue        |M       |
          |3A10191H       | Yellow      |XS      |  
  When I click General Tab on the variant product detail page
  And I add Price Itemno "3A10191H" on the General Settings page and click Apply button
    Then I should see details saved successfully
    When I select Category "Variant Test" and assign newly created variant product
    | matrixTest   | 
      And I click on WebStore button
      And I click on the category "Variant Test"
      And I click on the product "matrixTest"
      And I click on variant matrix "Senior M" and click on Add to Cart button
   Then I should see msg "Your product has been added to the cart" 