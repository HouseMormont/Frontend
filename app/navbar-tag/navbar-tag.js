/**
 * Created by Lucian Bredean on 1/12/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('navbarTag', {
        templateUrl: 'navbar-tag/navbar-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.toggleSideBar = function () {
                return AppService.getSideBarState();
            };

            $ctrl.handleSidebar = function () {
                AppService.handleSideBar();
            };

            $ctrl.getActiveTab = function () {
                return AppService.getActiveTab();
            };

            $ctrl.setActiveTab = function(index) {
                AppService.setActiveTab(index);
                if(index === 0)
                    AppService.handleDRForm();
                if(index === 1)
                    AppService.handleDAForm();
            };

            $ctrl.drFormActive = function () {
                return AppService.getDRFormState();
            };

            $ctrl.drFormInactive = function () {
                return !(AppService.getDRFormState());
            };

            $ctrl.daFormActive = function () {
                return AppService.getDAFormState();
            };

            $ctrl.daFormInactive = function () {
                return !(AppService.getDAFormState());
            };
        }
    });