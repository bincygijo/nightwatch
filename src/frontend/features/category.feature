Feature: Categories
  
@smoke
@sage300
@countCategoryAssignedToProduct
@verifySortingDefault
@b2buser
@XMECOM-6901
@XMECOM-7016
Scenario:As a B2B User, Verify the default sort order and number of products assigned to each category in admin and front end
Given I am on the admin dashboard
When I click on the Catalog link
  And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I click on item assigned for the category "Test categoriesB"
Then I should read details of all products assigned to that category in admin
When I click on WebStore button in the admin dashboard
  And I click on the category "Test categoriesB"
  And I click on the sort by "Default" method
Then I see "Product Names" are listed as per "Default" sort order method

@regression
@sage300
@verifySorting
@b2buser
@XMECOM-7028
Scenario:As a B2B User, Verify the sorting methods on Front end for each category or search listing
Given I am on the admin dashboard
When I click on the Catalog link
  And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I click on item assigned for the category "Test categoriesB"
Then I should read details of all products assigned to that category in admin
When I click on WebStore button in the admin dashboard
  And I click on the category "Test categoriesB"
  And I click on the sort by "A-Z" method
Then I see "Product Names" are listed as per "A-Z" sort order method
When I click on the sort by "Z-A" method
Then I see "Product Names" are listed as per "Z-A" sort order method

@regression
@sage300
@verifySorting
@b2buser
@XMECOM-7028
Scenario:As a B2B User, Verify the sorting methods on Front end for each category or search listing
Given I am on the admin dashboard
When I click on the Catalog link
  And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I click on item assigned for the category "Test categoriesB"
Then I should read details of all products assigned to that category in admin
When I click on WebStore button in the admin dashboard
  And I click on the category "Test categoriesB"
  And I click on the sort by "Item Code A-Z" method
Then I see "Item Codes" are listed as per "Item Code A-Z" sort order method
When I click on the sort by "Item Code Z-A" method
Then I see "Item Codes" are listed as per "Item Code Z-A" sort order method

@smoke
@sage300
@category
@XMECOM-6894
@xmecom-7474
Scenario:  As a Admin User ,I want to navigate to category management page and create parent child categories under B2B
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I search "Automation Test Sage300 Parent" category and "Delete" it if it exists
And I click on "Create" button 
    And I enter Category title as "Automation Test Sage300 Parent"
Then Category creation is confirmed with "Your category has been created." message
When I select Category "Automation Test Sage300 Parent" and assign below products
| WATCHPROCESSORS1   | WATCHDRAM    | TAPTICENG     | SUB004    | SFI019    | SFI018    | SER008   |
Then I see "7" items successfully assigned to category "Automation Test Sage300 Parent"
When I select Category "Automation Test Sage300 Parent" and click "Create" button next to it
    And I enter Category title as "Watch"
Then Category creation is confirmed with "Your category has been created." message
When I select Category "Watch" and assign below products
| WATCHSILVERALUCASING   | WATCHDRAM    | TAPTICENG     | SUB004    | SFI019    |
Then I see "5" items successfully assigned to category "Watch"
When I select Category "Watch" and click "Create" button next to it
    And I enter Category title as "Case"
Then Category creation is confirmed with "Your category has been created." message
When I select Category "Case" and assign below products
| WATCHPROCESSORS1   | WATCHSILVERALUCASING    | AWSLOWXCOVERGLASS     | 
Then I see "3" items successfully assigned to category "Case"
When I click on WebStore button in the admin dashboard
    And I click on the category "Automation Test Sage300 Parent"
Then I find below products listed correctly for "Automation Test Sage300 Parent"
| WATCHPROCESSORS1   | WATCHDRAM  | TAPTICENG | SUB004 | SFI019 | SFI018 | SER008   | WATCHSILVERALUCASING  | AWSLOWXCOVERGLASS |      

@smoke
@sage300
@Filters
@XMECOM-6944
@XMECOM-7474
Scenario:  As an admin User ,I want to create to new filter, assign products and verify on front end if the count and names of the products match
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on Product Filters
    And I click on Manage Filter keys for "Test Automation Filter"
    And I delete all filter keys
    And I disable "Test Automation Filter" and click Apply button
Then I see "Module settings have been updated" message
    And I select first un-used "Custom" Filter and name it "Test Automation Filter" and click apply button
