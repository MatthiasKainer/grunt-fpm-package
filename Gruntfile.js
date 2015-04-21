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
        "jshint": {},
        "test" : {}
    });
    
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    
    // By default, lint and run all tests.
    grunt.registerTask('test', ['jshint', 'test']);
};
