/**
 * Created by Lucian Bredean on 1/3/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('drformTag', {
        templateUrl: 'dr-doc/drform-tag.html',
        controller: function (AppService) {
            var $ctrl = this;

            $ctrl.$onChanges = function() {
                $ctrl.initialFormData = AppService.getInitialFormData("DR");
                $ctrl.functie = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.functie : undefined;
                $ctrl.facultate = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.facultate : undefined;
                $ctrl.destinatie = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.destinatie : undefined;
                $ctrl.ruta = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.ruta : undefined;
                $ctrl.dataStart = $ctrl.initialFormData != undefined ? new Date($ctrl.initialFormData.dataInceputEveniment) : undefined;
                $ctrl.dataFinal = $ctrl.initialFormData != undefined ? new Date($ctrl.initialFormData.dataFinalEveniment) : undefined;
                $ctrl.dataPlecare = $ctrl.initialFormData != undefined ? new Date($ctrl.initialFormData.dataPlecare) : undefined;
                $ctrl.dataPlecare = $ctrl.initialFormData != undefined ? new Date ($ctrl.initialFormData.dataSosire) : undefined;

                $ctrl.autoT = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.mijlocTransport.auto : undefined;
                $ctrl.autoTP = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.mijlocTransport.autoPersonal : undefined;
                $ctrl.autoTUBB = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.mijlocTransport.autoUBB : undefined;
                $ctrl.trenT = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.mijlocTransport.tren : undefined;
                $ctrl.avionT = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.mijlocTransport.avion : undefined;

                $ctrl.telefon = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.telefon : undefined;
                $ctrl.email = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.email : undefined;
                $ctrl.scopDeplasare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.scopDeplasare : undefined;

                $ctrl.cheltSolicitantGen = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.suportCheltuieli.solicitant : undefined;
                $ctrl.cheltInstOrgGen = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.suportCheltuieli.institutie : undefined;
                $ctrl.cheltAlteleGen = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.suportCheltuieli.alteSurse : undefined;
                $ctrl.alteleGen = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.suportCheltuieli.altele : undefined;

                $ctrl.sumaATM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAvionTrenMicro.suma : undefined;
                $ctrl.ATMmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAvionTrenMicro.moneda : undefined;
                $ctrl.finantareATM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAvionTrenMicro.finantare : undefined;

                $ctrl.sumaAP = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAutoPers.suma : undefined;
                $ctrl.finantareAP = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAutoPers.finantare : undefined;

                $ctrl.sumaA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAuto.suma : undefined;
                $ctrl.Amoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAuto.moneda : undefined;
                $ctrl.finantareA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpAuto.finantare : undefined;

                $ctrl.sumaE = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.suma : undefined;
                $ctrl.cheltTranspEST = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.ST : undefined;
                $ctrl.cheltTranspETA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.AT : undefined;
                $ctrl.cheltTranspEOM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.OM : undefined;
                $ctrl.cheltTranspEC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.C : undefined;
                $ctrl.cheltTranspEA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.alteSurse : undefined;
                $ctrl.cheltTranspEAltele = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpErasmusPlus.finantare.altele : undefined;

                $ctrl.sumaTID = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpInternDest.suma : undefined;
                $ctrl.TIDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpInternDest.moneda : undefined;
                $ctrl.finantareTID = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.transpInternDest.finantare : undefined;

                $ctrl.DDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.diurna.moneda : undefined;
                $ctrl.diurnaCpz = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.diurna.cuantumpZ : undefined;
                $ctrl.diurnaNz = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.diurna.nrZ : undefined;
                $ctrl.diurnaFinantare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.diurna.finantare : undefined;

                $ctrl.sumaES = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.suma : undefined;
                $ctrl.cheltSEST = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.ST : undefined;
                $ctrl.cheltSETA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.AT : undefined;
                $ctrl.cheltSEOM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.OM : undefined;
                $ctrl.cheltSEC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.C : undefined;
                $ctrl.cheltSEA = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.alteSurse : undefined;
                $ctrl.cheltSEAltele = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.subzisErasmusPlus.finantare.altele : undefined;

                $ctrl.DBMmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.burseMob.moneda : undefined;
                $ctrl.bursaCL = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.burseMob.cuantumpL : undefined;
                $ctrl.bursaNrL = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.burseMob.nrL : undefined;
                $ctrl.bursaFinantare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.burseMob.finantare : undefined;

                $ctrl.CDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareDest.moneda : undefined;
                $ctrl.cazareDestZi = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareDest.cuantumpZ : undefined;
                $ctrl.cazareDestNrZile = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareDest.nrZ : undefined;
                $ctrl.cazareDestFinantare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareDest.finantare : undefined;

                $ctrl.CCmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareCalatorie.moneda : undefined;
                $ctrl.cazareCalatorieZi = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareCalatorie.cuantumpZ : undefined;
                $ctrl.cazareCalatorieNrZile = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareCalatorie.nrZ : undefined;
                $ctrl.cazareCalatorieFinantare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.cazareCalatorie.finantare : undefined;

                $ctrl.TCDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeConferinta.moneda : undefined;
                $ctrl.sumaTConferinta = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeConferinta.suma : undefined;
                $ctrl.finantareTConferinta = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeConferinta.finantare : undefined;

                $ctrl.TVDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeViza.moneda : undefined;
                $ctrl.sumaTViza = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeViza.suma : undefined;
                $ctrl.finantareTViza = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeViza.finantare : undefined;

                $ctrl.TMDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeMembru.moneda : undefined;
                $ctrl.sumaTMembru = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeMembru.suma : undefined;
                $ctrl.finantareTMembru = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeMembru.finantare : undefined;

                $ctrl.TADmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeAutostrada.moneda : undefined;
                $ctrl.sumaTAutostrada = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeAutostrada.suma : undefined;
                $ctrl.finantareTAutostrada = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeAutostrada.finantare : undefined;

                $ctrl.TPDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeParcare.moneda : undefined;
                $ctrl.sumaTParcare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeParcare.suma : undefined;
                $ctrl.finantareTParcare = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeParcare.finantare : undefined;

                $ctrl.TVCDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeVaccin.moneda : undefined;
                $ctrl.sumaTVaccin = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeVaccin.suma : undefined;
                $ctrl.finantareTVaccin = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeVaccin.finantare : undefined;

                $ctrl.TACDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeCarti.moneda : undefined;
                $ctrl.sumaTAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeCarti.suma : undefined;
                $ctrl.finantareTAC = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.taxeCarti.finantare : undefined;

                $ctrl.TAMDmoneda = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.asigMedicala.moneda : undefined;
                $ctrl.sumaTAM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.asigMedicala.suma : undefined;
                $ctrl.finantareTAM = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.asigMedicala.finantare : undefined;

                $ctrl.sumaRONavans = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.avans.sumaRON : undefined;
                $ctrl.sumaEURavans = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.avans.sumaEUR : undefined;
                $ctrl.sumaUSDavans = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.avans.sumaUSD : undefined;

                $ctrl.titularCont = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateVirament.titularCont : undefined;
                $ctrl.CNP = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateVirament.CNP : undefined;
                $ctrl.domiciliuStabil = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateVirament.domiciliu : undefined;
                $ctrl.numeBanca = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateVirament.banca : undefined;
                $ctrl.IBAN = $ctrl.initialFormData != undefined ? $ctrl.initialFormData.dateVirament.IBAN : undefined;
                console.log("On changes");
            };

            $ctrl.handleForm = function () {
                AppService.setActiveTab(2);
                AppService.handleDRForm("D");
                AppService.clearInitialFormData();
            };

            $ctrl.getEURSum = function () {
                var sumEUR = 0;
                if ($ctrl.sumaES != undefined)
                    sumEUR += $ctrl.sumaES;
                if ($ctrl.sumaE != undefined)
                    sumEUR += $ctrl.sumaE;
                if ($ctrl.ATMmoneda === "EUR" && $ctrl.sumaATM != undefined)
                    sumEUR += $ctrl.sumaATM;
                if ($ctrl.Amoneda === "EUR" && $ctrl.sumaA != undefined)
                    sumEUR += $ctrl.sumaA;
                if ($ctrl.TIDmoneda === "EUR" && $ctrl.sumaTID != undefined)
                    sumEUR += $ctrl.sumaTID;
                if ($ctrl.DDmoneda === "EUR" && $ctrl.diurnaCpz != undefined && $ctrl.diurnaNz != undefined)
                    sumEUR += $ctrl.diurnaCpz * $ctrl.diurnaNz;
                if ($ctrl.DBMmoneda === "EUR" && $ctrl.bursaCL != undefined && $ctrl.bursaNrL != undefined)
                    sumEUR += $ctrl.bursaCL * $ctrl.bursaNrL;
                if ($ctrl.CDmoneda === "EUR" && $ctrl.cazareDestZi != undefined && $ctrl.cazareDestNrZile != undefined)
                    sumEUR += $ctrl.cazareDestZi * $ctrl.cazareDestNrZile;
                if ($ctrl.CCmoneda === "EUR" && $ctrl.cazareCalatorieZi != undefined && $ctrl.cazareCalatorieNrZile != undefined)
                    sumEUR += $ctrl.cazareCalatorieZi * $ctrl.cazareCalatorieNrZile;
                if ($ctrl.TCDmoneda === "EUR" && $ctrl.sumaTConferinta != undefined)
                    sumEUR += $ctrl.sumaTConferinta;
                if ($ctrl.TVDmoneda === "EUR" && $ctrl.sumaTViza != undefined)
                    sumEUR += $ctrl.sumaTViza;
                if ($ctrl.TMDmoneda === "EUR" && $ctrl.sumaTMembru != undefined)
                    sumEUR += $ctrl.sumaTMembru;
                if ($ctrl.TADmoneda === "EUR" && $ctrl.sumaTAutostrada != undefined)
                    sumEUR += $ctrl.sumaTAutostrada;
                if ($ctrl.TPDmoneda === "EUR" && $ctrl.sumaTParcare != undefined)
                    sumEUR += $ctrl.sumaTParcare;
                if ($ctrl.TVCDmoneda === "EUR" && $ctrl.sumaTVaccin != undefined)
                    sumEUR += $ctrl.sumaTVaccin;
                if ($ctrl.TACDmoneda === "EUR" && $ctrl.sumaTAC != undefined)
                    sumEUR += $ctrl.sumaTAC;
                if ($ctrl.TAMDmoneda === "EUR" && $ctrl.sumaTAM != undefined)
                    sumEUR += $ctrl.sumaTAM;
                return sumEUR;
            };

            $ctrl.getUSDSum = function () {
                var sumUSD = 0;
                if ($ctrl.ATMmoneda === "USD" && $ctrl.sumaATM != undefined)
                    sumUSD += $ctrl.sumaATM;
                if ($ctrl.Amoneda === "USD" && $ctrl.sumaA != undefined)
                    sumUSD += $ctrl.sumaA;
                if ($ctrl.TIDmoneda === "USD" && $ctrl.sumaTID != undefined)
                    sumUSD += $ctrl.sumaTID;
                if ($ctrl.DDmoneda === "USD" && $ctrl.diurnaCpz != undefined && $ctrl.diurnaNz != undefined)
                    sumUSD += $ctrl.diurnaCpz * $ctrl.diurnaNz;
                if ($ctrl.DBMmoneda === "USD" && $ctrl.bursaCL != undefined && $ctrl.bursaNrL != undefined)
                    sumUSD += $ctrl.bursaCL * $ctrl.bursaNrL;
                if ($ctrl.CDmoneda === "USD" && $ctrl.cazareDestZi != undefined && $ctrl.cazareDestNrZile != undefined)
                    sumUSD += $ctrl.cazareDestZi * $ctrl.cazareDestNrZile;
                if ($ctrl.CCmoneda === "USD" && $ctrl.cazareCalatorieZi != undefined && $ctrl.cazareCalatorieNrZile != undefined)
                    sumUSD += $ctrl.cazareCalatorieZi * $ctrl.cazareCalatorieNrZile;
                if ($ctrl.TCDmoneda === "USD" && $ctrl.sumaTConferinta != undefined)
                    sumUSD += $ctrl.sumaTConferinta;
                if ($ctrl.TVDmoneda === "USD" && $ctrl.sumaTViza != undefined)
                    sumUSD += $ctrl.sumaTViza;
                if ($ctrl.TMDmoneda === "USD" && $ctrl.sumaTMembru != undefined)
                    sumUSD += $ctrl.sumaTMembru;
                if ($ctrl.TADmoneda === "USD" && $ctrl.sumaTAutostrada != undefined)
                    sumUSD += $ctrl.sumaTAutostrada;
                if ($ctrl.TPDmoneda === "USD" && $ctrl.sumaTParcare != undefined)
                    sumUSD += $ctrl.sumaTParcare;
                if ($ctrl.TVCDmoneda === "USD" && $ctrl.sumaTVaccin != undefined)
                    sumUSD += $ctrl.sumaTVaccin;
                if ($ctrl.TACDmoneda === "USD" && $ctrl.sumaTAC != undefined)
                    sumUSD += $ctrl.sumaTAC;
                if ($ctrl.TAMDmoneda === "USD" && $ctrl.sumaTAM != undefined)
                    sumUSD += $ctrl.sumaTAM;
                return sumUSD;
            };

            $ctrl.getRONSum = function () {
                var sumRON = 0;
                if ($ctrl.sumaAP != undefined)
                    sumRON += $ctrl.sumaAP;
                if ($ctrl.ATMmoneda === "RON" && $ctrl.sumaATM != undefined)
                    sumRON += $ctrl.sumaATM;
                if ($ctrl.Amoneda === "RON" && $ctrl.sumaA != undefined)
                    sumRON += $ctrl.sumaA;
                if ($ctrl.TIDmoneda === "RON" && $ctrl.sumaTID != undefined)
                    sumRON += $ctrl.sumaTID;
                if ($ctrl.DDmoneda === "RON" && $ctrl.diurnaCpz != undefined && $ctrl.diurnaNz != undefined)
                    sumRON += $ctrl.diurnaCpz * $ctrl.diurnaNz;
                if ($ctrl.DBMmoneda === "RON" && $ctrl.bursaCL != undefined && $ctrl.bursaNrL != undefined)
                    sumRON += $ctrl.bursaCL * $ctrl.bursaNrL;
                if ($ctrl.CDmoneda === "RON" && $ctrl.cazareDestZi != undefined && $ctrl.cazareDestNrZile != undefined)
                    sumRON += $ctrl.cazareDestZi * $ctrl.cazareDestNrZile;
                if ($ctrl.CCmoneda === "RON" && $ctrl.cazareCalatorieZi != undefined && $ctrl.cazareCalatorieNrZile != undefined)
                    sumRON += $ctrl.cazareCalatorieZi * $ctrl.cazareCalatorieNrZile;
                if ($ctrl.TCDmoneda === "RON" && $ctrl.sumaTConferinta != undefined)
                    sumRON += $ctrl.sumaTConferinta;
                if ($ctrl.TVDmoneda === "RON" && $ctrl.sumaTViza != undefined)
                    sumRON += $ctrl.sumaTViza;
                if ($ctrl.TMDmoneda === "RON" && $ctrl.sumaTMembru != undefined)
                    sumRON += $ctrl.sumaTMembru;
                if ($ctrl.TADmoneda === "RON" && $ctrl.sumaTAutostrada != undefined)
                    sumRON += $ctrl.sumaTAutostrada;
                if ($ctrl.TPDmoneda === "RON" && $ctrl.sumaTParcare != undefined)
                    sumRON += $ctrl.sumaTParcare;
                if ($ctrl.TVCDmoneda === "RON" && $ctrl.sumaTVaccin != undefined)
                    sumRON += $ctrl.sumaTVaccin;
                if ($ctrl.TACDmoneda === "RON" && $ctrl.sumaTAC != undefined)
                    sumRON += $ctrl.sumaTAC;
                if ($ctrl.TAMDmoneda === "RON" && $ctrl.sumaTAM != undefined)
                    sumRON += $ctrl.sumaTAM;
                return sumRON;
            };

            $ctrl.submitForm = function () {
                var dispozitiaRectorului = {
                    functie: $ctrl.functie,
                    facultate: $ctrl.facultate,
                    destinatie: $ctrl.destinatie,
                    ruta: $ctrl.ruta,
                    dataInceputEveniment: $ctrl.dataStart,
                    dataFinalEveniment: $ctrl.dataFinal,
                    dataPlecare: $ctrl.dataPlecare,
                    dataSosire: $ctrl.dataSosire,
                    mijlocTransport: {
                        auto: $ctrl.autoT,
                        autoPersonal: $ctrl.autoTP,
                        autoUBB: $ctrl.autoTUBB,
                        tren: $ctrl.trenT,
                        avion: $ctrl.avionT
                    },
                    telefon: $ctrl.telefon,
                    email: $ctrl.email,
                    scopDeplasare: $ctrl.scopDeplasare,
                    suportCheltuieli: {
                        solicitant: $ctrl.cheltSolicitantGen,
                        institutie: $ctrl.cheltInstOrgGen,
                        alteSurse: $ctrl.cheltAlteleGen,
                        altele: $ctrl.alteleGen
                    },
                    transpAvionTrenMicro: {suma: $ctrl.sumaATM, moneda: $ctrl.ATMmoneda, finantare: $ctrl.finantareATM},
                    transpAutoPers: {suma: $ctrl.sumaAP, moneda: "RON", finantare: $ctrl.finantareAP},
                    transpAuto: {suma: $ctrl.sumaA, moneda: $ctrl.Amoneda, finantare: $ctrl.finantareA},
                    transpErasmusPlus: {
                        suma: $ctrl.sumaE,
                        moneda: "EUR",
                        finantare: {
                            ST: $ctrl.cheltTranspEST,
                            AT: $ctrl.cheltTranspETA,
                            OM: $ctrl.cheltTranspEOM,
                            C: $ctrl.cheltTranspEC,
                            alteSurse: $ctrl.cheltTranspEA,
                            altele: $ctrl.cheltTranspEAltele
                        }
                    },
                    transpInternDest: {suma: $ctrl.sumaTID, moneda: $ctrl.TIDmoneda, finantare: $ctrl.finantareTID},
                    diurna: {
                        moneda: $ctrl.DDmoneda,
                        cuantumpZ: $ctrl.diurnaCpz,
                        nrZ: $ctrl.diurnaNz,
                        finantare: $ctrl.diurnaFinantare
                    },
                    subzisErasmusPlus: {
                        suma: $ctrl.sumaES,
                        moneda: "EUR",
                        finantare: {
                            ST: $ctrl.cheltSEST,
                            AT: $ctrl.cheltSETA,
                            OM: $ctrl.cheltSEOM,
                            C: $ctrl.cheltSEC,
                            alteSurse: $ctrl.cheltSEA,
                            altele: $ctrl.cheltSEAltele
                        }
                    },
                    burseMob: {
                        moneda: $ctrl.DBMmoneda,
                        cuantumpL: $ctrl.bursaCL,
                        nrL: $ctrl.bursaNrL,
                        finantare: $ctrl.bursaFinantare
                    },
                    cazareDest: {
                        moneda: $ctrl.CDmoneda,
                        cuantumpZ: $ctrl.cazareDestZi,
                        nrZ: $ctrl.cazareDestNrZile,
                        finantare: $ctrl.cazareDestFinantare
                    },
                    cazareCalatorie: {
                        moneda: $ctrl.CCmoneda,
                        cuantumpZ: $ctrl.cazareCalatorieZi,
                        nrZ: $ctrl.cazareCalatorieNrZile,
                        finantare: $ctrl.cazareCalatorieFinantare
                    },
                    taxeConferinta: {
                        moneda: $ctrl.TCDmoneda,
                        suma: $ctrl.sumaTConferinta,
                        finantare: $ctrl.finantareTConferinta
                    },
                    taxeViza: {moneda: $ctrl.TVDmoneda, suma: $ctrl.sumaTViza, finantare: $ctrl.finantareTViza},
                    taxeMembru: {moneda: $ctrl.TMDmoneda, suma: $ctrl.sumaTMembru, finantare: $ctrl.finantareTMembru},
                    taxeAutostrada: {
                        moneda: $ctrl.TADmoneda,
                        suma: $ctrl.sumaTAutostrada,
                        finantare: $ctrl.finantareTAutostrada
                    },
                    taxeParcare: {
                        moneda: $ctrl.TPDmoneda,
                        suma: $ctrl.sumaTParcare,
                        finantare: $ctrl.finantareTParcare
                    },
                    taxeVaccin: {moneda: $ctrl.TVCDmoneda, suma: $ctrl.sumaTVaccin, finantare: $ctrl.finantareTVaccin},
                    taxeCarti: {moneda: $ctrl.TACDmoneda, suma: $ctrl.sumaTAC, finantare: $ctrl.finantareTAC},
                    asigMedicala: {moneda: $ctrl.TAMDmoneda, suma: $ctrl.sumaTAM, finantare: $ctrl.finantareTAM},
                    sumeTot: {sumaRON: $ctrl.getRONSum(), sumaEUR: $ctrl.getEURSum(), sumaUSD: $ctrl.getUSDSum()},
                    avans: {sumaRON: $ctrl.sumaRONavans, sumaEUR: $ctrl.sumaEURavans, sumaUSD: $ctrl.sumaUSDavans},
                    dateVirament: {
                        titularCont: $ctrl.titularCont,
                        CNP: $ctrl.CNP,
                        domiciliu: $ctrl.domiciliuStabil,
                        banca: $ctrl.numeBanca,
                        IBAN: $ctrl.IBAN
                    }
                };
                AppService.createDRDoc(dispozitiaRectorului);
            }
        }
    });