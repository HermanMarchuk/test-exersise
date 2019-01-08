'use strict'

var googleHomePage = require('../pages/google-home-page.js');
var googleResultsPage = require('../pages/google-results-page.js');
var expect = chai.expect;

describe('Test Exercise', function () {
    this.timeout(5000);

    before(async function () {
        await googleHomePage.goToHomePage();
    });

    it('Search on google.com for "Twinfield"', async function () {
        var actualTabTitle = null;
        var expectedTabTitle = 'Twinfield - Пошук Google';
        await googleHomePage.searchFor('Twinfield');
        actualTabTitle = await googleHomePage.getTabTitle();

        await expect(actualTabTitle).to.contains(expectedTabTitle);
    });

    it('Make sure that the link https://www.twinfield.co.uk/ is the first in the list of search results.', async function () {
        var actualFirstLink = await googleResultsPage.getLinkFromResult(0);
        var expectedFirstLink = 'https://www.twinfield.co.uk/';

        await expect(actualFirstLink).to.equal(expectedFirstLink);
    });

    it('Follow each available link from search results which contains word \'Twinfield\' ', async function () {
        var allLinksWithKeyWord = await googleResultsPage.filterLinksByKeyWord('Twinfield');

        for (var i = 0; i < allLinksWithKeyWord.length; i += 1) {
            await googleResultsPage.followLinkInNewTab(allLinksWithKeyWord[i]);
        }
    })


});
