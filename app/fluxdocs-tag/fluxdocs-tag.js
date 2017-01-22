/**
 * Created by Lucian Bredean on 1/10/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('fluxdocsTag', {
        templateUrl: 'fluxdocs-tag/fluxdocs-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.docsProcess = AppService.getDocsToProcessForDisplay();

            if ($ctrl.docsProcess === undefined) {
                $ctrl.docsProcess = [];
                var docItemsPromise = AppService.getDocsToReview();
                docItemsPromise.then(
                    function (response) {
                        $ctrl.docsProcess = response;
                    }
                );
            }
        }
    });