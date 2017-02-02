/*
 * deliverable
 *
 * Licensed under MIT License
 */
module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    latex: {
      pdf: {
        src: 'main.tex',
        options: {
          outputDirectory: 'dist/',
          jobname: 'main'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          base: 'dist',
          open: 'http://localhost:8000/main.pdf'
        }
      }
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['latex', 'latex:pdf']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['dist/main.pdf'],
      },
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-latex');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
