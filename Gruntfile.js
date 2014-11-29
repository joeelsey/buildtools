'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserfiy');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.cs'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['public/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*test.js'],
        dest: 'test/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: {src: ['test/**/*.js']}
    },

    jshint: {
      all: ['server.js', 'test/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'server.js',
      options: {
        config: '.jsc'
      }
    }
  });
  grunt.registerTask('build:dev',['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTaks('test', ['jshint','jscs','simplemocha']);
};
