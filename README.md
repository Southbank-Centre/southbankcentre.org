# README

## What is SC-app?

SC-app is a basic [AngularJS](https://angularjs.org/) application that can be used to create Southbank Centre websites that interface with the Southbank Centre Content API.

It is designed to be feature-less and generic. Sites can be built up either by having Southbank Centre App Modules (SC-app-\*) installed into them, or by having custom components written specifically for them.

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

## Developing with the Southbank Centre App framework

### App design

The aim of this project is to allow content-led and feature-rich websites to be built up as efficiently as possible. It has been structured to be a reusable as possible, so further development should be done with the following in mind:

#### 1. Think modular

With every feature or enhancement, aim to build it in such a way that it can be added to another SC app. In practice this means creating a new module or releasing a new version of an existing module.

#### 2. Back-compatible and future-proof

As SC-app and SC-app-* modules develop, websites that use them may be updated with later releases. Bear this in mind to ensure that either:

a) Changes won't break existing sites as they upgrade.

b) Breaking changes and upgrade paths are documented, and release numbers reflect this.

### Developing an app

#### Renaming the app

Once you've cloned the base SC-app, make sure to change app name everywhere, including documentation.

You'll also need to update any instance of SC-app-longname. Currently this is only referenced under `description` in the main bower.json file and `description` and `appDetails.longName` in the package.json file.

_Note: If using app-wide find-and-replace to rename it everywhere, be sure to exclude __bower.json__ and do that by hand._

As a future step this could be automated as a Grunt task, where the app name need only be entered once as a global variable and then running grunt serve/build will update it everywhere (eg [https://github.com/yoniholmes/grunt-text-replace](https://github.com/yoniholmes/grunt-text-replace).

#### Running the app

In the base directory, run the following command:

    $ grunt serve

The app should open in your default browser, running at http://localhost:9000/

The grunt task will watch the app files for changes. It will rebuild and reload the app when any changes are made.

#### Building the app

To build the app in a distributable form, run the following from the base directory:

    $ grunt build

The files will be compiled into the `/dist` directory.

#### Installing SC-app-\* modules

SC-app-\* modules can be installed using bower in the following way, using SC-app-event as an example:

    $ bower install --save Southbank-Centre/SC-app-event

The files will be installed into the `/bower_components` directory. Re-running `$ grunt serve` will include the module in the `index.html` file. You can then include it as a dependency of your app if your `*.module.js` file.

*Most SC-app-\* modules also include other instructions to integrate their features into your app, so make sure you read their README files.*

_**Always install a module's tests into your app.**_ See the section *Tests* below.

#### App config constants

Certain functionality requires that you define constants in SC-app.constants.js. These should match the data you are intending to get from the CMS. This can be gatehred from the CMS or examining the JSON output.
- __festivalAlias__ Required by SC-app-festival. The Drupal alias of a festival content type.
- __ticketingVocabularyId__ Required by SC-app-festival. The taxonomy used for the ticketing model.
- __homeLandingPageAlias__ The Drupal alias of a landing page content type.
- __disqus_shortname__ Required to enable commenting on blogs provided by SC-app-blog module. Used by the third party discussion tool Disqus.
- __hostName__ Required to enable commenting on blogs provided by SC-app-blog module. Used by the third party discussion tool Disqus.
- __schedPlannerShortname__ Required by SC-app-planner. Used by the third party planner tool Sched.

#### Adding a homepage

See the README for [SC-app-landing-page](https://github.com/Southbank-Centre/SC-app-landing-page).

### Developing an app module

It is best to test SC-app-* modules from within an app as you develop it. Therefore the workflow for developing a module is as follows:

1. Create the module if necessary (see below), or checkout the module files if you are developing an existing module.
2. Create a new branch in your module's repository and push it up to GitHub.
3. In the base directory of an app that you can use for testing the module's development, run the following:

		$ bower install --save Southbank-Centre/<SC-app-module-name>#<branch-name>

4. Make changes to the module. Make sure to always run `grunt build` after making changes.
5. Commit your changes to your branch and push the changes up to GitHub.
6. In your test app, run `bower update` to pull in the changes you just pushed up to GitHub.
7. Once tested, create a pull request for the changes. **Don't** increment the app's version number in `bower.json` or `package.json`. This will be done as part of the release process (see 'Releasing an app module' below.

#### Creating a new app module

@TODO

### Tests

We're using the [Protractor](http://angular.github.io/protractor/) testing framework. See [this README](https://github.com/Southbank-Centre/SC-app/blob/master/test/functional/README.md) for information about using it on this project.

On their own, SC-app-* modules don't display any functionality on a browser out of the box. This means that functional tests can't be run against a module until it has been installed into an app.

As such, a module's tests will only be run if you copy them into an app you are building. _**You should always copy a module's tests into your app.**_

#### Adding a module's tests to your app

For each SC-app-* module you have installed in your app, do the following:

1. Create a new folder in the tests/functional directory and name it after the module, e.g. SC-app-festival.
2. In GitHub, view the files for the version of the module you have installed.
3. Copy the contents of the tests/functional directory into the folder that you created in your app in step 1.
4. Edit the variables for the module's tests in the *-vars.js file, (e.g. festival-vars.js), adapting them to your app-specific configuration.
5. View the test specs and remove and sections that don't apply to your app. For example, the festival module contains tests for the festival header, which is an optional feature of that module.
6. [Run the tests locally](https://github.com/Southbank-Centre/SC-app/blob/master/test/functional/README.md) to check that they work properly.

#### Releasing an app module

When new versions of modules are released, modules that depend on them need to be updated so that they use the latest version. As a result, those dependant modules also need to be updated and released, as do their dependant modules, *ad infinitum*.

1. Create a release branch in the module's repository and merge all of the code that is to be released into that branch.
2. Test the module from this branch by installing it into a test app, e.g.: `bower install Southbank-Centre/SC-app-myapp#release-branch-name
3. Make any necessary fixes in the release branch.
4. When you are happy with the changes, update the version number of the module in the following files: `bower.json` and `package.json`. The version numbering follows the [SemVer](http://semver.org/) standard. Note that updates that consist only of documentation changes should be considered a 'patch' release.
5. Create a new draft release with a tag using the new version number. Tag the release against the master branch.
6. Issue a pull request to merge the release branch into the master branch.
7. After the pull request has been reviewed and merged, publish the draft release you created in step (5).
8. Identify all SC-app-* modules that list the module you just released as a dependency. Do this by looking in their `bower.json` files.
9. For each of the modules you identified in step (8), do the following:
	1. Create a new release branch in that module's repository, branching from its master branch.
	2. Within that release branch, update the module's `bower.json` file, incrementing the version number of the dependency that you released in step (6) above.
	3. Also update the version number of the module itself in the following files: `bower.json` and `package.json`. Increment the version number to the same level. For example, if the module you released in step (6) was a minor release from version 1.2.3 to version 1.3.0, this module's version should also be incremented as a minor release.
	4. Create a new draft release with a tag using the new version number. Tag against the master branch.
	5. Issue a pull request to merge the release branch into the master branch.
	6. After the pull request has been reviewed and merged, publish the draft release you just created.
	7. Go back to step (8) above so that modules that depend on the module you just released get updated to use the latest version.

@TODO this process could potentially be automated.
