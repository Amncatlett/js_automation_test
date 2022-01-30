//This test covers the Events page portion of the test suite
//The tests are written in protractor describe and it statements
//Think of 'describe' as the overall test name and the 'it' as a test case

let pageObjects = require('../Page_Objects/zwift_page_objects.js');
let webPages = require('../Page_Objects/zwift_webpages.js');
let funcs = require('../Utilities/functions.js');


describe('Zwift Events Page Test\n', function () {

    it('Ensure proper base url https://zwift.com is loaded', function(){
        expect(browser.driver.getCurrentUrl()).toEqual(webPages.zwiftHomePage);
    });

    it('Wait for full home page to be loaded', function(){
        browser.wait(EC.visibilityOf(pageObjects.lastHomeElementLoaded), 30000);
    });

    it('Click top nav menu', function(){
        funcs.properClick(pageObjects.topMenuBurgerBtn);
    });

    it('Click events link within top menu', function(){
        browser.wait(EC.visibilityOf(pageObjects.topMenuEventsLink), 30000);
        browser.sleep(3000);
        funcs.properClick(pageObjects.topMenuEventsLink);
    });

    it('Wait for full events page to be loaded', function(){
        browser.wait(EC.visibilityOf(pageObjects.lastEventsElementLoaded), 30000);
    });

    //populate sports, intensities and start times field on filter
    it('Click filter events button', function(){
        browser.wait(EC.visibilityOf(pageObjects.eventsFilterBtn), 30000);
        funcs.properClick(pageObjects.eventsFilterBtn);
    });

    it('Click cycling sports filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterSportsCyclingBtn), 30000);
        funcs.properClick(pageObjects.filterSportsCyclingBtn);
    });

    it('Click A intensities filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterIntensitiesABtn), 30000);
        funcs.properClick(pageObjects.filterIntensitiesABtn);
    });

    it('Click morning start times filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterStarttimesMorningBtn), 30000);
        funcs.properClick(pageObjects.filterStarttimesMorningBtn);
    });

    it('Click apply filters button', function(){
        browser.wait(EC.visibilityOf(pageObjects.applyFiltersBtn), 30000);
        funcs.properClick(pageObjects.applyFiltersBtn);
    });

    //verify sports results have changed in newly filtered list to ensure change
    it('Verify sports filter was applied',async  function(){
        browser.wait(EC.visibilityOf(pageObjects.eventsColumn), 30000);
        browser.sleep(2000);
        await funcs.verifySport("CYCLING", pageObjects.topEventSport);
    });

    //populate sports, intensities and start times field on filter
    it('Click filter events button', function(){
        browser.wait(EC.visibilityOf(pageObjects.eventsFilterBtn), 30000);
        funcs.properClick(pageObjects.eventsFilterBtn);
    });

    it('Click reset filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.resetFiltersBtn), 30000);
        funcs.properClick(pageObjects.resetFiltersBtn);
    });

    it('Click running sports filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterSportsCyclingBtn), 30000);
        funcs.properClick(pageObjects.filterSportsRunningBtn);
    });

    it('Click B intensities filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterIntensitiesBBtn), 30000);
        funcs.properClick(pageObjects.filterIntensitiesBBtn);
    });

    it('Click afternoon start times filter button', function(){
        browser.wait(EC.visibilityOf(pageObjects.filterStarttimesAlltimesBtn), 30000);
        funcs.properClick(pageObjects.filterStarttimesAlltimesBtn);
    });

    it('Click apply filters button', function(){
        browser.wait(EC.visibilityOf(pageObjects.applyFiltersBtn), 30000);
        funcs.properClick(pageObjects.applyFiltersBtn);
    });

    //verify sports results have changed in newly filtered list to ensure change
    it('Verify sports filter was applied',async function(){
        browser.wait(EC.visibilityOf(pageObjects.eventsColumn), 30000);
        browser.sleep(2000);
        funcs.verifySport("RUNNING", pageObjects.topEventSport);
    });

    it('Thank team for taking time to review test framework', function(){
        console.log("\nThanks a bunch!");
    });

});


