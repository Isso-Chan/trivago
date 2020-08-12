
Feature: Search Menu

    Background:
        Given the user is on the homepage

    Scenario: Search for any location on Magazine by using the search bar
        When the user enters "bahamas" in search bar and clicks
        And the user click Ok button for cokies
        Then the user should see related results with "Bahamas"

    Scenario Outline: Search with destinations and recommended tags
        When the user selects "<destination>" and "<recommended_tag>"
        Then the user gets related results

        Examples:
        |destination|recommended_tag|
        |Arizona    |Arts & Culture |




