/**
 * Created by Lucian Bredean on 1/3/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('drformTag', {
        templateUrl: 'dr-doc/drform-tag.html',
        controller: function (AppService) {
            $ctrl = this;

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
                // console.log("Suma EURO:", sumEUR);
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
                // console.log("Suma USD:", sumUSD);
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
                // console.log("Suma RON:", sumRON);
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