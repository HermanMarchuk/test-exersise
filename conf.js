exports.config = {  
    baseUrl: 'https://www.google.com',  
    capabilities: {
        browserName: 'chrome'
      },
    framework: 'mocha',
    onPrepare: function () {
        var chai = require('chai');
        var chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        global.chai = chai;
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
      },
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['specs/*.js']
  };