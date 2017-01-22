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

            $ctrl.approveDoc = function (currentDocId, curentDocVers, currentDocType) {
                if (currentDocType === "Dispozitia rectorului")
                    currentDocType = "DR";
                else
                    currentDocType = "RN";
                AppService.approveDoc({idDoc: currentDocId, versionDoc: curentDocVers, docType: currentDocType});
            };

            $ctrl.rejectDoc = function (currentDocId, curentDocVers, currentDocType) {
                if (currentDocType === "Dispozitia rectorului")
                    currentDocType = "DR";
                else
                    currentDocType = "RN";
                AppService.rejectDoc({idDoc: currentDocId, versionDoc: curentDocVers, docType: currentDocType});
            };

            $ctrl.reviseDoc = function (currentDocId, curentDocVers, currentDocType) {
                if (currentDocType === "Dispozitia rectorului")
                    currentDocType = "DR";
                else
                    currentDocType = "RN";
                AppService.reviseDoc({idDoc: currentDocId, versionDoc: curentDocVers, docType: currentDocType});
            };
        }
    });