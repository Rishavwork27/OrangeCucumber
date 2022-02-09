$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RishavKaundal/Desktop/New folder/OrangeCucumber/src/main/java/Feature File/Login.feature");
formatter.feature({
  "name": "Checking Login functionality of the Orange HRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking Login functionality with the valid login credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Ravish",
        "cggvhd"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Login.Enters_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.Click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.User_is_on_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d98.0.4758.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSDT019\u0027, ip: \u002710.10.30.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.81, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: C:\\Users\\RISHAV~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50433}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5b1c389734de290529df71938a926568\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDefination.Login.User_is_on_homepage(Login.java:73)\r\n\tat ✽.User is on homepage(C:/Users/RishavKaundal/Desktop/New folder/OrangeCucumber/src/main/java/Feature File/Login.feature:18)\r\n",
  "status": "failed"
});
});