Feature: Customer
  Feature Description: This feature file consists of tests related to customer module in Admin

  @regression1
  @sage3001
  @customer
  Scenario:As a B2B User, I want to navigate to Customer module
    Given I am on the admin dashboard
    When I click the Customers Menu link
      And I click Manage Customers link
    Then I click New Public User

  @smoke
  @sage300
  @customer
  Scenario Outline: As admin User, I want to create Customer (type B2B Dealer)
    Given I am on the admin dashboard
    When I click the Customers Menu link
      And I click Manage Customers link
      Then I should navigated to Active Customers page
    When I click New User button
      Then New User page is shown successfully
    When I choose Group type as "Wholesale Customer Group" and click continue
      Then Select Default customer screen is shown successfully
    When I select "Bargain Mart - Oakland" customer 
      Then User setup screen is shown successfully 
    When I enter personal information as below and click continue button
      | Primary Warehouse | UserName | Password |Confirm Password | Email   | First Name  | Last Name | Phone   |
      | <pwarehouse>      | <uName>  | <pwd>    |   <cpwd>        | <Email> | <fname>     | <lname>   | <phone> |
    Then The B2B user is created successfully
    When I click delete button against the user I created
    | Primary Warehouse | UserName | Password |Confirm Password | Email   | First Name  | Last Name | Phone   |
    | <pwarehouse>      | <uName>  | <pwd>    |   <cpwd>        | <Email> | <fname>     | <lname>   | <phone> |
    Then The user gets deleted successfully
    Examples:
      | pwarehouse |  uName        | pwd      | cpwd     | Email                | fname        | lname  | phone  |
      | BLUE       |  AutomationB2B| Test1234 | Test1234 | automationB2Buser@xm.com | Automation   | Last   | 123456 |

  @smoke
  @sage300
  @customer
  Scenario Outline: As a B2B User ,I want to add new public user for Canada 
    Given I am on the Manage Customers Menu
    When I click Add New Public user and enter personal information 
      | Firstname | Lastname | Email   | Password | Confirm Password | Country   | State   | Address line 1 | City   | Postcode |
      | <fname>   | <lname>  | <email> | <pwd>    | <cpwd>           | <country> | <state> | <addr>         | <city> | <pcode>  |
      And I click on the Apply button
    Then I should see the user is created successfully
      | Firstname | Lastname | Email   | Password | Confirm Password | Country   | State   | Address line 1 | City   | Postcode |
      | <fname>   | <lname>  | <email> | <pwd>    | <cpwd>           | <country> | <state> | <addr>         | <city> | <pcode>  |
    When  I delete the user which is created
    Then I should see the user is deleted successfully
    Examples:
      | fname | lname | email            | pwd      | cpwd     | country | state | addr        | city     | pcode       |
      | Test1 | User1 | automation@aa.cc | Test1234 | Test1234 | CANADA  | ON    | Testaddress | Testcity | 321738444   |
     
  @smoke
  @sage300
  @pastuser
  Scenario:As a B2B User, I want to activate/deactivate  Past Users
    Given I am on the admin dashboard
    When I click Customers and Manage Customers link
    Then I should see Active Customers page
    When I click on the Past Users link
    Then I search one of the past users from the past users list
    When I click on the Edit button
    Then I should navigate to Edit User page
    When I click Activate button on the edit user page
    Then I should see user has been reactivated success message
    When I search for the same user from the active customers list
    Then I should see the same reactivated user from the customers list
    When I click on the Delete button
    Then I should see the user has been deleted success message


  @regression
  @sage300
  @assumeuser
  Scenario:AS a B2B User,I want to assume customer as B2C
    Given I am on the admin dashboard
    When I click Customers and Manage Customers link
    Then I should see Active Customers page
    When I search one of the B2C users from the customers list
      And  I click Assume button on the selected customer
    Then I should navigated to homepage
    When I click Logout button on the homepage
    Then I should navigated to Active Customers page

  @smoke
  @sage300
  @registerB2BUser
  @XMECOM-7719
  Scenario Outline: Register B2B user from home page
  Given I am on the Home page
  When I click Register button and choose "wholesale" account and enter details as below and click submit button
  |Firstname  |Lastname  |Email  |Password  |Address line  |City  |Country  |State  |
  |<Firstname>|<Lastname>|<Email>|<Password>|<Address line>|<City>|<Country>|<State>|
  Then I should see registration confirmation as "You are now logged in."
  When I click Logout button on the homepage
    And I am on the admin dashboard
    And I click Customers and Manage Customers link
  Then I should see Active Customers page
  When I delete the user which is created
  Then I should see the user is deleted successfully
  Examples: 
  |Firstname|Lastname  |Email                           |Password   |Address line  |City    |Country    |State      |
  |BtoB     |Automation|B2BAutomation@xmdevelopments.com|B2BUser1234|205 Queen St  |Seattle |USA        |Washington |



  @smoke
  @sage300
  @registerB2CUser
  @XMECOM-6412
  Scenario Outline: Register B2C user from home page
  Given I am on the Home page
  When I click Register button and choose "Public" account and enter details as below and click submit button
  |Firstname  |Lastname  |Email  |Password  |Address line  |City  |Country  |State  |
  |<Firstname>|<Lastname>|<Email>|<Password>|<Address line>|<City>|<Country>|<State>|
  Then I should see registration confirmation as "A confirmation email has been sent to your registered email address. Please check your inbox and follow the instructions."
  When I am on the admin dashboard
    And I click Customers and Manage Customers link
  Then I should see Active Customers page
  When I delete the user which is created
  Then I should see the user is deleted successfully
  Examples: 
  |Firstname|Lastname  |Email                           |Password   |Address line  |City    |Country    |State      |
  |BtoC     |Automation|B2CAutomation@xmdevelopments.com|B2CUser1234|205 Queen St  |Seattle |USA        |Washington |


  @smoke
  @sage300
  @registerB2CUserOnePageCheckout
  @XMECOM-6427
  Scenario Outline: Register B2C user on one page checkout
  Given I am on the Home page
  When I search for the product "A1-900/G" in the search box and click search Icon
  When I click on the product "Calculator"
  And I update quantity as "10" and click on Add to Cart button
  Then I should see msg "Item has been added to your cart."
  When I click on Cart icon Button and click Proceed to checkout
  And I click Register button on onepage checkout enter details as below and click submit button
  |Firstname  |Lastname  |Email  |Password  |Address line  |City  |Country  |State  |
  |<Firstname>|<Lastname>|<Email>|<Password>|<Address line>|<City>|<Country>|<State>|
  When  I click on Log out button and I log in as B2B user
    And I click Customers and Manage Customers link
  Then I should see Active Customers page
  When I delete the user which is created
  Then I should see the user is deleted successfully
  Examples: 
  |Firstname|Lastname  |Email                                |Password   |Address line  |City    |Country    |State      |
  |BtoCShop |Automation|B2CAutomationOnePg@xmdevelopments.com|B2CUser1234|205 Queen St  |Seattle |USA        |Washington |


  @regression
  @sage300
  @GuestUserCheckout
  @XMECOM-6429
  Scenario Outline: Guest User checkout
  Given I am on the Home page
  When I search for the product "A1-900/G" in the search box and click search Icon
  When I click on the product "Calculator"
    And I update quantity as "20" and click on Add to Cart button
  Then I should see msg "Item has been added to your cart."
  When I click on Cart icon Button
  Then I should verify for below product - Cart Calculations are correct
  |Product Name|
  |Calculator  | 
  | Normal Order|
  When I click on Proceed to checkout
    And I select Checkout as Guest and click continue button
  Then I should see "ENTER YOUR BILLING ADDRESS" section
  When I enter below detail as billing address and click continue button
  |Firstname  |Lastname  |Email  |Address line  |City  |Country  |State  | Postcode |
  |<Firstname>|<Lastname>|<Email>|<Address line>|<City>|<Country>|<State>| <Postcode> |
  When I choose "UPS" shipping method and click on Continue button
  Then Credit Card payment method is listed successfully 
  When I choose Credit Card payment method filled in details and click on Confirm port button 
    And I fill necessary details and place order successfully
  Then I should see order has been placed successfully
  Examples: 
  |Firstname |Lastname  |Email                           |Address line        |City      |Country |State   | Postcode |
  |GuestShop |Automation|GuestCheckout@xmdevelopments.com|2400 Colorado cres  |BURLINGTON|CANADA  |Ontario | L7P5A8   |


  @smokeX3
  @xm
  @customer
  Scenario:As a B2B User, I want to navigate to Customer module
  Given I am on the admin dashboard
  When I click the Customers Menu link
  And I click Manage Customers link
  Then I click New Public User

  @smokeX3
  @xm
  @registerB2CUser
  @XMECOM-6412
  Scenario Outline: Register B2C user from home page
  Given I am on the Home page
  When I click Register button and choose "Public" account and enter details as below and click submit button
  |Firstname  |Lastname  |Email  |Password  |Address line  |City  |Country  |State  |
  |<Firstname>|<Lastname>|<Email>|<Password>|<Address line>|<City>|<Country>|<State>|
  Then I should see registration confirmation as "You are now logged in."
  When I click Logout button on the homepage
    And I am on the admin dashboard
    And I click Customers and Manage Customers link
  Then I should see Active Customers page
  When I delete the user which is created
  Then I should see the user is deleted successfully
  Examples: 
  |Firstname|Lastname  |Email                           |Password   |Address line  |City       |Country          |State   |
  |BtoC     |Automation|B2CAutomation@xmdevelopments.com|B2CUser1234|10 Barbour Rd |Thirlmere  |AUSTRALIA        |NSW     |

