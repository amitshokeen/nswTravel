/**
 * Created by Amit on 27/11/2017
 */
var common = require('../Conf/common.json');
var testData = require('../TestData/TestData.json');
var browser_wait = common.browser_wait;
var trip_url = common.url + common.trip;
var hf = new (require('../Functions/helper-Functions'));
var from_txt_box = $('#search-input-From');
var to_txt_box = $('#search-input-To');
var go_btn = $('#search-button');
var trains_list = $$('div.tripResults'); 
var css_train_suggest = 'div.list-group-item-title';
var EC = protractor.ExpectedConditions;

var trip_planner_page = function() {
    this.navigate_to_trip_planner_page = function(){
        hf.navigateToPage(trip_url);
    };

    this.fillup_and_submit_trip_planner_form = function() {
        from_txt_box.sendKeys(testData.station1);
        //browser.sleep(browser_wait/5);

        /******** The below code is just to understand how 'Fluent wait' works ******
        browser.manage().timeouts().implicitlyWait(0);
        browser.wait(function() {
            browser.sleep(100);           
            return element(by.cssContainingText(css_train_suggest, testData.station1)).isDisplayed()
            .then(function (isDisplayed){
                return isDisplayed;
            },
            function (error) {
                return false;
            });
        }, 5*1000);
        **************/

        /*** using ExpectedConditions **
         * refer: http://www.protractortest.org/#/api?view=ProtractorExpectedConditions
        */
        browser.wait(EC.visibilityOf(element(by.cssContainingText(css_train_suggest, testData.station1)), 5000));
        
        element(by.cssContainingText(css_train_suggest, testData.station1)).click();
        to_txt_box.sendKeys(testData.station2);
        //browser.sleep(browser_wait/5);
        browser.wait(EC.visibilityOf(element(by.cssContainingText(css_train_suggest, testData.station2)), 5000));
        element(by.cssContainingText(css_train_suggest, testData.station2)).click();
        go_btn.click();
    };

    this.verify_trains_list_is_displayed = function() {
        expect(trains_list.isDisplayed()).toBeTruthy();
    };
};
module.exports = trip_planner_page;