Then I see "Module settings have been updated" message
When I click on Manage Filter keys for "Test Automation Filter"
Then I should be navigated to "Manage Product Filter Keys" page
When I enter below information for keys and click Add button
|Filter By|Title|
|TimTam| Tim Tam|
|JimJam| Jim Jam|
Then I see "Saved Successfully" message
When I click on the Products link 
Then I should be navigated to "All Items List" page
When I choose different products as below and assign keys under filter "Test Automation Filter"
|Tim Tam | YELLOW003    | YELLOW002   | YELLOW001   | WATCHSILVERALUFRAM | 
|Jim Jam | #VOLDISCOUNT | F1-470/T    | F1-465/B    | C2-230/Y           | 
Then I should be navigated to "All Items List" page
When I click on WebStore button in the admin dashboard
When I search for the product "" in the search box and click search Icon
Then Below keys are shown successfully along with products under filter "Test Automation Filter"
|Tim Tam | YELLOW003    | YELLOW002   | YELLOW001   | WATCHSILVERALUFRAM | 
|Jim Jam | #VOLDISCOUNT | F1-470/T    | F1-465/B    | C2-230/Y           | 


@regression
@sage300
@b2buser
@XMECOM-7054
@SiteSettings
Scenario Outline: As an Admin, I want to read site settings for Ordering and display and verify on front end
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
    And I click on Site Settings Menu
Then I should be navigated to "Site Management This page contains some of the main settings for the site" page
When I update Ordering & Display Settings as below
    |Number of Products per Page| Number of Products per Line|
    |       <prodPerPage>       |       <prodPerLine>        |
Then I see "Your Site Settings have been updated." message
When I click on WebStore button in the admin dashboard
    And I click on the category "Test categoriesB" 
Then I can see products are displayed as per site settings on each page of search results for each view type
    |Number of Products per Page| Number of Products per Line|
    |       <prodPerPage>       |       <prodPerLine>        |
Examples:
    |       prodPerPage       |       prodPerLine        |
    |           15            |           2              |


@regression
@sage300
@CategorySettings
@adminUser
@XMECOM-7129
Scenario Outline:As a admin User, Verify the Category Settings in front end
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Category Settings" and click "Edit" button next to it
And  I click on "Settings" tab
Then I see "Settings" tab active
When I update below Catalog-Category settings 
    |Display in Menu   |Display sidebar categories filter    |Show Product List   |Permalink   |Breadcrumb   |
    |<Display in Menu> |<Display sidebar categories filter>  |<Show Product List> |<Permalink> |<Breadcrumb> |
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
Then I verify below Catalog-Category settings
    |Category   |Display in Menu   |Display sidebar categories filter    |Show Product List   |Permalink   |Breadcrumb   |
    |<Category> |<Display in Menu> |<Display sidebar categories filter>  |<Show Product List> |<Permalink> |<Breadcrumb> |
Examples:
   |Category|Display in Menu |Display sidebar categories filter |  Show Product List |Permalink |Breadcrumb|
   |Category Settings | off            |off                               |  off               |off       |off       | 
   |Category Settings | on             |off                               |  off               |on        |on        | 
   |Category Settings | on             |on                                |  on                |on        |on        | 
   
@regression
@bugExists
@sage300
@CategorySettings
@adminUser
@XMECOM-7185
Scenario Outline:As a admin User, Verify the catalog filter settings in front end
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Category Settings" and click "Edit" button next to it
And  I click on "Filter Settings" tab
Then I see "Filter Settings" tab active
When I update Catalog-Category Filter settings with below order
    |Filter by Price     |Brand      |   Clothing   |Filter by Stock   | Furniture  | Accessories   | TestBaswa   | filter-by-brand   | 
    |<Filter by Price>   |<Brand>    |  <Clothing>  |<Filter by Stock> |<Furniture> | <Accessories> | <TestBaswa> | <filter-by-brand> | 
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I click on the category "Category Settings"
Then I should see all the products in "Category Settings"
Then I verify Catalog-Category Filter settings with below order
    |Filter by Price     |Brand      |   Clothing   |Filter by Stock   | Furniture  | Accessories   | TestBaswa   | filter-by-brand   | 
    |<Filter by Price>   |<Brand>    |  <Clothing>  |<Filter by Stock> |<Furniture> | <Accessories> | <TestBaswa> | <filter-by-brand> | 
Examples:
    |Filter by Price     |Brand      |   Clothing   |Filter by Stock | Furniture  | Accessories | TestBaswa   | filter-by-brand   |  
    | checked            | checked   |   checked    | checked        | checked    | checked     | checked     | checked           | 
    | UnChecked          | UnChecked |   UnChecked  | UnChecked      | UnChecked  | UnChecked   | UnChecked   | UnChecked         | 


