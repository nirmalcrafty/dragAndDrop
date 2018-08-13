import { Config, protractor } from "protractor";
export const config: Config = {
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  capabilities: {
    "testobject_api_key": "CD34FE6D174F4898BBD9BEE606EECFD4",
    "browserName": "Safari",
    "deviceName": "iPad 9.7 2018",
    "seleniumAddress": "https://us1.appium.testobject.com/wd/hub",
    "tabletOnly": true,
    "tunnelIdentifier": "Workspace-Real-device",
    "name": "US tunnel :: iOS :: Drag and drop test sample ",
    "deviceOrientation": "portrait",
    "platformVersion": "11.4.1",
    "maxDuration": 10800,
    "idleTimeout": 180,
    "nativeWebTap": true,
    "platformName": "iOS",
  },
  specs: [
    "../features/*.feature",
  ],
  sauceUser: process.env.SAUCE_USERNAME ,
  sauceKey:  process.env.SAUCE_ACCESS_KEY ,
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    "require-module": "ts-node/register",
    "format": "progress",
    "require": ["../stepdefinitions/*.ts", "../hooks/*.ts"],
    "strict": true,

    "tags": "not @WIP",
  },

  disableChecks: true,
  ignoreUncaughtExceptions: true,
}