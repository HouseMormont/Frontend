/**
 * Created by Lucian Bredean on 11/15/2016.
 */
angular.module('EasyDocsUBBApp')
    .service('AppService', function (Restangular, $base64, $location, $templateCache) {
        // Restangular.setBaseUrl('http://172.30.117.30:8080');
        Restangular.setBaseUrl('http://localhost:8080');
        // Restangular.setBaseUrl('https://localhost:8443');

        Restangular.setDefaultHttpFields({withCredentials: true});
        Restangular.setFullResponse(true);
        var service = this;
        var loggedInUser = {
            userName: undefined,
            userType: undefined,
            userAuthority: undefined,
            isLoggedIn: false
        };
        var isSideBarActive = {active: false}; //sidebar active
        var isDRFormActive = {active: false};//Formular dispozitia rectorului activ
        var isDAFormActive = {active: false};//Formular dispozitia rectorului activ
        var activeTab = {index: 2};
        var myDocs = {userDocs: undefined};
        var docToEdit = {doc: undefined, docType: undefined, verDoc: undefined, idDoc: undefined};
        var users = {allUsers: undefined};
        var docsToProcess = {allDocs: undefined};
        var userCharacteristics = {types: undefined, authorities: undefined, functions: undefined};

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

        service.getUserType = function() {
            return loggedInUser.userType;
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
            Restangular.one('/invalidate').post('')
                .then(function (response) {
                    if (response.status == 200) {
                        loggedInUser = {
                            userName: undefined,
                            userType: undefined,
                            userAuthority: undefined,
                            isLoggedIn: false
                        };
                        isSideBarActive = {active: false}; //sidebar active
                        isDRFormActive = {active: false};//Formular dispozitia rectorului activ
                        isDAFormActive = {active: false};//Formular dispozitia rectorului activ
                        activeTab = {index: 2};
                        myDocs = {userDocs: undefined};
                        docToEdit = {doc: undefined, docType: undefined, verDoc: undefined, idDoc: undefined};
                        users = {allUsers: undefined};
                        docsToProcess = {allDocs: undefined};
                        userCharacteristics = {types: undefined, authorities: undefined, functions: undefined};
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
                        loggedInUser.userAuthority = response.data.Authorities[0];
                        loggedInUser.userType = response.data.UserType;
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
            console.log(docToEdit.verDoc);
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
                }).then(function (response) {
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
                }).catch(function () {
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
                        docToEdit.verDoc = response.data.versiune;
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
            docToEdit.verDoc = undefined;
            docToEdit.idDoc = undefined;
        };

        service.getAllUsers = function () {
            return (Restangular.one('').post('getAllUsers')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function () {
                    return false;
                })).then(function (result) {
                users.allUsers = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.getUsersForDisplay = function () {
            return users.allUsers;
        };

        service.getDocsToReview = function () {
            return (Restangular.one('').post('getDocumentsToReview')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function () {
                    return false;
                })).then(function (result) {
                docsToProcess.allDocs = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.getDocsToProcessForDisplay = function () {
            return docsToProcess.allDocs;
        };

        service.approveDoc = function (requestParams) {
            Restangular.one('').post('approveDoc', requestParams)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getDocsToReview();
                        docItemsPromise.then(
                            function (response) {
                                myDocs.userDocs = response;
                                service.setActiveTab(3);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.rejectDoc = function (requestParams) {
            Restangular.one('').post('rejectDoc', requestParams)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getDocsToReview();
                        docItemsPromise.then(
                            function (response) {
                                myDocs.userDocs = response;
                                service.setActiveTab(3);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.reviseDoc = function (requestParams) {
            Restangular.one('').post('reviseDoc', requestParams)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getDocsToReview();
                        docItemsPromise.then(
                            function (response) {
                                myDocs.userDocs = response;
                                service.setActiveTab(3);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.getUserTypes = function () {
            return (Restangular.one('').post('getTypes')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function () {
                })).then(function (result) {
                docsToProcess.allDocs = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.getUserAuthorities = function () {
            return (Restangular.one('').post('getAuthorities')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function () {
                })).then(function (result) {
                docsToProcess.allDocs = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.getUserFunctions = function () {
            return (Restangular.one('').post('getFunctions')
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                })
                .catch(function () {
                })).then(function (result) {
                docsToProcess.allDocs = result.slice(0, result.length);
                return result.slice(0, result.length);
            });
        };

        service.getUT = function(){
            return userCharacteristics.types;
        };

        service.getUA = function(){
            return userCharacteristics.authorities;
        };

        service.getUF = function(){
            return userCharacteristics.authorities;
        };

        service.createUser = function (userDetails)
        {
            Restangular.one('').post('createUser', userDetails)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getAllUsers();
                        docItemsPromise.then(
                            function (response) {
                                users.allUsers = response;
                                service.setActiveTab(5);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.deleteUser = function (userDetails)
        {
            Restangular.one('').post('deleteUser', userDetails)
                .then(function (response) {
                    service.setActiveTab(-1);
                    if (response.status == 200) {
                        var docItemsPromise = service.getAllUsers();
                        docItemsPromise.then(
                            function (response) {
                                users.allUsers = response;
                                service.setActiveTab(5);
                            }
                        );
                    }
                })
                .catch(function () {
                });
        };

        service.isEditable = function(input) {
            var stringInput = "" + input;
            if(stringInput.indexOf('.') > -1)
                return false;
            else
                return true;
        };
    });