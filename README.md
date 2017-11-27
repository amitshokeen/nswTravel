# nswTravel
POC for NSW Travel Planner test automation

To run the test on your windows system, follow the follwing given below:
1. To run the test, user must have JDK, NodeJS and npm installed and available globally.
2. Follow the simple setup steps given here: http://www.protractortest.org/#/tutorial
3. Navigate to the folder containing the package.json file and at the command prompt C:\path\to\my\folder>npm update
4. Navigate to the Conf folder containing the conf.js file and at the command prompt 
C:\path\to\my\folder\Conf>protractor conf.js --suite=amit

The test will run on the Chrome Browser.
The result will be available on the command prompt as Success or Failure.
Within the Conf folder, an allure-results folder will be formed.
The allure-results folder will contain the PNG and XML files – these are the screen-shot and result of the test run.
