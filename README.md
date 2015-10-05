# Southbank Centre app

This is the codebase for the Southbank Centre front-end website. It's an [AngularJS](https://angularjs.org/) application that retrieves its data from the [Southbank Centre CMS](https://github.com/Southbank-Centre/southbankcentre.org-CMS).

## Setting up development environment

### Requirements

- node.js and npm (http://nodejs.org/)
- grunt-cli (http://gruntjs.com/getting-started)
- bower (http://bower.io/#install-bower)


### Dependency installation

After installing the software listed in the requirements above and cloning a copy of this app, run the following from the base directory to install the correct dependencies for the app:

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

## Installing angularjs-modules

See the README for [Southbank-Centre/angularjs-modules](https://github.com/Southbank-Centre/angularjs-modules/blob/master/README.md)

## Testing

Tests have been written to ensure that the website functions and displays as expected. They currently create their own content in the CMS which is used to test against (this content is deleted at the end of the tests).

### Functional tests

Functional tests are built with [Protractor](https://angular.github.io/protractor) and reside in the `test/functional` directory. Please refer to the [README.md](https://github.com/Southbank-Centre/southbankcentre.org/tree/master/test/functional) in this directory for instructions on how to run them.

### Unit tests

Unit tests are built with [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/), and reside in the `test/unit` directory. Please refer to the [README.md](https://github.com/Southbank-Centre/southbankcentre.org/tree/master/test/unit) in this directory for instructions on how to run them.