/**
 * Created by Lucian Bredean on 11/15/2016.
 */
// var app = angular.module('EasyDocsUBBApp');

angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular,$base64) {
        Restangular.setBaseUrl('http://localhost:8080');
        var encoded = $base64.encode('userb:userb');
        Restangular.setDefaultHeaders({'Authorization': 'Basic ' + encoded });
        Restangular.setDefaultHeaders({'Access-Control-Allow-Origin' : '*'});
        var service = this;
        var loggedInUser = {
            userName: undefined,
            userRole: undefined,
            token: undefined
        };

        service.setLoggedInUserName = function (username) {
            loggedInUser.userName = username;
        };

        service.getLoggedInUserName = function () {
            return loggedInUser.userName;
        };

        service.setLoggedInUserRole = function (userrole) {
            loggedInUser.userRole = userrole;
        };

        service.getLoggedInUserRole = function () {
            return loggedInUser.userRole;
        };

        service.setToken = function (token) {
            loggedInUser.token = token;
        };

        service.getToken = function () {
            return loggedInUser.token;
        };

        service.loginRequest = function (u, p) {
            Restangular.one('/login').post({},{username: u, password: p,'Content-Type': 'application/json', 'Authorization':'Basic'})
                .then(function (response) {
                    console.log(response.plain);
                })
                .catch(function(err){
                    console.log(err);
                });
        };
    });