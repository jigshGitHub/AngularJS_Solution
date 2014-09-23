﻿var loginFactory = function ($http, $q) {

    return function (emailAddress, password, rememberMe) {
        var deferredObject = $q.defer();

        $http.post(
            '/account/login', {
                Email: emailAddress, Password: password, RememberMe: rememberMe
            }
        ).
        success(function (data) {
            if (data == "True") {
                deferredObject.resolve({ success: true });
            }
            else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });
    }

}

loginFactory.$inject = ['$http', '$q'];
