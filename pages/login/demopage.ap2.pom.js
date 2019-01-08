'use strict'

var DemoAppLoginPage = function() {
  
  const userId = element(by.id('email'));
  const password = element(by.id('pass'));
  const loginBtn = element(by.id('loginbutton'));

  this.setName = async function(name) {
    await userId.sendKeys(name);
  };
  
  this.setPassword = async function(pwd) {
    await password.sendKeys(pwd);
  };
  
  this.clickOnLoginBtn = async function() {
    await loginBtn.click();
  };
  
  this.logonToDemoApp = async function() {
    browser.waitForAngularEnabled(false);
    await setName(username);
    await setPassword(password);
    await clickOnLoginBtn();
    browser.waitForAngularEnabled(true);
    
  };

};
module.exports = new DemoAppLoginPage();