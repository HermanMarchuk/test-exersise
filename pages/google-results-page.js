var googleResultsPage = function () {
    var searchResults = '.srg .g';
    var resultLink = 'cite.iUh30';
    var self = this;

    this.getLinkFromResult = async function (itemNumber) {
        var result = await $$(searchResults).get(itemNumber).$(resultLink);
        return await result.getText();
    }

    this.filterLinksByKeyWord = async function (keyWord) {
        return await $$(searchResults).filter(function (elem, index) {
            return self.getLinkFromResult(index).then(function (link) {
                if (link.indexOf(keyWord) !== -1 | link.indexOf(keyWord.toLowerCase()) !== -1) {
                    return link;
                }
            })
        })
    }

    this.followLinkInNewTab = async function (link) {
        await browser.actions().mouseMove(link, {x: 0, y: 0}).perform();
        await browser.actions().keyDown(protractor.Key.CONTROL).perform();
        await browser.actions().click().perform();
        await browser.actions().keyUp(protractor.Key.CONTROL).perform();
    }

};

module.exports = new googleResultsPage();