@smokeX3
  @xm
  @customer
  Scenario Outline: As admin User, I want to create Customer (type B2B Dealer)
    Given I am on the admin dashboard
    When I click the Customers Menu link
      And I click Manage Customers link
      Then I should navigated to Active Customers page
    When I click New User button
      Then New User page is shown successfully
    When I select Group type as Single User Remote Customer and click continue
      Then Select Default customer screen is shown successfully
    When I select "100248" customer 
      Then User setup screen is shown successfully 
    When I enter personal information as below and click continue button
      | Primary Warehouse | UserName | Password |Confirm Password | Email   | First Name  | Last Name | Phone   |
      | <pwarehouse>      | <uName>  | <pwd>    |   <cpwd>        | <Email> | <fname>     | <lname>   | <phone> |
    Then The B2B user is created successfully
    When I click delete button against the user I created
    | Primary Warehouse | UserName | Password |Confirm Password | Email   | First Name  | Last Name | Phone   |
    | <pwarehouse>      | <uName>  | <pwd>    |   <cpwd>        | <Email> | <fname>     | <lname>   | <phone> |
    Then The user gets deleted successfully
    Examples:
    | pwarehouse |  uName        | pwd      | cpwd     | Email                    | fname        | lname  | phone  |
    | 301        |  AutomationB2B| Test1234 | Test1234 | automationB2Buser@xm.com | Automation   | Last   | 123456 |

 @smokeX3
 @xm
 @customer
 Scenario Outline: As a B2B User ,I want to add new public user for Australia 
    Given I am on the Manage Customers Menu
    When I click Add New Public user and enter personal information 
      | Firstname | Lastname | Email   | Password | Confirm Password | Country   | State   | Address line 1 | City   | Postcode |
      | <fname>   | <lname>  | <email> | <pwd>    | <cpwd>           | <country> | <state> | <addr>         | <city> | <pcode>  |
      And I click on the Apply button
    Then I should see the user is created successfully
      | Firstname | Lastname | Email   | Password | Confirm Password | Country   | State   | Address line 1 | City   | Postcode |
      | <fname>   | <lname>  | <email> | <pwd>    | <cpwd>           | <country> | <state> | <addr>         | <city> | <pcode>  |
    When  I delete the user which is created
    Then I should see the user is deleted successfully
    Examples:
      | fname | lname | email            | pwd      | cpwd     | country    | state  | addr        | city     | pcode       |
      | Test1 | User1 | automation@aa.cc | Test1234 | Test1234 | AUSTRALIA  | NSW    | 10 Barbour Rd | Thirlmere | 321738444   |

  @smokeX3
  @xm
  @pastuser
  Scenario:As a B2B User, I want to activate/deactivate  Past Users
    Given I am on the admin dashboard
    When I click Customers and Manage Customers link
    Then I should see Active Customers page
    When I click on the Past Users link
    Then I search one of the past users from the past users list
    When I click on the Edit button
    Then I should navigate to Edit User page
    When I click Activate button on the edit user page
    Then I should see user has been reactivated success message
    When I search for the same user from the active customers list
    Then I should see the same reactivated user from the customers list
    When I click on the Delete button
    Then I should see the user has been deleted success message


 @smokeX3
 @xm
 @registerB2CUserOnePageCheckout
 @XMECOM-6427
  Scenario Outline: Register B2C user on one page checkout
  Given I am on the Home page
  When I search for the product "STUMP GAUGE" in the search box and click search Icon
  When I click on the product "STUMP GAUGE"
  And I update quantity as "10" and click on Add to Cart button
  Then I should see msg "Item has been added to your cart."
  When I click on Cart icon Button and click Proceed to checkout
  And I click Register button on onepage checkout enter details as below and click submit button
  |Firstname  |Lastname  |Email  |Password  |Address line  |City  |Country  |State  |
  |<Firstname>|<Lastname>|<Email>|<Password>|<Address line>|<City>|<Country>|<State>|
  When  I click on Log out button and I log in as B2B user
  And I click Customers and Manage Customers link
  Then I should see Active Customers page
  When I delete the user which is created
  Then I should see the user is deleted successfully
  Examples: 
  |Firstname|Lastname  |Email                                |Password   |Address line    |City      |Country    |State    |
  |BtoCShop |Automation|B2CAutomationOnePg@xmdevelopments.com|B2CUser1234|10 Barbour Rd   |Thirlmere |AUSTRALIA  |NSW      |

