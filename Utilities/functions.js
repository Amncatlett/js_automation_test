//This file is used to store functions that help with testing
//They are stored in here and called during the test
//This helps cut down on test clutter for readability

let EC = protractor.ExpectedConditions;

let functions = function () {

    //Just an element.Click() method with additional wait for element load to make sure we don't click too fast
    this.properClick = function (element) {
        browser.wait(EC.presenceOf(element), 30000, 'Element taking too long to load');
        element.click();
    },

    //Grabs outerHTML attribute from the element and compares the value
    this.checkOuterHtml = function (locator, value) {

        locator.getAttribute('outerHTML').then(function (text) {
            expect(text).toContain(value);
        });

    },

    //Similar to the previous function, this grabs the innerText of the element and does a compare
    this.verifySport = function (sport, element) {
        element.getAttribute('innerText').then(function(value){
            console.log("Sport innerText: " + value);
            expect(sport).toEqual(value);
        });
    }

};

//Exports functions for use throughout project
module.exports = new functions();