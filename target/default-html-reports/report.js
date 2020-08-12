$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/contact.feature");
formatter.feature({
  "name": "contact form",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
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
  "location": "com.trivago.room5.step_definitions.searchStepDefs.the_user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Ok button for cokies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.searchStepDefs.theUserClickOkButtonForCokies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "send contact form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user clicks \"Contact\" tag under the page",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_clicks_tag_under_the_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"https://magazine.trivago.com.au/contact/\" target\u003d\"_blank\" data-link\u003d\"footer\" class\u003d\"footer-link\"\u003e...\u003c/a\u003e is not clickable at point (44, 564). Other element would receive the click: \u003cdiv class\u003d\"ot-sdk-container\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHE-PC\u0027, ip: \u0027192.168.0.171\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Che\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54964}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bd1ff86d1a2acb5e29a46873b44f376a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.trivago.room5.step_definitions.ContactStepDefs.the_user_clicks_tag_under_the_page(ContactStepDefs.java:17)\r\n\tat ✽.the user clicks \"Contact\" tag under the page(file:///E:/caseStudy/trivago/src/test/resources/features/contact.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "a new tab opens",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.a_new_tab_opens()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user click Ok button for cokies",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.searchStepDefs.theUserClickOkButtonForCokies()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user sends \"Hi, I liked your webpage\" as message",
  "keyword": "When "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_sends_as_message(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user sends \"John Stewens\" as Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_sends_as_Full_Name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"jstevens@gmail.com\" in Your Email box",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_enters_in_Your_Email_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user marks the checkbox to give approval about the message",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_marks_the_checkbox_to_give_approval_about_the_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks Submit button to send the contact form",
  "keyword": "And "
});
formatter.match({
  "location": "com.trivago.room5.step_definitions.ContactStepDefs.the_user_clicks_Submit_button_to_send_the_contact_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});