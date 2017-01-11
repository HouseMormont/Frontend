/**
 * Created by Lucian Bredean on 11/22/2016.
 */
angular.module('EasyDocsUBBApp')
    .component('mainLayout', {
        templateUrl: 'main-layout/main-layout.html',
        controller: function (AppService) {
            $ctrl = this;
            // $ctrl.toggleSideBar = AppService.getSideBarState;

            $ctrl.toggleSideBar = function () {
                return AppService.getSideBarState();
            };

            $ctrl.handleSidebar = function () {
                AppService.handleSideBar();
            };

            $ctrl.drFormActive = function() {
                return AppService.getDRFormState();
            };

            $ctrl.drFormInactive = function() {
                return !(AppService.getDRFormState());
            };

            $ctrl.daFormActive = function() {
                return AppService.getDAFormState();
            };

            $ctrl.daFormInactive = function() {
                return !(AppService.getDAFormState());
            };

        }
    });