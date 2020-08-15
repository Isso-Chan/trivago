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
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6536, moz:profile: C:\\Users\\Che\\AppData\\Local\\..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9105ee09-7abc-45bb-8a92-e5391be796a4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.trivago.room5.utilities.Browserutilities.waitForClickablility(Browserutilities.java:25)\r\n\tat com.trivago.room5.step_definitions.NavigationStepDefs.the_user_clicks_nav_icon_and_button_on_the_top_left(NavigationStepDefs.java:23)\r\n\tat ✽.the user clicks nav-icon and \"DESTiNATIONS\" button on the top left(file:///E:/caseStudy/trivago/src/test/resources/features/navigate.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "selects \"SOUThWEST\" as a destinations",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.selects_as_a_destinations(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects \"TExAS\" as a place",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.NavigationStepDefs.the_user_selects_as_a_place(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6536, moz:profile: C:\\Users\\Che\\AppData\\Local\\..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9105ee09-7abc-45bb-8a92-e5391be796a4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.trivago.room5.step_definitions.Hooks.tearDown(Hooks.java:24)\r\n",
  "status": "failed"
});
});