/**
 * Created by Lucian Bredean on 11/16/2016.
 */
angular.module('EasyDocsUBBApp')
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