@regression
@sage300
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category ON and hot-deal ON with add to cart & slider
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Fashion" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see grid msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | unChecked        | unChecked      | checked                | checked    | 5                           |
     And   I configure Mega Menu "Contents" for below values
        | off |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on     |  on        | on       | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "Fashion"
Then I verify "Fashion" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | unChecked         | unChecked        | checked             | checked    | 5                           |
    And I verify "Fashion" Mega Menu "Contents" for below values
        | off |
    And I verify "Fashion" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on     |  on        | on       | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I delete Mega Menu for 'Fashion' category
Then I see "category updated successfully" message

@regression
@sage300
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category ON and hot-deal ON with slider ON but addtocart OFF
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Fashion" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see grid msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | unChecked              | unChecked  | 5                           |
    And I configure Mega Menu "Contents" for below values
        | on |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on    |  off        | on       | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "Fashion"
Then I verify "Fashion" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | unChecked              | unChecked  | 5                           |
    And I verify "Fashion" Mega Menu "Contents" for below values
        | on |
    And I verify "Fashion" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on    |  off        | on       | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I delete Mega Menu for 'Fashion' category
Then I see "category updated successfully" message

@regression
@sage300
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category OFF and hot-deal ON with NO add to cart or slider
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Fashion" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories   | masonary   | sub categories column count |
        |off    | checked          | checked        | unChecked                | unChecked  | 5                           |
    And I configure Mega Menu "Contents" for below values
        | on |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on     |  off       | off      | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "Fashion"
Then I verify "Fashion" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | off    | checked         | checked        | unChecked              | unChecked  | 5                           |
    And I verify "Fashion" Mega Menu "Contents" for below values
        | on |
    And I verify "Fashion" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5 |
        | on     |  off       | off      | 4                     | A1-105/0  | C2-230/Y  | A1-900/G  | A1-401/0  | A1-700/0 |
When I delete Mega Menu for 'Fashion' category
Then I see "category updated successfully" message
        

@smokeX3
@xm
@countCategoryAssignedToProduct
@verifySortingDefault
@b2buser
@XMECOM-6901
@XMECOM-7016
Scenario:As a B2B User, Verify the default sort order and number of products assigned to each category in admin and front end
Given I am on the admin dashboard
When I click on the Catalog link
  And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I click on item assigned for the category "Standing Products"
Then I should read details of all products assigned to that category in admin
When I click on WebStore button in the admin dashboard
  And I click on the category "Standing Products"
  And I click on the sort by "Default" method
Then I see "Product Names" are listed as per "Default" sort order method

@smokeX3
@xm
@verifySorting
@b2buser
@XMECOM-7028
Scenario:As a B2B User, Verify the sorting methods on Front end for each category or search listing
Given I am on the admin dashboard
When I click on the Catalog link
  And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I click on item assigned for the category "Standing Products"
Then I should read details of all products assigned to that category in admin
When I click on WebStore button in the admin dashboard
   And I click on the category "Standing Products"
  And I click on the sort by "A-Z" method
Then I see "Product Names" are listed as per "A-Z" sort order method
When I click on the sort by "Z-A" method
Then I see "Product Names" are listed as per "Z-A" sort order method
When I click on the sort by "Item Code A-Z" method
Then I see "Item Codes" are listed as per "Item Code A-Z" sort order method
When I click on the sort by "Item Code Z-A" method
Then I see "Item Codes" are listed as per "Item Code Z-A" sort order method

@smokeX3
@xm
@category
@XMECOM-6894
Scenario: As a Admin User ,I want to navigate to category management page and create parent child categories under B2B
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I search "Automation Test X3 Parent" category and "Delete" it if it exists
When I click on "Create" button 
    And I enter Category title as "Automation Test X3 Parent"
Then I see "Your category has been created." message
When I select Category "Automation Test X3 Parent" and assign below products
| 9BA201B001| 9BA202B001 | 9BA203B001  | 9BA201B003 | 9BA202B003 | 9BX110E005 |
Then I see "6" items successfully assigned to category "Automation Test X3 Parent"
When I select Category "Automation Test X3 Parent" and click "Create" button next to it
    And I enter Category title as "Football"
Then I see "Your category has been created." message
When I select Category "Football" and assign below products
| PWA3044   | PWA3041    | PWA3043     | PWA3021    | PWA3033    | PWA3023    | 
Then I see "6" items successfully assigned to category "Football"
When I select Category "Football" and click "Create" button next to it
    And I enter Category title as "Gloves"
