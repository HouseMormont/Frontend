/**
 * Created by Lucian Bredean on 11/15/2016.
 */
// var app = angular.module('EasyDocsUBBApp');

angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular, $base64) {
        Restangular.setBaseUrl('http://localhost:8080');
        var encoded = $base64.encode('userb:userb');
        Restangular.setDefaultHeaders({'Authorization': 'Basic ' + encoded});
        var service = this;
        var loggedInUser = {
            userName: undefined,
            userRole: undefined,
            token: undefined
        };
        var isSideBarActive = {active: false}; //sidebar active

        service.handleSideBar = function () {
            // console.log("Before:" + isSideBarActive.active);
            // alert("Before:" + isSideBarActive.active);
            isSideBarActive.active = !(isSideBarActive.active);
            // console.log("After:" + isSideBarActive.active);
        };

        service.getSideBarState = function () {
            return isSideBarActive.active;
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
            Restangular.one('/login').post(undefined, undefined, undefined, {Username: u, Password: p})
                .then(function (response) {
                    console.log(response.plain);
                })
                .catch(function (err) {
                    console.log(err);
                });
            // Restangular.one('/check_login').get(456)
            //     .then(function (response) {
            //                 console.log(response.plain);
            //             })
            //             .catch(function(err){
            //                 console.log(err);
            //             });
        };
    });