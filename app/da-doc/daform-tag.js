/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('daformTag', {
        templateUrl: 'da-doc/daform-tag.html',
        controller: function (AppService) {
            $ctrl = this;
            $ctrl.expenses = [];

            $ctrl.facultate;
            $ctrl.departament;
            $ctrl.nrInreg;
            $ctrl.nrInregDGA;


            $ctrl.sumaB;
            $ctrl.sumaBAC;

            // $ctrl.sumaVP;
            $ctrl.sumaVPAC;

            $ctrl.DIFN;
            // $ctrl.sumaDIFN;
            // $ctrl.sumaDIFNAC;
            $ctrl.DIFI;
            // $ctrl.sumaDIFI;
            // $ctrl.sumaDIFIAC;
            $ctrl.DICTA;
            // $ctrl.sumaDICTA;
            // $ctrl.sumaDICTAAC;
            $ctrl.sumaCT;
            $ctrl.sumaCTAC;
            $ctrl.sponsor;
            // $ctrl.sumaS;
            // $ctrl.sumaSAC;

            $ctrl.DIFS;
            // $ctrl.sumaDIFS;
            // $ctrl.sumaDIFSAC;

            $ctrl.DIFE;
            // $ctrl.sumaDIFE;
            // $ctrl.sumaDIFEAC;

            $ctrl.DITA;
            // $ctrl.sumaDITA;
            // $ctrl.sumaDITAAC;

            $ctrl.sumaT;
            //-- $ctrl.sumaNumerar;

            $ctrl.numeSolicitant;
            $ctrl.emailSolicitant;
            $ctrl.telSolicitant;


            $ctrl.numeGestionar;
            $ctrl.emailGestionar;
            $ctrl.telGestionar;

            $ctrl.getSumaCercetareSolicitata = function () {
                var suma = 0;
                if($ctrl.sumaDIFN != undefined)
                    suma += $ctrl.sumaDIFN;
                if($ctrl.sumaDIFI != undefined)
                    suma += $ctrl.sumaDIFI;
                if($ctrl.sumaDICTA != undefined)
                    suma += $ctrl.sumaDICTA;
                return suma;
            };

            $ctrl.getSumaCercetareAprobata = function () {
                var suma = 0;
                if($ctrl.sumaDIFNAC != undefined)
                    suma += $ctrl.sumaDIFNAC;
                if($ctrl.sumaDIFIAC != undefined)
                    suma += $ctrl.sumaDIFIAC;
                if($ctrl.sumaDICTAAC != undefined)
                    suma += $ctrl.sumaDICTAAC;
                return suma;
            };

            $ctrl.getSumaCercetare = function () {
                return ($ctrl.getSumaCercetareSolicitata() + $ctrl.getSumaCercetareAprobata());
            };


            $ctrl.getSumaAlteleSolicitata = function () {
                var suma = 0;
                if($ctrl.sumaDIFS != undefined)
                    suma += $ctrl.sumaDIFS;
                if($ctrl.sumaDIFE != undefined)
                    suma += $ctrl.sumaDIFE;
                if($ctrl.sumaDITA != undefined)
                    suma += $ctrl.sumaDITA;
                return suma;
            };

            $ctrl.getSumaAlteleAprobata = function () {
                var suma = 0;
                if($ctrl.sumaDIFSAC != undefined)
                    suma += $ctrl.sumaDIFSAC;
                if($ctrl.sumaDIFEAC != undefined)
                    suma += $ctrl.sumaDIFEAC;
                if($ctrl.sumaDITAAC != undefined)
                    suma += $ctrl.sumaDITAAC;
                return suma;
            };

            $ctrl.getSumaAltele = function () {
                return ($ctrl.getSumaAlteleSolicitata() + $ctrl.getSumaAlteleAprobata());
            };



            $ctrl.getSumaTotalaSolicitata = function () {
                var suma = 0;
                if($ctrl.sumaS != undefined)
                suma += $ctrl.sumaS;
                if($ctrl.sumaVP != undefined)
                    suma += $ctrl.sumaVP;
                return ($ctrl.getSumaCercetareSolicitata() + suma);
            };

            $ctrl.getSumaTotalaAprobata = function () {
                var suma = 0;
                if($ctrl.sumaSAC != undefined)
                    suma += $ctrl.sumaSAC;
                if($ctrl.sumaVPAC != undefined)
                    suma += $ctrl.sumaVPAC;
                return ($ctrl.getSumaCercetareAprobata() + $ctrl.getSumaAlteleAprobata() + suma);
            };

            $ctrl.addReccord = function () {
                $ctrl.expenses.push({
                    nrCrt: $ctrl.expenses.length + 1,
                    artName: $ctrl.newRprodName,
                    UM: $ctrl.newRUM,
                    CPV: $ctrl.newRCPV,
                    cant: $ctrl.newRC,
                    PU: $ctrl.newRPU
                });
            };

            $ctrl.submitForm = function () {

            };

        }
    });