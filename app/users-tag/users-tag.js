/**
 * Created by Lucian Bredean on 1/21/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('usersTag', {
        templateUrl: 'users-tag/users-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.uT = AppService.getUT();
            $ctrl.uA = AppService.getUA();
            $ctrl.uF = AppService.getUF();
            $ctrl.userItems = AppService.getUsersForDisplay();

            if ($ctrl.userItems === undefined) {
                $ctrl.userItems = [];
                var usersPromise = AppService.getAllUsers();
                usersPromise.then(
                    function (response) {
                        $ctrl.userItems = response;
                    }
                );
            }

            if ($ctrl.uA === undefined) {
                $ctrl.uA = [];
                var docItemsPromise = AppService.getUserAuthorities();
                docItemsPromise.then(
                    function (response) {
                        $ctrl.uA = response;
                    }
                );
            }

            if ($ctrl.uT === undefined) {
                $ctrl.uT = [];
                var docItemsPromise = AppService.getUserTypes();
                docItemsPromise.then(
                    function (response) {
                        $ctrl.uT = response;
                    }
                );
            }

            if ($ctrl.uF === undefined) {
                $ctrl.uF = [];
                var docItemsPromise = AppService.getUserFunctions() ;
                docItemsPromise.then(
                    function (response) {
                        $ctrl.uF = response;
                    }
                );
            }

            $ctrl.createUser = function () {
                AppService.createUser({username: $ctrl.username, password: $ctrl.password, firstName: $ctrl.firstname, lastName: $ctrl.lastname, authority: $ctrl.authority, functie: $ctrl.function, type: $ctrl.type});
            };

            $ctrl.deleteUser = function(username) {
                AppService.deleteUser({username : username});
            }

        }
    });