/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('mydocsTag', {
        templateUrl: 'mydocs-tag/mydocs-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.docItems = [{id:"1", nume:"nume1"}, {id:"2", nume:"nume2"}];

        }
    });