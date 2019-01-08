'use strict'

function googleHomePage() {

    var self = this;
    var searchInput = 'input[title="Пошук"]';
    var searchButton = '.FPdoLc.VlcLAe input[value="Пошук Google"]';

    this.goToHomePage = async function() {
        await browser.get(browser.baseUrl);
    }

    this.enterText = async function(text) {
        await $(searchInput).sendKeys(text);
    };

    this.clickOnSearchButton = async function() {
        await browser.actions().mouseMove($(searchButton)).click().perform();
        await $(searchButton).click();
    };

    this.searchFor = async function(text) {
        await self.enterText(text);
        await self.clickOnSearchButton();
    }

    this.getTabTitle = async function() {
        return await browser.getTitle();
    }
};

module.exports = new googleHomePage();