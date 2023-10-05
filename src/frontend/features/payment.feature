Feature: Payment

  @smoke
  @sage300
  @payment
  @beanstream
  Scenario: As a B2B User,I want to navigate to the payment method page
    Given I am on the sage admin page
    When I click on the System link from the admin side menu
      And I click payment settings
      And I click payment method
    Then I should see Payment Method Settings page

  @flaky
  @xm
  @payment
  @beanstream
  Scenario:Verify Payment Portal Management page
    Given I am on the payment portal management page
    Then I should see beanstream account settings page with account name Beanstream default

  @flaky
  @xm
  @payment
  @beanstream
  Scenario:Verify the User is able to add/edit/delete new terminal
    Given I am on the Beanstream terminal listing page
    When I click on Add Terminal button
    Then I should see terminal added with a success message
      And I click Edit button on the terminal page
      And I should navigate to edit terminal page
    When I update Currency Restriction
      And I click Apply button
    When I click Back button I should navigated to terminal listing page
      And I click delete button
      And I should see delete pop up window
    Then I click delete pop up window I should see terminal delete success message