Then I see "Your category has been created." message
When I select Category "Gloves" and assign below products
| FK104F    |  3C19224C    | 3C19222C   | 
Then I see "3" items successfully assigned to category "Gloves"
  When I click on WebStore button in the admin dashboard
    And I click on the category "Automation Test X3 Parent"
Then I find below products listed correctly for "Automation Test X3 Parent"
| 9BA201B001| 9BA202B001 | 9BA203B001  | 9BA201B003 | 9BA202B003 | 9BX110E005 | PWA3044 | PWA3041 | PWA3043 | PWA3021 | PWA3033 | PWA3023 | FK104F  | 3C19224C | 3C19222C |


@smokeX3
@xm
@Filter
@XMECOM-6944
@XMECOM-7007
Scenario:  As an admin User ,I want to create to new filter, assign products and verify on front end if the count and names of the products match
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on Product Filters
    And I click on Manage Filter keys for "Test Automation Filter"
    And I delete all filter keys
    And I disable "Test Automation Filter" and click Apply button
Then I see "Module settings have been updated" message
    And I select first un-used "Custom" Filter and name it "Test Automation Filter" and click apply button
Then I see "Module settings have been updated" message
When I click on Manage Filter keys for "Test Automation Filter"
Then I should be navigated to "Manage Product Filter Keys" page
When I enter below information for keys and click Add button
|Filter By|Title|
|TimTam| Tim Tam|
|JimJam| Jim Jam|
Then I see "Saved Successfully" message
When I click on the Products link 
Then I should be navigated to "All Items List" page
When I choose different products as below and assign keys under filter "Test Automation Filter"
|Tim Tam | 7T183202D  | 6S10182   | 6S10111   | 3T182599    | 
|Jim Jam | 3T160502   | 3T141199  | 3S19356   | 1B4285S01BP | 
Then I should be navigated to "All Items List" page
When I click on WebStore button in the admin dashboard
When I search for the product "" in the search box and click search Icon
Then Below keys are shown successfully along with products under filter "Test Automation Filter"
|Tim Tam | 7T183202D  | 6S10182   | 6S10111   | 3T182599    | 
|Jim Jam | 3T160502   | 3T141199  | 3S19356   | 1B4285S01BP | 
        
@smokeX3
@xm
@b2buser
@XMECOM-7054
@SiteSettings
Scenario Outline: As an Admin, I want to read site settings for Ordering and display and verify on front end
Given I am on the storeAdminPhp
When I click on the System link from the admin side menu
    And I click on Site Settings Menu
Then I should be navigated to "Site Management This page contains some of the main settings for the site" page
When I update Ordering & Display Settings as below
    |Number of Products per Page| Number of Products per Line|
    |       <prodPerPage>       |       <prodPerLine>        |
Then I see "Your Site Settings have been updated." message
When I click on WebStore button in the admin dashboard
    And I click on the category "CRICKET" 
Then I can see products are displayed as per site settings on each page of search results for each view type
    |Number of Products per Page| Number of Products per Line|
    |       <prodPerPage>       |       <prodPerLine>        |
Examples:
    |       prodPerPage       |       prodPerLine        |
    |           15            |           2              |


@smokeX3
@xm
@CategorySettings
@adminUser
@XMECOM-7129
Scenario Outline:As a admin User, Verify the Category Settings in front end
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Category Settings" and click "Edit" button next to it
And  I click on "Settings" tab
Then I see "Settings" tab active
When I update below Catalog-Category settings 
   |Display in Menu   |Display sidebar categories filter    |Show Product List   |Permalink   |Breadcrumb   |
   |<Display in Menu> |<Display sidebar categories filter>  |<Show Product List> |<Permalink> |<Breadcrumb> |

Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
Then I verify below Catalog-Category settings
   |Category   |Display in Menu   |Display sidebar categories filter    |Show Product List   |Permalink   |Breadcrumb   |
   |<Category> |<Display in Menu> |<Display sidebar categories filter>  |<Show Product List> |<Permalink> |<Breadcrumb> |
Examples:
   |Category          |Display in Menu |Display sidebar categories filter |  Show Product List |Permalink |Breadcrumb|
   |Category Settings | off            |off                               |  off               |off       |off       | 
   |Category Settings | on             |off                               |  off               |on        |on        | 
   |Category Settings | on             |on                                |  on                |on        |on        | 

