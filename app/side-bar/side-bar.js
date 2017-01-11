/**
 * Created by Lucian Bredean on 12/4/2016.
 */
angular.module('EasyDocsUBBApp')
    .component('sideBar', {
        templateUrl: 'side-bar/side-bar.html',
        controller: function (AppService) {
            $ctrl = this;
            $ctrl.toggleSideBar = function () {
                return AppService.getSideBarState();
            };

            $ctrl.handleSidebar = function () {
                AppService.handleSideBar();
            };

            $ctrl.handleDRForm = function () {
                AppService.handleDRForm();
            };

            $ctrl.getDRFormState = function () {
                return AppService.getDRFormState();
            };

            $ctrl.handleDAForm = function () {
                AppService.handleDAForm();
            };

            $ctrl.getDAFormState = function () {
                return AppService.getDAFormState();
            };

            $ctrl.logout = function () {
                AppService.logoutUser();
            }
        }
    });