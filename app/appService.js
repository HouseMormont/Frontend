/**
 * Created by Lucian Bredean on 11/15/2016.
 */
angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular, $base64, $location) {
        // Restangular.setBaseUrl('http://172.30.117.30:8080');
        Restangular.setBaseUrl('http://localhost:8080');

        Restangular.setDefaultHttpFields({withCredentials: true});
        Restangular.setFullResponse(true);
        var service = this;
        var loggedInUser = {
            userName: undefined,
            userRole: undefined,
            isLoggedIn: false
        };
        var isSideBarActive = {active: false}; //sidebar active
        var isDRFormActive = {active: false};//Formular dispozitia rectorului activ
        var isDAFormActive = {active: false};//Formular dispozitia rectorului activ
        var activeTab = {index: 2};


        // /*DISPOZITIA RECTORULUI*/
        // var dispozitiaRectorului = {
        //     functie: undefined,
        //     facultate: undefined,
        //     destinatie: undefined,
        //     ruta: undefined,
        //     dataInceputEveniment: undefined,
        //     dataFinalEveniment: undefined,
        //     dataPlecare: undefined,
        //     dataSosire: undefined,
        //     mijlocTransport: {auto: false, autoPersonal: false, autoUBB: false, tren: false, avion: false},
        //     telefon: undefined,
        //     email: undefined,
        //     scopDeplasare: undefined,
        //     suportCheltuieli: {solicitant: false, institutie: false, alteSurse: false, altele: undefined},
        //     transpAvionTrenMicro: {suma: undefined, moneda: undefined, finantare: undefined},
        //     transpAutoPers: {suma: undefined, moneda: undefined, finantare: undefined},
        //     transpAuto: {suma: undefined, moneda: undefined, finantare: undefined},
        //     transpErasmusPlus: {
        //         suma: undefined,
        //         moneda: undefined,
        //         finantare: {ST: false, AT: false, OM: false, C: false, alteSurse: false, altele: undefined}
        //     },
        //     transpInternDest: {suma: undefined, moneda: undefined, finantare: undefined},
        //     diurna: {moneda: undefined, cuantumpZ: undefined, nrZ: undefined, finantare: undefined},
        //     subzisErasmusPlus: {
        //         suma: undefined,
        //         moneda: undefined,
        //         finantare: {ST: false, AT: false, OM: false, C: false, alteSurse: false, altele: undefined}
        //     },
        //     burseMob: {moneda: undefined, cuantumpL: undefined, nrL: undefined, finantare: undefined},
        //     cazareDest: {moneda: undefined, cuantumpZ: undefined, nrZ: undefined, finantare: undefined},
        //     cazareCalatorie: {moneda: undefined, cuantumpZ: undefined, nrZ: undefined, finantare: undefined},
        //     taxeConferinta: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeViza: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeMembru: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeAutostrada: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeParcare: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeVaccin: {moneda: undefined, suma: undefined, finantare: undefined},
        //     taxeCarti: {moneda: undefined, suma: undefined, finantare: undefined},
        //     asigMedicala: {moneda: undefined, suma: undefined, finantare: undefined},
        //     sumeTot: {sumaRON: undefined, sumaEUR: undefined, sumaUSD: undefined},
        //     avans: {sumaRON: undefined, sumaEUR: undefined, sumaUSD: undefined},
        //     dateVirament: {
        //         titularCont: undefined,
        //         CNP: undefined,
        //         domiciliu: undefined,
        //         banca: undefined,
        //         IBAN: undefined
        //     }
        // };

        service.isUserLoggedIn = function () {
            Restangular.one('/check_login').get()
                .then(function (response) {
                    console.log("test login:" + response);
                    if (response.status == 200) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
                .catch(function (response) {
                    console.log("test login error:" + response);
                    return false;
                });
            // return loggedInUser.isLoggedIn;
        };

        service.handleSideBar = function () {
            isSideBarActive.active = !(isSideBarActive.active);
        };

        service.getSideBarState = function () {
            return isSideBarActive.active;
        };

        service.handleDRForm = function (sender) {
            isDRFormActive.active = !(isDRFormActive.active);
            if (sender === "D" && isSideBarActive.active === true)
                service.handleSideBar();
        };

        service.handleDAForm = function (sender) {
            isDAFormActive.active = !(isDAFormActive.active);
            if (sender === "D" && isSideBarActive.active === true)
                service.handleSideBar();
        };

        service.getActiveTab = function () {
            return activeTab.index;
        };

        service.setActiveTab = function (index) {
            activeTab.index = index;
        };

        service.getDRFormState = function () {
            return isDRFormActive.active;
        };

        service.getDAFormState = function () {
            return isDAFormActive.active;
        };

        service.setLoggedInUserName = function (username) {
            loggedInUser.userName = username;
        };

        service.getLoggedInUserName = function () {
            return loggedInUser.userName;
        };

        service.setLoggedInUserRole = function (userrole) {
            loggedInUser.userRole = userrole;
        };

        service.getLoggedInUserRole = function () {
            return loggedInUser.userRole;
        };

        service.logoutUser = function () {
            alert("Logout called!");
            //TODO: Call logout to server
            loggedInUser.userName = undefined;
            loggedInUser.userRole = undefined;
            loggedInUser.isLoggedIn = false;
            $location.path("/");
        };

        service.loginRequest = function (u, p) {
            Restangular.one('/login').post(undefined, undefined, undefined, {Username: u, Password: p})
                .then(function (response) {
                    if (response.status == 200) {
                        loggedInUser.userName = u;
                        loggedInUser.userRole = response.data.Authorities[0];
                        loggedInUser.isLoggedIn = true;
                        $location.path("/main-layout");
                    }
                })
                .catch(function () {
                    $location.path("/");
                });
        };

        /*post(subElement, elementToPost, [queryParams, headers]):
         Does a POST and creates a subElement. Subelement is mandatory and is the nested resource. Element to post is the object to post to the server*/
        service.createDRDoc = function (document) {
            alert("Service DR!");
            console.log(document);
            service.handleDRForm();
            // // Restangular.one('/dispozitiaRectorului/create').post(undefined,{jsonDoc:document})
            // Restangular.one('').post('dispozitiaRectorului/create/',{jsonDoc:document})
            //     .then(function (response) {
            //         if (response.status == 200) {
            //
            //         }
            //     })
            //     .catch(function () {
            //     });
        };

        service.createDADoc = function (document) {
            alert("Service DA!");
            service.handleDAForm();
            console.log(document);
        };

    });