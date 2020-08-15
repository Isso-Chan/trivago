@contactForm @all
Feature: contact form

  Background:
    Given the user is on the homepage
    And the user click Ok button for cookies


  Scenario: send contact form-positive
    When the user clicks "Contact" tag under the page
    Then a new tab opens
    And the user click Ok button for cookies
    When the user sends "Hi, I liked your webpage" as message
    And the user sends "John Stewens" as Full Name
    And the user enters "anyEmail@gmail.com" in Your Email box
    And the user marks the checkbox to give approval about the message
    And the user clicks Submit button to send the contact form
    Then the user gets "Message Sent Successfully!" message


  Scenario Outline: try to send with missing fields
    When the user clicks "Contact" tag under the page
    Then a new tab opens
    And the user click Ok button for cookies
    When the user sends "<message>" as message
    And the user sends "<Full Name>" as Full Name
    And the user enters "<Email>" in Your Email box
    And the user clicks Submit button
    Then the user gets warning "<Message>" for missing fields
    And the user gets "Please mark the checkbox." for check box

    Examples:
      | message                  | Full Name | Email              | Message                  |
      | Hi, I liked your webpage |           |                    | All Fields are required. |
      |                          | Isso Chan |                    | All Fields are required. |
      |                          |           | anyEmail@gmail.com | All Fields are required. |
      |                          | Isso Chan | anyEmail@gmail.com | All Fields are required. |
      | Hi, I liked your webpage |           | anyEmail@gmail.com | All Fields are required. |
      | Hi, I liked your webpage | Isso Chan |                    | All Fields are required. |


  Scenario: try to send invalid E-Mail
    When the user clicks "Contact" tag under the page
    Then a new tab opens
    And the user click Ok button for cookies
    When the user enters "jstevens@gmail.c" in Your Email box
    And the user marks the checkbox to give approval about the message
    And the user clicks Submit button
    Then the user gets "Please provide a valid email address." for check box

  @newletter
  Scenario: Email subscription to newsletter
    When the user enters an email into subscription box
    And clicks inspire Me button
    Then the user gets verification message as "You are now checked-in!"

  @newletter
  Scenario: Invalid-Email subscription to newsletter
    When the user enters "isso@gmail.c" in email subscription box
    And clicks inspire Me button
    Then "Please enter a valid e-mail address" message is shown
