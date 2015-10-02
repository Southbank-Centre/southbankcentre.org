'use strict';
module.exports = function(grunt){
  grunt.registerTask(
    'prepareSASS',
    [
      'copy:appStyles',
      'copy:bowerComponents',
      'copy:moduleStyles',
      'includeModuleSASS'
    ]
  );
};
