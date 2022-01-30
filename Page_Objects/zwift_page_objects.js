//This file sets the page objects I will be using throughout the tests
//This allows me to write tests more easily due to repeatedly used elements
//and reduce test clutter for readability
var Zwift_Page_Objects = function(){

    //Buttons
    this.acceptCookiesBtn = element(by.id('truste-consent-button'));
    this.topMenuBurgerBtn = element(by.css('#__next > div > div > div:nth-child(1) > div:nth-child(2) > header > div > nav > ul:nth-child(2) > li:nth-child(4) > button'));
    this.eventsFilterBtn = element(by.css('#zwift-events > div.tab-filter > div > button'));
    this.filterSportsCyclingBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(2) > button.buttons.default'));
    this.filterIntensitiesABtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(4) > button.buttons.default.font-bold'));
    this.filterStarttimesMorningBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(5) > button.buttons.default'));
    this.filterSportsRunningBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(2) > button:nth-child(4)'));
    this.filterIntensitiesBBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(4) > button:nth-child(4)'));
    this.filterStarttimesAlltimesBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-body > div:nth-child(5) > button:nth-child(2)'));
    this.applyFiltersBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-footer > button.apply-button'));
    this.resetFiltersBtn = element(by.css('#zwift-events > div.tab-filter > div > div > div > div.filter-footer > button.reset-button'));

    //Elements
    this.lastHomeElementLoaded = element(by.css('#__next > div > div > div:nth-child(1) > div.ZCurve-module__zCurve--3QjMX.ZCurve-module__right--ykdPI.right > div > div > footer > div:nth-child(2) > ul'));
    this.lastEventsElementLoaded = element(by.css('#navigation-container > div > div > main > div.footer-module__withOutZCurve--2Wu3z'));
    this.homeBannerText = element(by.css('#__next > div > div > div:nth-child(1) > div.sw-alert-banner.sw-alert-banner--top-nav.sw-alert-banner--dark > div.sw-alert-banner__content > p'));
    this.expectedHomeBannerText = '<p>Let’s go exploring with the Tour de Zwift 2022! <a href="https://www.zwift.com/tour-de-zwift" style="color: rgb(255, 255, 255);">SIGN UP TODAY</a>.</p>';
    this.eventsColumn = element(by.css('#zwift-events > div.events-column'));
    this.topEventSport = element(by.xpath('//*[@id="zwift-events"]/div[2]/div/div[2]/div/div/span[2]'));


    //Links
    this.topMenuEventsLink = element(by.css('#__next > div > div > div:nth-child(1) > div:nth-child(2) > div > aside > div > div.SideNav-module__flex--2qUsY > div.Grid-module__has-mobile-offset--1dHVY.Grid-module__has-mobile-width--2Z9cb.Grid-module__has-desktop-offset--1a_EN.Grid-module__has-desktop-width--2DBOG > div > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a > span'));

};

module.exports = new Zwift_Page_Objects();

