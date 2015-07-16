# Protractor tests.

## Installation

To install protractor globally use:

	sudo npm install -g protractor

Verify it works:
	
	protractor --version

To run test localy webdriver-manager is used:

	sudo webdriver-manager update
	webdriver-manager start

Verify it works by visiting `http://localhost:4444/wd/hub/static/resource/hub.html`.

## Run protractor tests

To run protractor test two things are needed. A configuration file for protractor to use `conf.js` and a test specification. Tests are run with:

	protractor conf.js
	
### Command line arguments

The `conf.js` file used for the front-end accepts a URL command line parameter. This is used to direct the test to the different environments. Run the tests against a particular environment with:

	protractor conf.js --params.backUrl 'http://my-app-backend' --params.frontUrl 'http://my-app-frontend'

Do not use a trailing slash.

### Directory structure

A top level directory named `test` within the angular app contains all tests. These are split further in two directories for `unit` or `functional` tests. 

The `conf.js` file is placed withn the `functional` directory. All specs are placed within `functional` grouped together in feature-specific directories (e.g. a `blog` directory to group all tests for the blog.)

Within SC-app-* module repositories, test files should be placed directly in `tests/functional`, not within a feature-specific directory. Furthermore, SC-app-* modules shouldn't have their own `conf.js` file. See more information about SC-app-* tests [here](https://github.com/Southbank-Centre/SC-app/blob/master/README.md).

### SauceLabs

[SauceLabs](https://saucelabs.com/) is used to run automated tests against different browsers. The `conf.js` file already contains code to read login credentials for SauceLabs from the environment you are running the tests from. To add SauceLabs locally to a development machine use:

	echo "export SAUCE_USERNAME=sauceUsername
	export SAUCE_ACCESS_KEY=sauceAccessKey" >> ~/.bash_profile &&
	source ~/.bash_profile

Substitute *sauceUsername* and *sauceAccessKey* with the correct values.
