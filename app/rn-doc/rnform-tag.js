/**
 * Created by Lucian Bredean on 1/9/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('rnformTag', {
        templateUrl: 'rn-doc/rnform-tag.html',
        controller: function (AppService) {
            $ctrl = this;

            $ctrl.$onChanges = function () {
                $ctrl.initialFormData = AppService.getInitialFormData("RN");

                $ctrl.facultateDA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.facultate : undefined;
                $ctrl.departament = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.departament : undefined;
                $ctrl.nrInreg = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.nrInreg : undefined;
                $ctrl.nrInregDGA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.nrInregDGA : undefined;
                $ctrl.sumaVP = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.venitProprSolicitat : undefined;
                $ctrl.sumaVPAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.venitProprAprobat : undefined;
                $ctrl.DIFN = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateFN : undefined;
                $ctrl.sumaDIFN = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFNSolicitat : undefined;
                $ctrl.sumaDIFNAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFNAprobat : undefined;
                $ctrl.DIFI = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateFI : undefined;
                $ctrl.sumaDIFI = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFISolicitat : undefined;
                $ctrl.sumaDIFIAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFIAprobat : undefined;
                $ctrl.DICTA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.DICTA : undefined;
                $ctrl.sumaDICTA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaCTASolicitat : undefined;
                $ctrl.sumaDICTAAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaCTAAprobat : undefined;
                $ctrl.sponsor = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.denSponsor : undefined;
                $ctrl.sumaS = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaSSolicitat : undefined;
                $ctrl.sumaSAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaSAprobat : undefined;
                $ctrl.DIFS = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateFS : undefined;
                $ctrl.sumaDIFS = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFSSolicitat : undefined;
                $ctrl.sumaDIFSAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFSAprobat : undefined;
                $ctrl.DIFE = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateFE : undefined;
                $ctrl.sumaDIFE = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFESolicitat : undefined;
                $ctrl.sumaDIFEAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaFEAprobat : undefined;
                $ctrl.DITA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateTA : undefined;
                $ctrl.sumaDITA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaTASolicitat : undefined;
                $ctrl.sumaDITAAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.sumaTAAprobat : undefined;
                $ctrl.expenses = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cheltuieli : [];
                $ctrl.numeSolicitant = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.numeSol : undefined;
                $ctrl.emailSolicitant = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.emailSol : undefined;
                $ctrl.telSolicitant = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.telSol : undefined;
                $ctrl.numeGestionar = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.numeG : undefined;
                $ctrl.emailGestionar = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.emailG : undefined;
                $ctrl.telGestionar = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.telG : undefined;
            };

            $ctrl.handleForm = function () {
                AppService.setActiveTab(2);
                AppService.handleDAForm("D");
                AppService.clearInitialFormData();
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
                if ($ctrl.expenses === undefined) {
                    $ctrl.expenses = [];
                }
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

                AppService.createDADoc(referatNecesitate);
            };

        }
    });