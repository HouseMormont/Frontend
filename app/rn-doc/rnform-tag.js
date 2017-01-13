/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('rnformTag', {
        templateUrl: 'rn-doc/rnform-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.expenses = [];

            // $ctrl.sumaCT;
            // $ctrl.sumaCTAC;

            // $ctrl.sumaT;

            $ctrl.handleForm = function () {
                AppService.setActiveTab(2);
                AppService.handleDAForm("D");
            };

            $ctrl.getSumaCercetareSolicitata = function () {
                var suma = 0;
                if ($ctrl.sumaDIFN != undefined)
                    suma += $ctrl.sumaDIFN;
                if ($ctrl.sumaDIFI != undefined)
                    suma += $ctrl.sumaDIFI;
                if ($ctrl.sumaDICTA != undefined)
                    suma += $ctrl.sumaDICTA;
                return suma;
            };

            $ctrl.getSumaCercetareAprobata = function () {
                var suma = 0;
                if ($ctrl.sumaDIFNAC != undefined)
                    suma += $ctrl.sumaDIFNAC;
                if ($ctrl.sumaDIFIAC != undefined)
                    suma += $ctrl.sumaDIFIAC;
                if ($ctrl.sumaDICTAAC != undefined)
                    suma += $ctrl.sumaDICTAAC;
                return suma;
            };

            $ctrl.getSumaCercetare = function () {
                return (ctrl.getSumaCercetareSolicitata() + $ctrl.getSumaCercetareAprobata());
            };


            $ctrl.getSumaAlteleSolicitata = function () {
                var suma = 0;
                if ($ctrl.sumaDIFS != undefined)
                    suma += $ctrl.sumaDIFS;
                if ($ctrl.sumaDIFE != undefined)
                    suma += $ctrl.sumaDIFE;
                if ($ctrl.sumaDITA != undefined)
                    suma += $ctrl.sumaDITA;
                return suma;
            };

            $ctrl.getSumaAlteleAprobata = function () {
                var suma = 0;
                if ($ctrl.sumaDIFSAC != undefined)
                    suma += $ctrl.sumaDIFSAC;
                if ($ctrl.sumaDIFEAC != undefined)
                    suma += $ctrl.sumaDIFEAC;
                if ($ctrl.sumaDITAAC != undefined)
                    suma += $ctrl.sumaDITAAC;
                return suma;
            };

            $ctrl.getSumaAltele = function () {
                return ($ctrl.getSumaAlteleSolicitata() + $ctrl.getSumaAlteleAprobata());
            };


            $ctrl.getSumaTotalaSolicitata = function () {
                var suma = 0;
                if ($ctrl.sumaS != undefined)
                    suma += $ctrl.sumaS;
                if ($ctrl.sumaVP != undefined)
                    suma += $ctrl.sumaVP;
                return ($ctrl.getSumaCercetareSolicitata() + $ctrl.getSumaAlteleSolicitata() + suma);
            };

            $ctrl.getSumaTotalaAprobata = function () {
                var suma = 0;
                if ($ctrl.sumaSAC != undefined)
                    suma += $ctrl.sumaSAC;
                if ($ctrl.sumaVPAC != undefined)
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
                var referatNecesitate = {
                    facultate: $ctrl.facultateDA,
                    departament: $ctrl.departament,
                    nrInreg: $ctrl.nrInreg,
                    nrInregDGA: $ctrl.nrInregDGA,
                    buget: $ctrl.getSumaTotalaSolicitata(),
                    bugetAprobat: $ctrl.getSumaTotalaAprobata(),
                    venitProprSolicitat: $ctrl.sumaVP,
                    venitProprAprobat: $ctrl.sumaVPAC,
                    dateFN: $ctrl.DIFN,
                    sumaFNSolicitat: $ctrl.sumaDIFN,
                    sumaFNAprobat: $ctrl.sumaDIFNAC,
                    dateFI: $ctrl.DIFI,
                    sumaFISolicitat: $ctrl.sumaDIFI,
                    sumaFIAprobat: $ctrl.sumaDIFIAC,
                    dateCTA: $ctrl.DICTA,
                    sumaCTASolicitat: $ctrl.sumaDICTA,
                    sumaCTAAprobat: $ctrl.sumaDICTAAC,


                    denSponsor: $ctrl.sponsor,
                    sumaSSolicitat: $ctrl.sumaS,
                    sumaSAprobat: $ctrl.sumaSAC,
                    dateFS: $ctrl.DIFS,
                    sumaFSSolicitat: $ctrl.sumaDIFS,
                    sumaFSAprobat: $ctrl.sumaDIFSAC,
                    dateFE: $ctrl.DIFE,
                    sumaFESolicitat: $ctrl.sumaDIFE,
                    sumaFEAprobat: $ctrl.sumaDIFEAC,
                    dateTA: $ctrl.DITA,
                    sumaTASolicitat: $ctrl.sumaDITA,
                    sumaTAAprobat: $ctrl.sumaDITAAC,


                    cheltuieli: $ctrl.expenses,


                    numeSol: $ctrl.numeSolicitant,
                    emailSol: $ctrl.emailSolicitant,
                    telSol: $ctrl.telSolicitant,
                    numeG: $ctrl.numeGestionar,
                    emailG: $ctrl.emailGestionar,
                    telG: $ctrl.telGestionar
                };

                AppService.setActiveTab(2);
                AppService.createDADoc(referatNecesitate);
            };

        }
    });