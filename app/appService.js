/**
 * Created by Lucian Bredean on 11/15/2016.
 */
angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular, $base64, $location) {
        // Restangular.setBaseUrl('http://172.30.117.30:8080');
        Restangular.setBaseUrl('http://localhost:8080');

        Restangular.setDefaultHttpFields({withCredentials: true});
        Restangular.setFullResponse(true);
        var service = this;
        var loggedInUser = {
            userName: undefined,
            userRole: undefined,
            isLoggedIn: false
        };
        var isSideBarActive = {active: false}; //sidebar active

        service.isUserLoggedIn = function () {
            Restangular.one('/check_login').get()
                .then(function (response) {
                    console.log("test login:" + response);
                    if (response.status == 200) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
                .catch(function (response) {
                    console.log("test login error:" + response);
                    return false;
                });
            // return loggedInUser.isLoggedIn;
        };

        service.handleSideBar = function () {
            isSideBarActive.active = !(isSideBarActive.active);
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

        service.logoutUser = function () {
            alert("Logout called!");
            //TODO: Call logout to server
            loggedInUser.userName = undefined;
            loggedInUser.userRole = undefined;
            loggedInUser.isLoggedIn = false;
            $location.path("/");
        };

        service.loginRequest = function (u, p) {
            Restangular.one('/login').post(undefined, undefined, undefined, {Username: u, Password: p})
                .then(function (response) {
                    if (response.status == 200) {
                        loggedInUser.userName = u;
                        loggedInUser.userRole = response.data.Authorities[0];
                        loggedInUser.isLoggedIn = true;
                        $location.path("/main-layout");
                    }
                })
                .catch(function () {
                    $location.path("/");
                });
        };
    });