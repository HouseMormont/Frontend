/**
 * Created by Lucian Bredean on 1/3/2017.
 */
angular.module('EasyDocsUBBApp')
    .component('drformTag', {
        templateUrl: 'dr-doc/drform-tag.html',
        controller: function (AppService) {
            var $ctrl = this;

            $ctrl.initialFormData = AppService.getInitialFormData("DR");
            $ctrl.functie = $ctrl.initialFormData.functie;
            $ctrl.facultate = $ctrl.initialFormData.facultate;
            $ctrl.destinatie = $ctrl.initialFormData.destinatie;
            $ctrl.ruta = $ctrl.initialFormData.ruta;
            $ctrl.dataStart = $ctrl.initialFormData.dataInceputEveniment;
            $ctrl.dataFinal = $ctrl.initialFormData.dataFinalEveniment;
            $ctrl.dataPlecare = $ctrl.initialFormData.dataPlecare;
            $ctrl.dataPlecare = $ctrl.initialFormData.dataSosire;

            $ctrl.autoT = $ctrl.initialFormData.mijlocTransport.auto;
            $ctrl.autoTP = $ctrl.initialFormData.mijlocTransport.autoPersonal;
            $ctrl.autoTUBB = $ctrl.initialFormData.mijlocTransport.autoUBB;
            $ctrl.trenT = $ctrl.initialFormData.mijlocTransport.tren;
            $ctrl.avionT = $ctrl.initialFormData.mijlocTransport.avion;

            $ctrl.telefon = $ctrl.initialFormData.telefon;
            $ctrl.email = $ctrl.initialFormData.email;
            $ctrl.scopDeplasare = $ctrl.initialFormData.scopDeplasare;

            $ctrl.cheltSolicitantGen = $ctrl.initialFormData.suportCheltuieli.solicitant;
            $ctrl.cheltInstOrgGen = $ctrl.initialFormData.suportCheltuieli.institutie;
            $ctrl.cheltAlteleGen = $ctrl.initialFormData.suportCheltuieli.alteSurse;
            $ctrl.alteleGen = $ctrl.initialFormData.suportCheltuieli.altele;

            $ctrl.sumaATM = $ctrl.initialFormData.transpAvionTrenMicro.suma;
            $ctrl.ATMmoneda = $ctrl.initialFormData.transpAvionTrenMicro.moneda;
            $ctrl.finantareATM = $ctrl.initialFormData.transpAvionTrenMicro.finantare;

            $ctrl.sumaAP = $ctrl.initialFormData.transpAutoPers.suma;
            $ctrl.finantareAP = $ctrl.initialFormData.transpAutoPers.finantare;

            $ctrl.sumaA = $ctrl.initialFormData.transpAuto.suma;
            $ctrl.Amoneda = $ctrl.initialFormData.transpAuto.moneda;
            $ctrl.finantareA = $ctrl.initialFormData.transpAuto.finantare;

            $ctrl.sumaE = $ctrl.initialFormData.transpErasmusPlus.suma;
            $ctrl.cheltTranspEST = $ctrl.initialFormData.transpErasmusPlus.finantare.ST;
            $ctrl.cheltTranspETA = $ctrl.initialFormData.transpErasmusPlus.finantare.AT;
            $ctrl.cheltTranspEOM = $ctrl.initialFormData.transpErasmusPlus.finantare.OM;
            $ctrl.cheltTranspEC = $ctrl.initialFormData.transpErasmusPlus.finantare.C;
            $ctrl.cheltTranspEA = $ctrl.initialFormData.transpErasmusPlus.finantare.alteSurse;
            $ctrl.cheltTranspEAltele = $ctrl.initialFormData.transpErasmusPlus.finantare.altele;

            $ctrl.sumaTID = $ctrl.initialFormData.transpInternDest.suma;
            $ctrl.TIDmoneda = $ctrl.initialFormData.transpInternDest.moneda;
            $ctrl.finantareTID = $ctrl.initialFormData.transpInternDest.finantare;

            $ctrl.DDmoneda = $ctrl.initialFormData.diurna.moneda;
            $ctrl.diurnaCpz = $ctrl.initialFormData.diurna.cuantumpZ;
            $ctrl.diurnaNz = $ctrl.initialFormData.diurna.nrZ;
            $ctrl.diurnaFinantare = $ctrl.initialFormData.diurna.finantare;

            $ctrl.sumaES = $ctrl.initialFormData.subzisErasmusPlus.suma;
            $ctrl.cheltSEST = $ctrl.initialFormData.subzisErasmusPlus.finantare.ST;
            $ctrl.cheltSETA = $ctrl.initialFormData.subzisErasmusPlus.finantare.AT;
            $ctrl.cheltSEOM = $ctrl.initialFormData.subzisErasmusPlus.finantare.OM;
            $ctrl.cheltSEC = $ctrl.initialFormData.subzisErasmusPlus.finantare.C;
            $ctrl.cheltSEA = $ctrl.initialFormData.subzisErasmusPlus.finantare.alteSurse;
            $ctrl.cheltSEAltele = $ctrl.initialFormData.subzisErasmusPlus.finantare.altele;

            $ctrl.DBMmoneda = $ctrl.initialFormData.burseMob.moneda;
            $ctrl.bursaCL = $ctrl.initialFormData.burseMob.cuantumpL;
            $ctrl.bursaNrL = $ctrl.initialFormData.burseMob.nrL;
            $ctrl.bursaFinantare = $ctrl.initialFormData.burseMob.finantare;

            $ctrl.CDmoneda = $ctrl.initialFormData.cazareDest.moneda;
            $ctrl.cazareDestZi = $ctrl.initialFormData.cazareDest.cuantumpZ;
            $ctrl.cazareDestNrZile = $ctrl.initialFormData.cazareDest.nrZ;
            $ctrl.cazareDestFinantare = $ctrl.initialFormData.cazareDest.finantare;

            $ctrl.CCmoneda = $ctrl.initialFormData.cazareCalatorie.moneda;
            $ctrl.cazareCalatorieZi = $ctrl.initialFormData.cazareCalatorie.cuantumpZ;
            $ctrl.cazareCalatorieNrZile = $ctrl.initialFormData.cazareCalatorie.nrZ;
            $ctrl.cazareCalatorieFinantare = $ctrl.initialFormData.cazareCalatorie.finantare;

            $ctrl.TCDmoneda = $ctrl.initialFormData.taxeConferinta.moneda;
            $ctrl.sumaTConferinta = $ctrl.initialFormData.taxeConferinta.suma;
            $ctrl.finantareTConferinta = $ctrl.initialFormData.taxeConferinta.finantare;

            $ctrl.TVDmoneda = $ctrl.initialFormData.taxeViza.moneda;
            $ctrl.sumaTViza = $ctrl.initialFormData.taxeViza.suma;
            $ctrl.finantareTViza = $ctrl.initialFormData.taxeViza.finantare;

            $ctrl.TMDmoneda = $ctrl.initialFormData.taxeMembru.moneda;
            $ctrl.sumaTMembru = $ctrl.initialFormData.taxeMembru.suma;
            $ctrl.finantareTMembru = $ctrl.initialFormData.taxeMembru.finantare;

            $ctrl.TADmoneda = $ctrl.initialFormData.taxeAutostrada.moneda;
            $ctrl.sumaTAutostrada = $ctrl.initialFormData.taxeAutostrada.suma;
            $ctrl.finantareTAutostrada = $ctrl.initialFormData.taxeAutostrada.finantare;

            $ctrl.TPDmoneda = $ctrl.initialFormData.taxeParcare.moneda;
            $ctrl.sumaTParcare = $ctrl.initialFormData.taxeParcare.suma;
            $ctrl.finantareTParcare = $ctrl.initialFormData.taxeParcare.finantare;

            $ctrl.TVCDmoneda = $ctrl.initialFormData.taxeVaccin.moneda;
            $ctrl.sumaTVaccin = $ctrl.initialFormData.taxeVaccin.suma;
            $ctrl.finantareTVaccin = $ctrl.initialFormData.taxeVaccin.finantare;

            $ctrl.TACDmoneda = $ctrl.initialFormData.taxeCarti.moneda;
            $ctrl.sumaTAC = $ctrl.initialFormData.taxeCarti.suma;
            $ctrl.finantareTAC = $ctrl.initialFormData.taxeCarti.finantare;

            $ctrl.TAMDmoneda = $ctrl.initialFormData.asigMedicala.moneda;
            $ctrl.sumaTAM = $ctrl.initialFormData.asigMedicala.suma;
            $ctrl.finantareTAM = $ctrl.initialFormData.asigMedicala.finantare;

            $ctrl.sumaRONavans = $ctrl.initialFormData.avans.sumaRON;
            $ctrl.sumaEURavans = $ctrl.initialFormData.avans.sumaEUR;
            $ctrl.sumaUSDavans = $ctrl.initialFormData.avans.sumaUSD;

            $ctrl.titularCont = $ctrl.initialFormData.dateVirament.titularCont;
            $ctrl.CNP = $ctrl.initialFormData.dateVirament.CNP;
            $ctrl.domiciliuStabil = $ctrl.initialFormData.dateVirament.domiciliu;
            $ctrl.numeBanca = $ctrl.initialFormData.dateVirament.banca;
            $ctrl.IBAN = $ctrl.initialFormData.dateVirament.IBAN;

            $ctrl.handleForm = function () {
                AppService.setActiveTab(2);
                AppService.handleDRForm("D");
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
                console.log(dispozitiaRectorului);
                // AppService.createDRDoc(dispozitiaRectorului);
            }
        }
    });