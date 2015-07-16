'use strict';
module.exports = function(grunt){
  grunt.registerTask(
    'serve',
    'Compile then start a connect web server',
    function (target) {
      if (target === 'dist') {
        //return grunt.task.run(['build', 'connect:dist:keepalive']);
        return grunt.task.run([
          'clean:' + target,
          'wiredep',
          'configureProxies',
          'ngdocs',
          'useminPrepare',
          'prepareSASS',
          'concurrent:server',
          'autoprefixer',
          'concat',
          'ngAnnotate',
          'copy:' + target,
          'cdnify',
          'cssmin',
          'uglify',
          'filerev',
          'usemin',
          'htmlmin',
          'connect:dist:keepalive'
        ]);
      }

      grunt.task.run([
        'clean:server',
        'wiredep',
        'configureProxies',
        'prepareSASS',
        'concurrent:server',
        'autoprefixer',
        'connect:livereload',
        'watch'
      ]);
    }
  );
};
