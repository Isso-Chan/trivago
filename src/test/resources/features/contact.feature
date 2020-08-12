@wip
Feature: contact form

  Background:
    Given the user is on the homepage
    And the user click Ok button for cokies

    Scenario: send contact form
      When the user clicks "Contact" tag under the page
      Then a new tab opens
      And the user click Ok button for cokies
      When the user sends "Hi, I liked your webpage" as message
      And the user sends "John Stewens" as Full Name
      And the user enters "jstevens@gmail.com" in Your Email box
      And the user marks the checkbox to give approval about the message
      And the user clicks Submit button to send the contact form
