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
    "../test/specs/**/ios-todo*.js",
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
        "appium:deviceName": "iPhone 15 Pro Max",
      "appium:platformVersion": "17.0",
      "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
  }
]

config.services= [
  ['appium', {
    command: 'appium',
    args: {
      // Appium server configuration for the first session on port 4723
      address: '127.0.0.1',
      port: 4723,
      // Other relevant configurations for this session
    },
  }],
]

exports.config = config;