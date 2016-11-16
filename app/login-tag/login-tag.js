/**
 * Created by Lucian Bredean on 10/9/2016.
 */
angular.module('EasyDocsUBBApp')
    .component('loginTag', {
        templateUrl: 'login-tag/login-tag.html',
        controller: function () {
            $ctrl = this;
            // $ctrl.usrn = undefined;
            // $ctrl.pswd = undefined;
            $ctrl.login = function () {
                alert($ctrl.usrn + ':' + $ctrl.pswd);
            };
        }
    });