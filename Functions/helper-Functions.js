/**
 * Created by Amit on 27/11/2017
 */

var helperFunctions = function(){
    this.navigateToPage = function(url){
		browser.get(url);
	};
};
module.exports = helperFunctions;