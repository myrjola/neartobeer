// Inspired by https://github.com/appium/sample-code/blob/master/sample-code/examples/node/ios-simple.js
/*eslint-disable */

"use strict";

require('./helpers/setup');

const wd = require('wd');

describe('BeersUnderX', function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = {
      host: 'localhost',
      port: 4723
    };

    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desiredCapabilities = require('./helpers/caps').android;
    return driver
      .init(desiredCapabilities)
      .setImplicitWaitTimeout(3000);
  });

  after(function () {
    return driver.quit();
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("Should find elements", function () {
    return driver
      .sleep(30000) // Wait for app to start
      .elementByXPath('//android.widget.TextView[@text=\'About\']')
      .should.eventually.exist
      .elementByXPath('//android.widget.TextView[@text=\'Zoom\']')
      .should.eventually.exist
      .elementByXPath('//android.widget.TextView[@text=\'30kr\']')
      .should.eventually.exist
      .elementByXPath('//android.widget.TextView[@text=\'40kr\']')
      .should.eventually.exist
      .elementByXPath('//android.widget.TextView[@text=\'50kr\']')
      .should.eventually.exist;
  });
});
