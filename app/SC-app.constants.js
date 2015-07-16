'use strict';

angular
  .module('SC-app')
  .constant('angularMomentConfig', {

    timezone: 'Europe/London'

  })
  .constant('appConfig', {

    // Module SC-app-festival
    // JSON path alias for festival content item
    // festivalAlias: '',

    // Module SC-app-festival
    // Node ID of the festival content item, extract from the end of festivalAlias
    get festivalId() {

      if (typeof this.festivalAlias === 'string') {

        return this.festivalAlias.substr(this.festivalAlias.lastIndexOf('-') + 1);

      } else {

        return;

      }

    },

    // Module: SC-app-landing-page
    // JSON path alias for the landing page that appears as the app's homepage
    // homeLandingPageAlias: '',

    // Module: SC-app-blog
    // Used by disqus plugin
    // disqus_shortname: '',

    // Module: SC-app-blog
    // Hostname of the production app
    // Used by disqus plugin
    // hostName: '',

    // Module: SC-app-event
    // Vocabulary ID of the vocabulary that manages ticket types
    // ticketingVocabularyId: 0,

    // Module: SC-app-utils
    // Defines whether or not angular caching is enabled
    angularCache: true,

    // Module: SC-app-planner
    // Defines the shortname of the Sched planner
    // schedPlannerShortname: ''

  });