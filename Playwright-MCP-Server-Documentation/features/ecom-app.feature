Feature: Verify E-commerce App functionality on WishInfinite

Scenario: Verify Successful login with valid credentials
    Given I navigate to the E-Commerce App under the playground tab
    When I enter valid login credentials
    And I submit the login form
    Then I should see a successful login confirmation

Scenario: Verify successfully place two orders and validate them
    Given I navigate to the E-Commerce App under the playground tab
    And I submit the login form
    When I place two items in the order
    Then I should see those two items listed under my orders
    And I log out of the application