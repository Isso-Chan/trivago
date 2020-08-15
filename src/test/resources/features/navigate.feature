@navigate @all
Feature: Navigate to a destination

  Background:
    Given the user is on the homepage
    And the user click Ok button for cookies

  Scenario: Navigation to place
    When the user clicks nav-icon and "DESTiNATIONS" button on the top left
    And selects "SOUThWEST" as a destinations
    And the user selects "TExAS" as a place
    And the user filters the selection with "city Travel"
    Then the user gets the results