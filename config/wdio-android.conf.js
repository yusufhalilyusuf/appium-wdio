const path = require('path');
const { config } = require('./wdio.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    "../test/specs/android/webview.spec.js",
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
      platformName: "Android", //appium:platformName
      // 'appium:browserName': 'Chrome',   //appium:platform
      "appium:deviceName": "Pixel 3",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      // 'appium:app':path.join(process.cwd(),'/app/android/ApiDemos-debug.apk')
      "appium:app": path.join(
        process.cwd(),
        "/app/android/ColorNote+Notepad.apk"
      ),
      "appium:autoGrantPermissions": true,
  }
]
config.services= [
  ['appium', {
    command: 'appium',
    args: {
      // Appium server configuration for the first session on port 4723
      address: 'localhost',
      port: 4723,
      //this is for chrome webview installation
      relaxedSecurity:true
      // Other relevant configurations for this session
      
    },
  }],
]

exports.config = config;