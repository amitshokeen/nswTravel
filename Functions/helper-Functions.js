/**
 * Created by Amit on 27/11/2017
 */

var helperFunctions = function(){
    this.navigateToPage = function(url){
		//browser.waitForAngularEnabled(false); //not needed as browser.ignoreSynchronization has been set to true.
		browser.get(url);
	};
};
module.exports = helperFunctions;