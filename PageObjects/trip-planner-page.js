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

var trip_planner_page = function() {
    this.navigate_to_trip_planner_page = function(){
        hf.navigateToPage(trip_url);
    };

    this.fillup_and_submit_trip_planner_form = function() {
        from_txt_box.sendKeys(testData.station1);
        browser.sleep(browser_wait/2);
        to_txt_box.sendKeys(testData.station2);
        browser.sleep(browser_wait/2);
        go_btn.click();
    };

    this.verify_trains_list_is_displayed = function() {
        expect(trains_list.isDisplayed()).toBeTruthy();
    };
};
module.exports = trip_planner_page;