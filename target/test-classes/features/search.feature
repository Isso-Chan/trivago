@search @all
Feature: Search Menu

  Background:
    Given the user is on the homepage
    And the user click Ok button for cookies

  Scenario: Search for any location on Magazine by using the search bar
    When the user enters "bahamas" in search bar and clicks
    Then the user should see related results with "Bahamas"

  @wip
  Scenario Outline: Search with destinations and recommended tags
    When the user selects "<destination>" and "<recommended_tag>"
    Then the user gets related results

    Examples:
      | destination | recommended_tag |
      | Ohio        | Coolest Hotels  |
      | Arizona     | National Parks  |
      | Midwest     | Road Trips      |










