
const { config } = require("./wdio.conf");
require('dotenv').config()

//
// ============
// Browserstack
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = ["../test/specs/android/delete-note-screen.spec.js"];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "Android", //appium:platformName
    // 'appium:browserName': 'Chrome',   //appium:platform
    "appium:deviceName": "Google Pixel 3",
    "appium:platformVersion": "9.0",
    "appium:automationName": "UiAutomator2",

    "appium:app": "bs://bd1061d594cfa84cda2fecfbcc26645a95846938",
    "appium:autoGrantPermissions": true,
  },
];

config.services = ["browserstack"];

exports.config = config;
