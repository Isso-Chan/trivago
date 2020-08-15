$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/search.feature");
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
        "Arizona",
        "Spa Hotels"
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
  "name": "the user selects \"Arizona\" and \"Spa Hotels\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_selects_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Che\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:60611}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6c06737da574607a2729d369d5d003d0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.trivago.room5.step_definitions.SearchStepDefs.the_user_selects_and(SearchStepDefs.java:76)\r\n\tat ✽.the user selects \"Arizona\" and \"Spa Hotels\"(file:///E:/caseStudy/trivago/src/test/resources/features/search.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user gets related results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.SearchStepDefs.the_user_gets_related_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});