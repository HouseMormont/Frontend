/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('mydocsTag', {
        templateUrl: 'mydocs-tag/mydocs-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.docItems = AppService.getMyDocs();
            if ($ctrl.docItems === undefined) {
                $ctrl.docItems = [];
                var docItemsPromise = AppService.getAllDocs();
                docItemsPromise.then(
                    function (response) {
                        $ctrl.docItems = response;
                    }
                );
            }

            $ctrl.makeFinal = function (currentDocId, curentDocVers, currentDocType) {
                if (currentDocType === "Dispozitia rectorului")
                    currentDocType = "DR";
                else
                    currentDocType = "RN";
                AppService.makeFinal({idDoc: currentDocId, verDoc: curentDocVers, docType: currentDocType});
            };

            $ctrl.delete = function (currentDocId, curentDocVers, currentDocType) {

            }
        }
    });