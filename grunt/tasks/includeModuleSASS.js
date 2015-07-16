'use strict';
module.exports = function(grunt){
  grunt.registerTask(
    'includeModuleSASS',
    'Looks through the SC-app modules and imports any sass files it finds into the main.scss of the current app',
    function() {

      var sassDir = grunt.config.data.sassDir;
      var modulePartialsDir = '.tmp/sass/' + sassDir + '/modulePartials';
      var fs = require('fs');

      // Try opening the folder where module partials have been moved to
      try {

        var modulePartials = fs.readdirSync(modulePartialsDir);
        var writeToSASS = '';

        modulePartials.forEach(function(modulePartial) {

          if (modulePartial.charAt(0) === '_') {
            modulePartial = modulePartial.substring(1);
          }

          writeToSASS = writeToSASS + '@import "modulePartials/' + modulePartial + '";';

        });

        // Add the module SASS partial includes to the main sass file
        fs.appendFileSync('.tmp/sass/' + sassDir + '/main.scss', writeToSASS);

      } catch(ex) {

        // If -2 error it is because there are no module partials
        if (ex.errno === -2) {
          grunt.log.error('No module partials to process.');

          // Display error if not a -2
        } else {
          grunt.log.error(ex);
        }

      }
    }
  );
};
