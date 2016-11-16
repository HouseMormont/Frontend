/**
 * Created by Lucian Bredean on 11/15/2016.
 */
// var app = angular.module('EasyDocsUBBApp');

angular.module('EasyDocsUBBApp')
    .service('AppService', function () {

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
        alert("POST");
    };
});