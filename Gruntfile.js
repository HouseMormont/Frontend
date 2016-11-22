/**
 * Created by Lucian Bredean on 10/7/2016.
 */
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-rewrite');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.initConfig({
        wiredep: {
            target: {
                src: 'app/index.html'
            }
        },
        includeSource: {
            options: {
                basePath: 'app',
                baseUrl: '',
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
                    }
                }
            },
            app: {
                files: {
                    'app/index.html': 'app/index.html'
                }
            }
        },
        watch: {
            options:{
                livereload: true
            },
            css: {
                files: ['app/**/*.css']
            },
            scripts: {
                files: ['app/**/*.js']
            },
            html: {
                files: ['app/**/*.html']
            }
        },
        connect: {
            keepalive: {
                options: {
                    protocol: 'http',
                    port: 8989,
                    hostname: 'localhost',
                    livereload: true,
                    keepalive: true,
                    useAvailablePort: true,
                    // open: 'app/index.html',
                    // open: true
                    open: {
                        target: 'http://localhost:8989/app'
                    }
                    // base:'/app'
                },
                middleware: function(connect, options, middlewares) {
                    // inject a custom middleware into the array of default middlewares
                    // this is likely the easiest way for other grunt plugins to
                    // extend the behavior of grunt-contrib-connect
                    middlewares.push(function(req, res, next) {
                        req.setHeader('Access-Control-Allow-Origin', '*');
                        req.setHeader('Access-Control-Allow-Methods', '*');
                        return next();
                    });

                    return middlewares;
                },
                rules: {'(.*)(?!\.html|\.jpg|\.css)' : '$1.html'}
            }
        },
        concurrent: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.registerTask('prepare', ['wiredep', 'includeSource']);
    grunt.registerTask('server', ['prepare', 'concurrent']);
};