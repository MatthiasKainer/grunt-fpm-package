/*
 * grunt-fpm-package
 * https://github.com/MatthiasKainer/grunt-fpm-package
 *
 * Copyright (c) 2015 mkainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt, child_process) {
    
    child_process = child_process || require('child_process');
    
    grunt.registerMultiTask('fpm', 'Triggers a fpm run', function () {
        var done = this.async();
        var t = this.target;
        
        var options = this.options({ "name" : t });
        
        var exec = "fpm";

        Object.keys(options).forEach(function (option) {
            if(options[option].length > 0) {
                // Here are parameters meant without a value like --force
                if (typeof options[option] == "boolean") {
                    var paramPrefix = (option.length == 1) ? "-" : "--";
                    argument = options[option] == true ? " " + paramPrefix + option : "";
                } else {
                    var argument = " " + (option.length == 1 ? "-" + option + " " : "--" + option + "=");
                    var optionValue = (typeof options[option] == "string" ? '"' + options[option] + '"' : options[option]);
                    var value = [].concat(optionValue);
                    argument = argument + value.join(argument);
                }
                exec += argument;
            }
        });
        
        this.files.forEach(function (f) {
            exec += " " + f.orig.src.join(" ");
        });
        
        grunt.verbose.subhead(exec);
        
        var execOptions = {};
        if (this.data.cwd) execOptions["cwd"] = this.data.cwd;

        var fpm = child_process.exec(exec, execOptions);
        
        fpm.stdout.on('data', function (d) { grunt.log.write(d); });
        fpm.stderr.on('data', function (d) { grunt.log.error(d); });
        
        // Catches failing to execute the command at all (eg spawn ENOENT),
        // since in that case an 'exit' event will not be emitted.
        fpm.on('error', function (err) {
            grunt.log.error('Failed with: ' + err);
            done(false);
        });
        
        fpm.on('exit', function (code) {
            if (code === 0)
                grunt.verbose.ok("fpm executed successfully");
            else
                grunt.verbose.error("fpm failed with code " + code);
            done();
        });
    });

};
