<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
<<<<<<< HEAD
            jade: {
                files: ['app/views/**'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: ['public/js/**', 'app/**/*.js'],
=======
            js: {
                files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js'],
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
                tasks: ['jshint'],
                options: {
                    livereload: true,
                },
            },
            html: {
<<<<<<< HEAD
                files: ['public/views/**'],
=======
                files: ['public/views/**', 'app/views/**'],
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
                options: {
                    livereload: true,
                },
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
<<<<<<< HEAD
            all: ['gruntfile.js', 'public/js/**/*.js', 'test/**/*.js', 'app/**/*.js']
        },
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['app', 'config'],
                    debug: true,
=======
            all: {
                src: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js', '!test/coverage/**/*.js'],
                options: {
                    jshintrc: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['public/**'],
                    ext: 'js',
                    nodeArgs: ['--debug'],
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
<<<<<<< HEAD
            tasks: ['nodemon', 'watch'], 
=======
            tasks: ['nodemon', 'watch'],
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
<<<<<<< HEAD
                reporter: 'spec'
            },
            src: ['test/**/*.js']
=======
                reporter: 'spec',
                require: 'server.js'
            },
            src: ['test/mocha/**/*.js']
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
<<<<<<< HEAD
        }
    });

    //Load NPM tasks 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
=======
        },
        karma: {
            unit: {
                configFile: 'test/karma/karma.conf.js'
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'concurrent']);

    //Test task.
<<<<<<< HEAD
    grunt.registerTask('test', ['env:test', 'mochaTest']);
=======
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
};
