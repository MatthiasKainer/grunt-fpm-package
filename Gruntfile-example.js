/*
 * grunt-fpm-package
 * https://github.com/MatthiasKainer/grunt-fpm-package
 *
 * Copyright (c) 2015 mkainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
        
    // Project configuration.
    grunt.initConfig({
        
        // Configuration to be run (and then tested).
        "fpm": {
            "options": {
                "s" : "dir",
                "t" : "deb",
                "version" : "1.0"
            },
            "mypackage" : {
                "src": ["la/**", "le/**", "lu/**"]
            }
        }
    });
    
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    
    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('default', ['fpm']);
    
    // By default, lint and run all tests.
    grunt.registerTask('test', ['jshint', 'test']);

};
