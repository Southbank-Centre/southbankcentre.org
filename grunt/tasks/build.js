'use strict';
module.exports = function(grunt){
  grunt.registerTask(
    'build',
    'Build the app for distribution',
    function(target, env) {

      if (!target) {
        target = 'dist';
      }

      if (!env) {
        env = 'dev';
      }

      grunt.task.run([
        'clean:' + target,
        'wiredep',
        'ngdocs',
        'ngconstant:' + env,
        'useminPrepare',
        'prepareSASS',
        'concurrent:' + target,
        'autoprefixer',
        'concat',
        'ngAnnotate',
        'copy:' + target,
        'cdnify',
        'cssmin',
        'uglify',
        //'filerev',
        'usemin',
        'htmlmin'
      ]);
    }
  );
};
