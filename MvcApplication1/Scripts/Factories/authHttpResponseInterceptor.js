var authHttpResponseInterceptor = function ($q, $location, $injector) {
    return {
        response: function (response) {
            console.log('response.status' + response.status);
            if (response.status === 404) {
                console.log("RESPONSE 404");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            console.log('rejection.status' + rejection.status);
            if (rejection.status === 404) {
                console.log("RESPONSE ERROR 404", rejection);
                //$location.path('/login').search('returnUrl', $location.path());
                $injector.get('$state').go('loginRegister', { returnUrl: $location.path() });
            }
            return $q.reject(rejection);
        }
    }
}

authHttpResponseInterceptor.$inject = ['$q', '$location', '$injector'];