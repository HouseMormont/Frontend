/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('daformTag', {
        templateUrl: 'da-doc/daform-tag.html',
        controller: function (AppService) {
            $ctrl = this;


            $ctrl.facultate;
            $ctrl.departament;
            $ctrl.nrInreg;
            $ctrl.nrInregDGA;


            $ctrl.sumaB;
            $ctrl.sumaBAC;
            $ctrl.sumaVP;
            $ctrl.sumaVPAC;

            $ctrl.DIFN;
            $ctrl.sumaDIFN;
            $ctrl.sumaDIFNAC;
            $ctrl.DIFI;
            $ctrl.sumaDIFI;
            $ctrl.sumaDIFIAC;
            $ctrl.DICTA;
            $ctrl.sumaDICTA;
            $ctrl.sumaDICTAAC;
            $ctrl.sumaCT;
            $ctrl.sumaCTAC;
        }
    });