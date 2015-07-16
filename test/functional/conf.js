
/**
 * Protractor connfiguration file.
 *
 * This file contain basic options to setup protractor testing with
 * SauceLabs integration.
 *
 * To explore all condfiguration options visit:
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */

exports.config = {

  // Saucelabs credentials.
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  
  // Tests to run
  specs: [
    '**/*.js'
  ],

  suites: {
    example: ['example/*.js']
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
      name: 'Testing with chrome'
    },
    {
      browserName: 'firefox',
      name: 'Testing with firefox'
    }
  ],

  params: {
    backUrl: 'http://api.sc.circle:8080',
    frontUrl: 'http://sc.circle:8081'
  },

  framework: 'jasmine2',
  },

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
