
/**
 * Protractor connfiguration file.
 *
 * This file contain basic options to setup protractor testing with
 * SauceLabs integration.
 *
 * To explore all condfiguration options visit:
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */

// Determines whether or not to run the tests on sauce labs
function useSauceLabs() {
  var sauceLabs = exports.config.params.isSauceLabs;
  var sauceLabsPos = process.argv.indexOf('--params.isSauceLabs');
  if (sauceLabsPos > -1) {
    sauceLabs = parseInt(process.argv[sauceLabsPos + 1]);
  }

  return sauceLabs;
}

exports.config = {

  // Saucelabs credentials.
  get sauceUser() {
    if (useSauceLabs()) {
      return process.env.SAUCE_USERNAME;
    }
  },
  get sauceKey() {
    if (useSauceLabs()) {
      return process.env.SAUCE_ACCESS_KEY;
    }
  },
  
  // Tests to run
  specs: [
    'specs/**/*.js'
  ],

  suites: {
    example: ['specs/example/*.js']
  },

  // Single Browser
  // capability: [
  //   browserName: 'chrome',
  //   name: 'Testing with chrome',
  //   specs: [],
  // ]

  // Multiple Browsers
  multiCapabilities: [
    {
      browserName: 'chrome',
      name: 'Testing with chrome',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      browserName: 'firefox',
      name: 'Testing with firefox',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      browserName: 'internet explorer',
      name: 'Testing with IE9',
      version: '9',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      browserName: 'internet explorer',
      name: 'Testing with IE10',
      version: '10',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      browserName: 'internet explorer',
      name: 'Testing with IE11',
      version: '11',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      browserName: 'safari',
      name: 'Testing with Safari 8',
      version: '8',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      platformName: 'iOS',
      platformVersion: '8.4',
      browserName: '',
      app: 'safari',
      deviceName: 'iPhone Simulator',
      name: 'Testing with iOS 8.4 Safari',
      'appium-version': '1.4.0',
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    },
    {
      platformName: 'Android',
      platformVersion: '4.4',
      browserName: 'Browser',
      deviceName: 'Android Emulator',
      name: 'Testing with Android 4.4 browser',
      'appium-version': "1.4.0",
      'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
    }
  ],

  params: {
    url: 'http://sc.circle:8080'
  },

  framework: 'jasmine2',

  // Options to be passed to jasmine-node.
  jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){
    // Syntactic sugar to set whether we're testing an angular site or not
    global.isAngularSite = function(flag){
      browser.ignoreSynchronization = !flag;
    };
  }

};
