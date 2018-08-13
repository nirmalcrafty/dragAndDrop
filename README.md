# dragAndDrop
This is a test repo with a sample test for dragAndDrop action using Protractor cucumber framework

This code uses cucumber and protractor as the test framework

Prerequisite : 

1. Install nodejs and npm from https://nodejs.org/en/ (v8.9.1 or later)
2. The SAUCE_USERNAME and SAUCE_ACCESS_KEY should be added in your system environment variables. Refer sauce labs documentation
3. The test is configured to run on a real device from sauce labs cloud, so make sure you start the sauce connect tunnel before starting the tests.


To run the tests follow the below steps

1. Run the command "npm install" to install all node packages in the project root directory
2. Run "npm run webdriver-update" to install the webdrivers
3. Run "npm run clean-build" to clean and build the test code
4. Run "npm run test" to start the tests


