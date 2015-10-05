# Unit tests

Unit tests are written using the Jasmine framework and are run using the Karma test runner. To run unit tests:

1. Install karma-cli globally: `$ npm install -g karma-cli`
2. Install dependencies: `$ npm install`
3. Run karma. From the test/unit directory run `$ karma start karma.conf.js --single-run`

You can run karma and have it run tests when your test files change. From the test/unit directory run `$ karma start karma.conf.js`