'use strict';
module.exports = function(grunt){
  grunt.registerTask(
    'build',
    'Build the app for distribution',
    function(target) {

      if (!target) {
        target = 'dist';
      }

      grunt.task.run([
        'clean:' + target,
        'wiredep',
        'ngdocs',
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
