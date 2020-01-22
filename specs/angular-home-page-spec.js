describe('Angular Home Page', function () {
    beforeAll(() => {
        console.log('************************ beforeAll');
    });

    beforeEach(() => {
        console.log('************************ beforeEach');
    });

     afterEach(() => {
        console.log('************************ afterEach');
    });

    afterAll(() => {
        console.log('************************ afterAll');
    });

    it('1 Should load Angular homepage', function () {
        browser.get(browser.baseUrl);
        expect(browser.getTitle()).toEqual('Angular - EXPLORE ANGULAR RESOURCES');
    });

    it('2 Should load Angular homepage', function () {
        browser.get(browser.baseUrl);
        expect(browser.getTitle()).toEqual('Angular - EXPLORE ANGULAR RESOURCES');
    });

    it('3 Should load Angular homepage', function () {
        browser.get(browser.baseUrl);
        expect(browser.getTitle()).toEqual('Angular - EXPES');
    });
});