@navigate
Feature: Navigation Menu

  Background:
    Given the user is on the homepage

  Scenario: Search for any location on Magazine by using the search bar
    When the user enters "Bahamas" in search bar and clicks
    Then the user should see related results with "Bahamas"
    And the page title is "Bahamas"
