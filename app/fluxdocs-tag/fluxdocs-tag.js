/**
 * Created by Lucian Bredean on 1/10/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('fluxdocsTag', {
        templateUrl: 'fluxdocs-tag/fluxdocs-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.docItems = [{id:"1", docName:"nume1", authorName:"nume autor1"}, {id:"2", docName:"nume2", authorName:"nume autor2"}];

        }
    });