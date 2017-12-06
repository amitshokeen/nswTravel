/**
 * Created by Amit on 27/11/2017
 */

browser.ignoreSynchronization = true; //the transportnsw site is a non-angular so we ignore the angular sync part.
var common = require('../Conf/common.json');
var testData = require('../TestData/TestData.json');
var trip_url = common.url + common.trip;
var browser_wait = common.browser_wait;
var tpp = new(require('../PageObjects/trip-planner-page'));

describe('A trip request can be executed and results returned', function(){
    it('Phileas executes a trip plan from "North Sydney Station" to "Town Hall Station"', function(){        
        tpp.navigate_to_trip_planner_page();
        tpp.fillup_and_submit_trip_planner_form(testData.station1, testData.station2)
        tpp.verify_trains_list_is_displayed();
    });
});
