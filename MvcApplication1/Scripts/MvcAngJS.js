//var MvcAngJS = angular.module('MvcAngJS', ['ngRoute', 'ui.bootstrap']);
var MvcAngJS = angular.module('MvcAngJS', ['ui.router', 'ui.bootstrap']);

MvcAngJS.controller('LandingPageController', landingPageController);
MvcAngJS.controller('LoginController', loginController);

MvcAngJS.factory('AuthHttpResponseInterceptor', authHttpResponseInterceptor);
MvcAngJS.factory('LoginFactory', loginFactory);

//var config = function ($routeProvider, $httpProvider, $locationProvider) {

//    $locationProvider.hashPrefix('!').html5Mode(true);

//    $routeProvider.when('/routeOne', { templateUrl: 'routes/one' })
//    .when('/routeTwo/:donuts', { templateUrl: function (params) { return '/routes/two?donuts=' + params.donuts; } })
//    .when('/routeThree', { templateUrl: 'routes/three' })
//    .when('/login', { templateUrl: 'account/login', controller: loginController });
    
//    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

//}

var config = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $stateProvider
        .state('stateOne', {
            url: '/stateOne?donuts',
            views: {
                "containerOne": {
                    templateUrl: '/routes/one'
                },
                "containerTwo": {
                    templateUrl: function (params) { return '/routes/two?donuts=' + params.donuts; }
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/routes/one'
                },
                "containerTwo": {
                    templateUrl: '/routes/three'
                }
            }
        })
        .state('stateThree', {
            url: '/stateThree?donuts',
            views: {
                "containerOne": {
                    templateUrl: function (params) { return '/routes/two?donuts=' + params.donuts; }
                },
                "containerTwo": {
                    templateUrl: '/routes/three'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: loginController
                }
                //,
                //"containerTwo": {
                //    templateUrl: '/Account/Register',
                //    controller: RegisterController
                //}
            }
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

}

//config.$inject = ['$routeProvider','$httpProvider','$locationProvider'];
config.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

MvcAngJS.config(config);