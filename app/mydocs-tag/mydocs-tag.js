/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('mydocsTag', {
        templateUrl: 'mydocs-tag/mydocs-tag.html',
        controller: function (AppService) {
            $ctrl = this;
            $ctrl.$onChanges = function(){
                $ctrl.docItems = AppService.getAllDocs();
            };
        }
    });