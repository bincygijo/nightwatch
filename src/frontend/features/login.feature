Feature: Login
    Feature Description: This a sample test

    @regression
    @xm
    @login
    Scenario: Logging in to the symphony
        Given I am on the symphony home page
        When I enter user and password
            And I click sign in button
        Then I should see the login page


    @regression
    @sage300
    @login
    @XMECOM-6416
    Scenario Outline: B2C Login in to the webstore
        Given I am on the symphony home page
        When I enter B2C username and password
        |User Name|Email  | Password|
        |<uname>  |<email>| <pwd>  |
            And I click sign in button
        Then I should see the B2C login page
        |User Name|
        |<uname>  |
        When I click Logout button on the homepage
        Then I am on the Home page
    Examples:
        |uname       | email             |  pwd   |
        | bincy gijo | bincy7@gmail.com  |Test1234|

#X3 only scenarios
    @smokeX3
    @xm
    @login
    Scenario: Logging in to the symphony
        Given I am on the symphony home page
        When I enter user and password
            And I click sign in button
        Then I should see the login page


    @smokeX3
    @xm
    @login
    @XMECOM-6416
    Scenario Outline: B2C Login in to the webstore
        Given I am on the symphony home page
        When I enter B2C username and password
        |User Name|Email  | Password|
        |<uname>  |<email>| <pwd>  |
            And I click sign in button
        Then I should see the B2C login page
        |User Name|
        |<uname>  |
        When I click Logout button on the homepage
        Then I am on the Home page
    Examples:
        |uname         | email                    |  pwd   |
        | BLAIR WATKINS| blair.r.watkins@gmail.com|Test1234|