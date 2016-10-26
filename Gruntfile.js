/**
 * Created by Laptop on 10/7/2016.
 */
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-includes');
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
                    port: 8989,
                    host: '0.0.0.0',
                    livereload: true,
                    keepalive: true,
                    useAvailablePort: true,
                    open: 'http://localhost:8989/app/index.html'
                }
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