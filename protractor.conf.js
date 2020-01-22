var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var env = process.env.env || 'local';
var config = require('./test-helper/env-config')[env];

exports.config = {
  framework: 'jasmine',
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './specs/*.js'
  ],
  suites: {
    homepage: './specs/*-home-page-spec.js',
    events: './specs/*-events-page-spec.js'
  },
  capabilities: {

    'browserName': 'chrome',
    // 'chromeOptions': {
    //   'args': ['enable-automation --disable-infobars --disable-extensions incognito’']
    // },

    // allows different specs to run in parallel.
    // If this is set to be true, specs will be sharded by file
    // (i.e. all files to be run by this set of capabilities will run in parallel).
    // Default is false.
    shardTestFiles: false,

    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    maxInstances: 6
  },
  // For running same specs on different browsers/devices in parallel.
  // If you would like to run more than one instance of WebDriver on the same
  // tests, use multiCapabilities, which takes an array of capabilities.
  // If this is specified, capabilities will be ignored.
  // multiCapabilities: [
  //   {
  //     'browserName': 'chrome',
  //      shardTestFiles: true
  //      'maxInstances': 2,
  //   }, {
  //     'browserName': 'firefox',
  //   }
  // ],

  baseUrl: config.baseUrl,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    // Jasmine 2.xx  no longer support options isVerbose and includeStackTrace
    // isVerbose: true,
    // includeStackTrace: true,
    grep: 'pattern',
    invertGrep: false
  },

  beforeLaunch: function () {
    console.log('---------> Before Launch')
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter(
        {
          savePath: './reports/',
          screenshotsFolder: 'images',
          fileName: 'Protractor-Jasmin-e2e-test-report',
          fileNameDateSuffix: true,
          takeScreenshotsOnlyOnFailures: true,
          consolidateAll: true,
        }
      )
    );
  },

  onComplete: function () {
    console.log('--------->  On Complete')
  },

  onCleanUp: function () {
    console.log('--------->  On CleanUp')
  },

  afterLaunch: function () {
    console.log('---------> afterLaunch');
  }

};
