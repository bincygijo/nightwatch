Feature: ContentManagement

    Feature Description: This feature file consists of tests related to contentManagement module in Admin

@regression
@smokeX3
@sage300
@contentManagement
Scenario: As a B2B User ,I want to navigate to Content Management page
    Given I am on the admin dashboard
    When I click the Content Management link
        And I click on the Custom Pages link
    Then I should navigated to Manage Site Contents pages 

@regression
@smokeX3
@sage300
@contentManagement
Scenario: As a B2B User ,I want to add/delete responsive content grid
    Given I am on the Manage Site Contents page
    When I search for a custom page "Automation" and click Edit button
    Then I should navigated to edit custom page
    When I add content grid by clicking Add Container button
    Then I should see grid msg "Container created successfully."
    When I add New Column by clicking New Column button
    Then I should see the new Column pop up window
    When I select Available column size and click Apply button
    Then I should see grid msg "New column added successfully."
    When I click on the Responsive content grid Delete button
        And I click Delete button on the delete container confirmation pop up window
    Then I should see your container has been deleted message

@regression
@smokeX3
@sage300
@contentManagement
Scenario: As a B2B User,I want to navigate to the Content Management default pages
    Given I am on the admin dashboard
    When I click the Content Management link   
        And I click on the Default Pages link
    Then I should navigated to the Manage Default Dealer pages 

@smoke
@smokeX3
@sage300
@contentManagement
@userAccountGrid
Scenario: As a B2B User, I want to delete the newly added User Account grid
    Given I am on the Manage default dealer page
    When I click Edit button on the "User Account" link
    Then I should navigate to manage site content page
    When I click Delete button on the container grid
    Then I should see Delete container pop up window
    When I click on the container pop up Delete button 
    Then I should see your container has been deleted message

   @smoke
   @sage300
   @contentManagement   
   @productsGrid
   @xmecom-7024
   @xmecom-7071
   Scenario: As a B2B User,I want to add new grid for products(product image and product details module)
        Given I am on the Manage default dealer page
        When I click Edit button on the "Product" link
        Then I should navigate to manage site content page
        When I click Add Container button
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Product Image" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I click Action button and click Edit column on the Product Image Module
        And I update Column Title and Column Size in the Column Settings page
        Then I should see grid msg "Column Updated."
        When I add New Column by clicking New Column button
        And I select Available column size "6" and "Product Details" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Product details Module"
        And I enable display settings on the Product Detail Module pop up 
        Then I should see Details have been updated successfully
        When I click on WebStore button
        And I search for the product "#VOLPRIC" in the search box and click search Icon
        And I click on the product "Volume Pricing Test"
        Then I should verify product Image and Product Details grid module in product detail page

    @smoke
    @sage300
    @contentManagement
    @productsGrid
    @xmecom-7075
    Scenario: As a B2B User, I want to delete the newly added Product grid in the product page
        Given I am on the Manage default dealer page
        When I click Edit button on the "Product" link
        Then I should navigate to manage site content page
        When I click Delete button on the container grid
        Then I should see Delete container pop up window
        When I click on the container pop up Delete button 
        Then I should see your container has been deleted message


   @smoke
   @sage300
   @contentManagement   
   @categoryGrid
   @CategoryMenu
   @headerMultiModule
   @headerModule
   @xmecom-7082
    Scenario: As a B2B User,I want to add/verify/delete Category Menu and Header Multi module grid at Header
        Given I am on the Manage default dealer page
        When I click Edit button on the "Header" link
        Then I should navigate to manage site content page
        When I click Enable legacy Header button and click Apply button
        And  I click Edit button on the "Header" link
        And  I click Add Container button on the header grid page
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Category Menu" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I add New Column by clicking New Column button
        And I select Available column size "6" and "Header Multi" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Header multi Module"
        And I click Apply button on the Edit Content pop up
        Then I should see Details have been updated successfully
        When I click on WebStore button
        Then I should verify the Category Menu Grid at header
        When I delete the added container at the header grid
        Then I should see the container deleted successfully at header module
        When I click Enable legacy Header button and click Apply button
        Then I should navigate to manage site content page
       
       
   @smoke
   @sage300
   @contentManagement   
   @categoryGrid
   @CategoryMiscModule
   @categoryFilterModule
   @categoryProductListingModule
   @xmecom-7088
   @xmecom-7104
    Scenario: As a B2B User,I want to add/verify/delete Category Misc,Category Filter and Category Product Listing module grid at category level
        Given I am on the Manage default dealer page
        When I click Edit button on the "Category" link
        Then I should navigate to manage site content page
        When I click Add Container button
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Category Misc" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I add New Column by clicking New Column button
        And I select Available column size "4" and "Category Filters" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Category filters Module"
        Then I click Apply button on the Edit Content
        When I add New Column by clicking New Column button
        And I select Available column size "8" and "Category Product Listing" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Category product listing Module"  
        And I click disable display settings on the Category Product listing Module pop up
        Then I should see Details have been updated successfully 
        When I click on WebStore button
        And I click on the category "Standard Products"
        Then I should verify all Category Grid Module
        When I delete the added container at the category grid
        Then I should see your container has been deleted message

            
