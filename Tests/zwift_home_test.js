//This test covers the Home page portion of the test suite
//The tests are written in protractor describe and it statements
//Think of 'describe' as the overall test name and the 'it' as a test case

let pageObjects = require('../Page_Objects/zwift_page_objects.js');
let webPages = require('../Page_Objects/zwift_webpages.js');
let funcs = require('../Utilities/functions.js');


describe('Zwift Home Page Test\n', function () {

    it('Ensure proper base url https://zwift.com is loaded', function(){
        expect(browser.driver.getCurrentUrl()).toEqual(webPages.zwiftHomePage);
    });

    it('Click Accept All button for browser cookies settings', function(){
        funcs.properClick(pageObjects.acceptCookiesBtn);
        browser.wait(EC.invisibilityOf(pageObjects.acceptCookiesBtn), 30000);
    });

    it('Wait for full home page to be loaded', function(){
        browser.wait(EC.visibilityOf(pageObjects.lastHomeElementLoaded), 30000);
    });

    it('Inspect upper home page banner for correct text', function(){
        browser.wait(EC.visibilityOf(pageObjects.homeBannerText), 30000);
        funcs.checkOuterHtml(pageObjects.homeBannerText, pageObjects.expectedHomeBannerText);
    });

});
