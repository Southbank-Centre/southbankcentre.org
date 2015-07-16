# Southbank Centre app

This is the codebase for the Southbank Centre front-end website. It's an [AngularJS](https://angularjs.org/) application that retrieves its data from the [Southbank Centre CMS](https://github.com/Southbank-Centre/southbankcentre.org-CMS).

## Setting up development environment

### Requirements

- Ruby >= 2.0.0p353
- bundler (http://bundler.io/)
- node.js and npm (http://nodejs.org/)
- grunt-cli (http://gruntjs.com/getting-started)
- bower (http://bower.io/#install-bower)


### Dependency installation

Node modules, Bower components and Ruby Gems are already included in this repository, so there is no need to install them. However if you do need to install them again please follow the steps below:

After installing the software listed in the requirements above and cloning a copy of this app, run the following to install the correct dependencies for the app.

Run the following in the base directory:

    $ bundle install --deployment

    $ npm install

    $ bower install

## Running the app

In the base directory, run the following command:

    $ grunt serve

The app should open in your default browser, running at http://localhost:9000/

The grunt task will watch the app files for changes. It will rebuild and reload the app when any changes are made.

## Building the app

To build the app in a distributable form, run the following from the base directory:

    $ grunt build

The files will be compiled into the `/dist` directory.

## Installing SC-app-\* modules

SC-app-\* modules can be installed using bower in the following way, using SC-app-event as an example:

    $ bower install --save Southbank-Centre/SC-app-event

The files will be installed into the `/bower_components` directory. Re-running `$ grunt serve` will include the module in the `index.html` file. You can then include it as a dependency of your app in your `*.module.js` file.

*Most SC-app-\* modules also include other instructions to integrate their features into your app, so make sure you read their README files.*

_**Always install a module's tests into your app.**_ See the section *Tests* below.

#### App config constants

Certain functionality requires that you define constants in southbankcentre.constants.js. These should match the data you are intending to get from the CMS. This can be gathered from the CMS or examining the JSON output.

- __festivalAlias__ Required by SC-app-festival. The Drupal alias of a festival content type.
- __ticketingVocabularyId__ Required by SC-app-festival. The taxonomy used for the ticketing model.
- __homeLandingPageAlias__ The Drupal alias of a landing page content type.
- __disqus_shortname__ Required to enable commenting on blogs provided by SC-app-blog module. Used by the third party discussion tool Disqus.
- __hostName__ Required to enable commenting on blogs provided by SC-app-blog module. Used by the third party discussion tool Disqus.
- __schedPlannerShortname__ Required by SC-app-planner. Used by the third party planner tool Sched.

## Adding a homepage

See the README for [SC-app-landing-page](https://github.com/Southbank-Centre/SC-app-landing-page).

## Testing

Tests have been written to ensure that the website functions and displays as expected. They currently create their own content in the CMS which is used to test against (this content is deleted at the end of the tests).

@TODO test against real content in the CMS rather than creating/deleting test content for each test. 

Functional tests are written in [Protractor](https://angular.github.io/protractor) and reside in the `test/functional` directory. Please refer to the [README.md](https://github.com/Southbank-Centre/southbankcentre.org/tree/master/test/functional) in this directory for instructions on how to run them.

@TODO add unit tests as well as functional tests.
