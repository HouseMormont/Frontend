/**
 * Created by Lucian Bredean on 10/7/2016.
 */
var app = angular.module('EasyDocsUBBApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'login-tag/login-tag.html'
        })
        .when('/test', {
            templateUrl: 'test.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});