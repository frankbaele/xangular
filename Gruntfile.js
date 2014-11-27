module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {

            dev: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: 'src/index.html',

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-wiredep');
};