#---------------------------X3----------------#

   @smokeX3
   @xm
   @contentManagement   
   @productsGrid
   @xmecom-7024
   @xmecom-7071
   Scenario: As a B2B User,I want to add new grid for products(product image and product details module)
        Given I am on the Manage default dealer page
        When I click Edit button on the "Product" link
        Then I should navigate to manage site content page
        When I click Add Container button
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Product Image" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I click Action button and click Edit column on the Product Image Module
        And I update Column Title and Column Size in the Column Settings page
        Then I should see grid msg "Column Updated."
        When I add New Column by clicking New Column button
        And I select Available column size "6" and "Product Details" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Product details Module"
        And I enable display settings on the Product Detail Module pop up 
        Then I should see Details have been updated successfully
        When I click on WebStore button
        And I search for the product "CALIBRE 2 STICK HOCKEY BAG" in the search box and click search Icon
        And I click on the product "CALIBRE 2 STICK HOCKEY BAG"
        Then I should verify product Image and Product Details grid module in product detail page

    @smokeX3
    @xm
    @contentManagement
    @productsGrid
    @xmecom-7075
    Scenario: As a B2B User, I want to delete the newly added Product grid in the product page
         Given I am on the Manage default dealer page
        When I click Edit button on the "Product" link
        Then I should navigate to manage site content page
        When I click Delete button on the container grid
        Then I should see Delete container pop up window
        When I click on the container pop up Delete button 
        Then I should see your container has been deleted message

   @smokeX3
   @xm
   @contentManagement   
   @categoryGrid
   @CategoryMenu
   @headerMultiModule
   @headerModule
   @xmecom-7096
    Scenario: As a B2B User,I want to add/verify/delete Category Menu and Header Multi module grid at Header
        Given I am on the Manage default dealer page
        When I click Edit button on the "Header" link
        Then I should navigate to manage site content page
        When I click Enable legacy Header button and click Apply button
        And  I click Edit button on the "Header" link
        And  I click Add Container button on the header grid page
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Category Menu" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I add New Column by clicking New Column button
        And I select Available column size "6" and "Header Multi" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Header multi Module"
        And I click Apply button on the Edit Content pop up
        Then I should see Details have been updated successfully
        When I click on WebStore button
        Then I should verify the Category Menu Grid at header
        When I delete the added container at the header grid
        Then I should see the container deleted successfully at header module
        When I click Enable legacy Header button and click Apply button
        Then I should navigate to manage site content page

   @smokeX3
   @xm
   @contentManagement   
   @categoryGrid
   @CategoryMiscModule
   @categoryFilterModule
   @categoryProductListingModule
   @xmecom-7088
   @xmecom-7124
    Scenario: As a B2B User,I want to add/verify/delete Category Misc,Category Filter and Category Product Listing module grid at category level
        Given I am on the Manage default dealer page
        When I click Edit button on the "Category" link
        Then I should navigate to manage site content page
        When I click Add Container button
        Then I should see grid msg "Container created successfully."
        When I click on the Edit Content link
        And I select "Category Misc" from the Content list
        And I click Apply button on the warning pop up window
        Then I should see grid msg "Contents have been updated."
        When I add New Column by clicking New Column button
        And I select Available column size "4" and "Category Filters" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Category filters Module"
        Then I click Apply button on the Edit Content
        When I add New Column by clicking New Column button
        And I select Available column size "8" and "Category Product Listing" from the New Column list
        Then I should see grid msg "New column added successfully."
        When I click edit button on the "Category product listing Module"  
        And I click disable display settings on the Category Product listing Module pop up
        Then I should see Details have been updated successfully 
        When I click on WebStore button
        And I click on the category "Standard Products"
        # Then I should verify all Category Grid Module
        When I delete the added container at the category grid
        Then I should see your container has been deleted message