@smokeX3
@xm
@CategorySettings
@adminUser
@XMECOM-7185
Scenario Outline:As a admin User, Verify the catalog filter settings in front end
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "Category Settings" and click "Edit" button next to it
And  I click on "Filter Settings" tab
Then I see "Filter Settings" tab active
When I update Catalog-Category Filter settings with below order
    |Collection      |Filter by Stock     |Size     |Weight   | Colour   | Orientation   |
    |<Collection>    |<Filter by Stock>   |<Size>   |<Weight> | <Colour> | <Orientation> |
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I click on the category "Category Settings"
Then I should see all the products in "Category Settings"
Then I verify Catalog-Category Filter settings with below order
    |Collection      |Filter by Stock     |Size     |Weight   | Colour   | Orientation   |  
    |<Collection>    |<Filter by Stock>   |<Size>   |<Weight> | <Colour> | <Orientation> |  
Examples:
    |Collection |Filter by Stock     |Size         |Weight        | Colour      | Orientation  | 
    | checked   | checked            | checked     | checked      | checked     | checked      | 
    #| UnChecked | UnChecked          | UnChecked   | UnChecked    | UnChecked   | UnChecked    |  outstanding bug to be fixed


@smokeX31
@xm
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
@XMECOM-7286
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category ON and hot-deal ON with add to cart & slider
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "CRICKET" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | checked                | checked    | 5                           |
    And I configure Mega Menu "Contents" for below values
        | off |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on     |  on        | on       | 4                     | 8C00013   | 8C00007   | b2b1a1104 | 3T160502  | 9BX110E005   |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "CRICKET"
Then I verify "CRICKET" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | checked                | checked    | 5                           |
    And I verify "CRICKET" Mega Menu "Contents" for below values
        | off |
    And I verify "CRICKET" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on     |  on        | on       | 4                     | 8C00013   | 8C00007   | b2b1a1104   | 3T160502  | 9BX110E005   |
When I delete Mega Menu for 'CRICKET' category
Then I see "category updated successfully" message

@smokeX31
@xm
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
@XMECOM-7286
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category ON and hot-deal ON with slider ON but addtocart OFF
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "CRICKET" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | unChecked              | unChecked  | 5                           |
    And I configure Mega Menu "Contents" for below values
        | off |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on    |  off        | on       | 4                     | 8C00013   | 8C00007   | b2b1a1104   | 3T160502  | 9BX110E005   |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "CRICKET"
Then I verify "CRICKET" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | on    | checked          | checked        | unChecked              | unChecked  | 5                           |
    And I verify "CRICKET" Mega Menu "Contents" for below values
        | off |
    And I verify "CRICKET" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on    |  off        | on       | 4                     | 8C00013   | 8C00007   | b2b1a1104   | 3T160502  | 9BX110E005   |
When I delete Mega Menu for 'CRICKET' category
Then I see "category updated successfully" message

@smokeX31
@xm
@CategorySettings
@CategoryMegaMenu
@adminUser
@XMECOM-7205
@XMECOM-7286
Scenario:As a admin User, Verify the catalog mega menu settings in front end with sub-category OFF and hot-deal ON with NO add to cart or slider
Given I am on the admin dashboard
When I click on the Catalog link
    And I click on the Categories link
Then I should be navigated to "Item Category Management" page
When I select Category "CRICKET" and click "Edit" button next to it
    And  I click on "Responsive Mega Menu Settings" tab
Then I see "Responsive Mega Menu Settings" tab active
When I click Add Container button on Category Page
Then I should see msg "Container created successfully."
When I configure Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories   | masonary   | sub categories column count |
        |off    | checked          | checked        | unChecked                | unChecked  | 5                           |
    And I configure Mega Menu "Contents" for below values
        | on |
    And I configure Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on     |  off       | off      | 4                     | 8C00013   | 8C00007   | b2b1a1104   | 3T160502  | 9BX110E005   |
When I click Apply button on Category page
Then I see "category updated successfully" message
When I click on WebStore button in the admin dashboard
When I hover on the category "CRICKET"
Then I verify "CRICKET" Mega Menu "Sub Categories" for below values
        |Enable |display thumbnail | display titles | hide nested categories | masonary   | sub categories column count |
        | off    | checked         | checked        | unChecked              | unChecked  | 5                           |
    And I verify "CRICKET" Mega Menu "Contents" for below values
        | on |
    And I verify "CRICKET" Mega Menu "Hot Deals" for below values
        | Enable |  AddToCart | Slider   | MaxDisplayitemsSlider | Product 1 | Product 2 | Product 3 | Product 4 |Product 5     |
        | on     |  off       | off      | 4                     | 8C00013   | 8C00007   | b2b1a1104   | 3T160502  | 9BX110E005   |
When I delete Mega Menu for 'CRICKET' category
Then I see "category updated successfully" message