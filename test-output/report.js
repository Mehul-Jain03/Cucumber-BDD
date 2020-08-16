$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/E:/NewEclipseProjects/CucumberBDD/src/main/java/featuresPackage/FreeCRMDeals.feature");
formatter.feature({
  "name": "Free CRM Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Deals Creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should be on free crm website",
  "keyword": "Given "
});
formatter.match({
  "location": "FreeCRMDeals.user_should_be_on_free_crm_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mailid and password",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "mehuljbhamawat@gmail.com",
        "Test@123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMDeals.user_enters_mailid_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page and click on deals",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMDeals.user_is_on_home_page_and_click_on_deals()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#main\\-nav\"}\n  (Session info: chrome\u003d77.0.3865.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WELCOME-PC\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\welcome\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ccf9cacd01846d13779ae6b73d6fae68\n*** Element info: {Using\u003did, value\u003dmain-nav}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.FreeCRMDeals.user_is_on_home_page_and_click_on_deals(FreeCRMDeals.java:43)\r\n\tat ✽.user is on home page and click on deals(file:/E:/NewEclipseProjects/CucumberBDD/src/main/java/featuresPackage/FreeCRMDeals.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter the values",
  "rows": [
    {
      "cells": [
        "Title",
        "probability",
        "amount",
        "commission"
      ]
    },
    {
      "cells": [
        "Mehul",
        "12",
        "15",
        "10"
      ]
    },
    {
      "cells": [
        "Akshay",
        "13",
        "16",
        "70"
      ]
    },
    {
      "cells": [
        "Hites",
        "14",
        "18",
        "20"
      ]
    },
    {
      "cells": [
        "Manish",
        "15",
        "555",
        "10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMDeals.enter_the_values(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMDeals.user_clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMDeals.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});