/**
 * Created by Lucian Bredean on 1/21/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('usersTag', {
        templateUrl: 'users-tag/users-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.userItems = AppService.getUsersForDisplay();

            if ($ctrl.userItems === undefined) {
                $ctrl.userItems = [];
                var docItemsPromise = AppService.getAllUsers();
                docItemsPromise.then(
                    function (response) {
                        $ctrl.userItems = response;
                    }
                );
            }
        }
    });