describe('Angular event Page', function () {

    it('One Should load Angular homepage @regression', function () {
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Archived Angular v2 Docs - ts - INDEX');
    });

    it('Two Should load Angular homepage @smoke @regression', function () {
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Archived Angular v2 Docs - ts - INDEX');
    });

    it('Three Should load Angular homepage', function () {
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Archived Angular v2 Docs - ts - INDEX');
    });
});