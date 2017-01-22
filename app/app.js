/**
 * Created by Lucian Bredean on 10/7/2016.
 */
angular.module('EasyDocsUBBApp', ['ngRoute', 'restangular', 'base64', 'ui.bootstrap', 'ui.router'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<login-tag></login-tag>'
            })
            .when('/main-layout', {
                template: '<main-layout></main-layout>'
            })
            .otherwise({
                redirectTo: 'login-tag/login-tag.html'
            });
    })
    .run(function ($rootScope, AppService, $location) {
        if (!($location.path() === "/")) {
            $rootScope.$on("$routeChangeStart", function () {
                AppService.isUserLoggedIn().then(function(response) {
                    if (response != true) {
                        $location.path("/");
                    }
                }).catch(function () {
                    $location.path("/");
                });
            });
        }
    });
