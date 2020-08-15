$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/contact_newsletter.feature");
formatter.feature({
  "name": "contact form",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "send contact form-positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Hi, I liked your webpage\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"John Stewens\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"anyEmail@gmail.com\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user marks the checkbox to give approval about the message",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_marks_the_checkbox_to_give_approval_about_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button to send the contact form",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button_to_send_the_contact_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Message Sent Successfully!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.step({
  "name": "the user sends \"\u003cmessage\u003e\" as message",
  "keyword": "When "
});
formatter.step({
  "name": "the user sends \"\u003cFull Name\u003e\" as Full Name",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters \"\u003cEmail\u003e\" in Your Email box",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the user gets warning \"\u003cMessage\u003e\" for missing fields",
  "keyword": "Then "
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message",
        "Full Name",
        "Email",
        "Message"
      ]
    },
    {
      "cells": [
        "Hi, I liked your webpage",
        "",
        "",
        "All Fields are required."
      ]
    },
    {
      "cells": [
        "",
        "Isso Chan",
        "",
        "All Fields are required."
      ]
    },
    {
      "cells": [
        "",
        "",
        "anyEmail@gmail.com",
        "All Fields are required."
      ]
    },
    {
      "cells": [
        "",
        "Isso Chan",
        "anyEmail@gmail.com",
        "All Fields are required."
      ]
    },
    {
      "cells": [
        "Hi, I liked your webpage",
        "",
        "anyEmail@gmail.com",
        "All Fields are required."
      ]
    },
    {
      "cells": [
        "Hi, I liked your webpage",
        "Isso Chan",
        "",
        "All Fields are required."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Hi, I liked your webpage\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Isso Chan\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cbutton id\u003d\"onetrust-accept-btn-handler\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 3004, moz:profile: C:\\Users\\Che\\AppData\\Local\\..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b91658f3-0d5f-4613-9ca6-2b3454d12a11\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat com.trivago.room5.pages.BasePage.cookiesCheck(BasePage.java:67)\r\n\tat com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button(Contact_NewsletterStepDefs.java:78)\r\n\tat ✽.the user clicks Submit button(file:///E:/caseStudy/trivago/src/test/resources/features/contact_newsletter.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"anyEmail@gmail.com\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Isso Chan\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"anyEmail@gmail.com\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Hi, I liked your webpage\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"anyEmail@gmail.com\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send with missing fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Hi, I liked your webpage\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends \"Isso Chan\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets warning \"All Fields are required.\" for missing fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_warning_for_missing_fields(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please mark the checkbox.\" for check box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try to send invalid E-Mail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"jstevens@gmail.c\" in Your Email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user marks the checkbox to give approval about the message",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_marks_the_checkbox_to_give_approval_about_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_clicks_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets \"Please provide a valid email address.\" for check box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_for_check_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Email subscription to newsletter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    },
    {
      "name": "@newletter"
    }
  ]
});
formatter.step({
  "name": "the user enters an email into subscription box",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_an_email_into_subscription_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks inspire Me button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.clicks_inspire_Me_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets verification message as \"You are now checked-in!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_gets_verification_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid-Email subscription to newsletter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contactForm"
    },
    {
      "name": "@all"
    },
    {
      "name": "@newletter"
    }
  ]
});
formatter.step({
  "name": "the user enters \"isso@gmail.c\" in email subscription box",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.the_user_enters_in_email_subscription_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks inspire Me button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.clicks_inspire_Me_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please enter a valid e-mail address\" message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.Contact_NewsletterStepDefs.message_is_shown(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/navigate.feature");
formatter.feature({
  "name": "Navigate to a destination",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigation to place",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user clicks nav-icon and \"DESTiNATIONS\" button on the top left",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.the_user_clicks_nav_icon_and_button_on_the_top_left(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"SOUThWEST\" as a destinations",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.selects_as_a_destinations(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"TExAS\" as a place",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.the_user_selects_as_a_place(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003cdiv class\u003d\"destination-name\"\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 8220, moz:profile: C:\\Users\\Che\\AppData\\Local\\..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2b04a154-7ed9-4a89-8fb9-2188d606cee6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat com.trivago.room5.utilities.Browserutilities.scrollToElement(Browserutilities.java:81)\r\n\tat com.trivago.room5.step_definitions.NavigationStepDefs.the_user_selects_as_a_place(NavigationStepDefs.java:39)\r\n\tat ✽.the user selects \"TExAS\" as a place(file:///E:/caseStudy/trivago/src/test/resources/features/navigate.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user filters the selection with \"city Travel\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.the_user_filters_the_selection_with(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user gets the results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.the_user_gets_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/search.feature");
formatter.feature({
  "name": "Search Menu",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for any location on Magazine by using the search bar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user enters \"bahamas\" in search bar and clicks",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_enters_in_search_bar_and_clicks(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see related results with \"Bahamas\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_should_see_related_results_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search with destinations and recommended tags",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user selects \"\u003cdestination\u003e\" and \"\u003crecommended_tag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user gets related results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "destination",
        "recommended_tag"
      ]
    },
    {
      "cells": [
        "Ohio",
        "Coolest Hotels"
      ]
    },
    {
      "cells": [
        "Arizona",
        "National Parks"
      ]
    },
    {
      "cells": [
        "Midwest",
        "Road Trips"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search with destinations and recommended tags",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@all"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user selects \"Ohio\" and \"Coolest Hotels\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_selects_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets related results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_gets_related_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search with destinations and recommended tags",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@all"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user selects \"Arizona\" and \"National Parks\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_selects_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets related results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_gets_related_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.theUserClickOkButtonForCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search with destinations and recommended tags",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@all"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user selects \"Midwest\" and \"Road Trips\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_selects_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets related results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_gets_related_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});