/**
 * Created by Lucian Bredean on 10/9/2016.
 */
angular.module('EasyDocsUBB')
    .component('customTag', {
        templateUrl: 'custom-tag/custom-tag.html',
        controller: function () {
            this.message = 'Custom message!!!!!!!';
        }
    });