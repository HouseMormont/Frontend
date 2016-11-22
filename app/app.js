/**
 * Created by Lucian Bredean on 10/7/2016.
 */
angular.module('EasyDocsUBBApp', ['ngRoute', 'restangular', 'base64'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<login-tag></login-tag>'
            })
            .when('/test', {
                templateUrl: 'test.html'
            })
            .otherwise({
                redirectTo: 'login-tag/login-tag.html'
            });
    });