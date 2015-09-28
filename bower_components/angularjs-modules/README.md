# Angular.js Modules

This repository holds Angular.js modules that can be used to build Southbank Centre websites and apps.

In particular, the modules are designed for apps that consume data from the Southbank Centre Web Content service, although this isn’t a requirement.

## Installing a module

1. Install bower if you haven't already: `$ npm install -g bower`
2. Install angularjs-modules into your app: `$ bower install --save Southbank-Centre/angularjs-modules`. See the [bower documentation](http://bower.io) for options related to installing a specific release or branch of the repo.
3. Add script tags to include whichever version of whichever modules you want to use in your app. E.g. `<script src="bower_components/angularjs-modules/scContent/0.1.2/release/scContent.min.js"></script>`

## Installing a new version of a module

1. Run `$ bower install --save Southbank-Centre/angularjs-modules` again in your app. The latest version of the module will be included in the angularjs-modules package and you will be able to include it's script file in you app.

## Module design principles

1. A module should serve a single well-defined purpose, and should not provide any other logic beyond what is needed to serve that purpose.
2. A module should provide functionality without making assumes about the app it is being used by.
3. A module should not provide layout or styling logic unless that is their specific purpose.
4. Smaller is better, although a module should only been created if there is a good chance it will be useful for another site or app.
5. Module code should be developed according to the John Papa style guide.

See [this diagram](https://drive.google.com/open?id=0B6MjeYJdf0YIQ1NnWDR2aE9Lam8) for an understanding of how modules might be structured.

## Running tests

### Unit tests

1. Install karma-cli globally: `$ npm install -g karma-cli`
2. Install dependencies: `$ npm install`
3. Run karma. From the `test/unit` directory run `$ karma start karma.conf.js --single-run`

You can run karma and have it run tests when your test files change. From the `test/unit` directory run `$ karma start karma.conf.js`
