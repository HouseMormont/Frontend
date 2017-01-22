/**
 * Created by Lucian Bredean on 11/15/2016.
 */
angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular, $base64, $location, $templateCache) {
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
        var myDocs = {userDocs: undefined};
        var docToEdit = {doc: undefined, docType: undefined, verDoc: undefined, idDoc: undefined};

        service.getAllDocs = function () {
            return (Restangular.one('').post('getAllDocuments')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function (response) {
                    return false;
                })).then(function (result) {
                myDocs.userDocs = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.isUserLoggedIn = function () {
            return Restangular.one('/check_login').get()
                .then(function (response) {
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
            // alert("Logout called!");
            Restangular.one('/invalidate').post('')
                .then(function (response) {
                    if (response.status == 200) {
                        loggedInUser.userName = undefined;
                        loggedInUser.userRole = undefined;
                        loggedInUser.isLoggedIn = false;
                        $templateCache.removeAll();
                        $location.path("/");
                    }
                })
                .catch(function () {
                    // $location.path("/");
                });
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
            service.handleDRForm();
            if (docToEdit.docType === "DR") {
                Restangular.one('').post('dispozitiaRectorului/save/', {
                    jsonDoc: document,
                    idDoc: docToEdit.idDoc,
                    versionDoc: docToEdit.verDoc
                })
                    .then(function (response) {
                        if (response.status == 200) {
                            var docItemsPromise = service.getAllDocs();
                            docItemsPromise.then(
                                function (response) {
                                    service.clearInitialFormData();
                                    myDocs.userDocs = response;
                                    service.setActiveTab(2);
                                }
                            );
                        }
                    })
                    .catch(function () {
                    });
            }
            else {
                Restangular.one('').post('dispozitiaRectorului/create/', {jsonDoc: document})
                    .then(function (response) {
                        if (response.status == 200) {
                            var docItemsPromise = service.getAllDocs();
                            docItemsPromise.then(
                                function (response) {
                                    service.clearInitialFormData();
                                    myDocs.userDocs = response;
                                    service.setActiveTab(2);
                                }
                            );
                        }
                    })
                    .catch(function () {
                    });
            }
        };

        service.getMyDocs = function () {
            return myDocs.userDocs;
        };

        service.createDADoc = function (document) {
            service.handleDAForm();
            if (docToEdit.docType === "RN") {
                Restangular.one('').post('referatNecesitate/save/', {
                    jsonDoc: document,
                    idDoc: docToEdit.idDoc,
                    versionDoc: docToEdit.verDoc
                })
                    .then(function (response) {
                        if (response.status == 200) {
                            var docItemsPromise = service.getAllDocs();
                            docItemsPromise.then(
                                function (response) {
                                    service.clearInitialFormData();
                                    myDocs.userDocs = response;
                                    service.setActiveTab(2);
                                }
                            );
                        }
                    })
                    .catch(function () {
                    });
            }
            else {
                Restangular.one('').post('referatNecesitate/create/', {jsonDoc: document})
                    .then(function (response) {
                        if (response.status == 200) {
                            var docItemsPromise = service.getAllDocs();
                            docItemsPromise.then(
                                function (response) {
                                    myDocs.userDocs = response;
                                    service.clearInitialFormData();
                                    service.setActiveTab(2);
                                }
                            );
                        }
                    })
                    .catch(function () {
                    });
            }
        };

        service.makeFinal = function (document) {
            Restangular.one('').post('finalizare', document)
                .then(function (response) {
                    if (response.status == 200) {
                        var docItemsPromise = service.getAllDocs();
                        service.setActiveTab(-1);
                        docItemsPromise.then(
                            function (response) {
                                myDocs.userDocs = response;
                                service.setActiveTab(2);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.delete = function (document) {
            Restangular.one('').post('delete', document)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getAllDocs();
                        docItemsPromise.then(
                            function (response) {
                                myDocs.userDocs = response;
                                service.setActiveTab(2);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.editDoc = function (document) {
            Restangular.one('').post('getDocumentById', document)
                .then(function (response) {
                    if (response.status == 200) {
                        docToEdit.doc = response.data.documentJson;
                        docToEdit.docType = document.docType;
                        docToEdit.versionDoc = response.data.versiune;
                        docToEdit.idDoc = response.data.id_dispozitie;
                        if (docToEdit.docType == "DR") {
                            service.setActiveTab(0);
                            service.handleDRForm();
                        }
                        else {
                            service.setActiveTab(1);
                            service.handleDAForm();
                        }
                    }
                })
                .catch(function () {
                });
        };

        service.getInitialFormData = function (docType) {
            if (docToEdit.docType === docType)
                return docToEdit.doc;
        };

        service.clearInitialFormData = function () {
            docToEdit.doc = undefined;
            docToEdit.docType = undefined;
            docToEdit.versionDoc = undefined;
            docToEdit.idDoc = undefined;
        };
    });