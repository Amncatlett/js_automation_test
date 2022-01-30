//General configuration file used to determine browser type and customize browser settings
//This is the file that is ran through the terminal to kick off tests
exports.config = {

    //Avoids needs for selenium server.  Great for short, local tests
    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: [
                '--disable-infobars',
                '--start-maximized',
                '--bwsi'],
            excludeSwitches: ['enable-automation']
        }
    },

    //Determines which tests will be ran
    specs: ['../Tests/zwift_home_test.js',
            '../Tests/zwift_events_test.js'],

    //Default test framework for Protractor
    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },

    allScriptsTimeout: 60000,

    baseUrl: 'https://zwift.com',

    //Does the initial legwork of initializing ExpectedConditions and setting the baseUrl
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        global.EC = protractor.ExpectedConditions;
        browser.driver.get(browser.baseUrl);
    },

};
