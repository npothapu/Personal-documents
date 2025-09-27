Feature: Verify Forms functionality on WishInfinite

Scenario: Verify form submission with valid data
    Given I navigate to the forms section under the playground tab
    When I fill in the form with valid data
    And I submit the form
    Then I should see a success message

Scenario: Verify form submission with invalid data
    Given I navigate to the forms section under the playground tab
    When I fill in all the required form with relevant data
    And I submit the form
    Then I should see a confirmation that the form was submitted successfully