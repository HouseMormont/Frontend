/**
 * Created by Lucian Bredean on 10/9/2016.
 */
angular.module('EasyDocsUBBApp')
    .component('loginTag', {
        templateUrl: 'login-tag/login-tag.html',
        controller: function (AppService) {
            $ctrl = this;
            $ctrl.login = function () {
                AppService.loginRequest($ctrl.usrn, $ctrl.pswd);
            };
        }
    });