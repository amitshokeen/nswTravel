var AllureReporter = require('jasmine-allure-reporter');
var common = require('./common.json');

exports.config = {
    
	//useAllAngular2AppRoots: true, //not needed for non-angular projects
	seleniumAddress: 'http://localhost:4444/wd/hub',
	//directConnect: true,
	allScriptsTimeout: 60000,
	maxSessions: 1,

	//multiCapabilities: [
		capabilities: //[
		{
			//'browserName': "chrome" //this works
			/*
			'browserName': "internet explorer",
			'platform': 'ANY',
			'version': '11',
			'ignoreProtectedModeSettings': true
			*/
			//'browserName': "firefox" //this works 
			//'seleniumArgs': ['-Dwebdriver.edge.driver=C:/Users/amits/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/MicrosoftWebDriver.exe'],
			'browserName': "MicrosoftEdge"
		},
	//],
	onPrepare: function () {
		// Override the timeout for webdriver.
		browser.driver.manage().timeouts().implicitlyWait(10000);
		browser.driver.manage().window().maximize();
		jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: 'allure-results'
		}));
	},

	framework: 'jasmine2',
	suites: {
		all: ['../TestSpecs/*.js'],
		amit: ['../TestSpecs/trip-request-Test.js']
	},
	jasmineNodeOpts: {
		defaultTimeoutInterval: 9*60*1000
	}
};
