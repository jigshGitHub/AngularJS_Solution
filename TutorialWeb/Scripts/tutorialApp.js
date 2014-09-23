var tutorialApp = angular.module('tutorialApp', ['ngRoute', 'phoneFilters','phoneServices','phonecatAnimations']);

var config = function ($routeProvider) {
    $routeProvider.
      when('/phones', {
          templateUrl: 'home/list',
          controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
          templateUrl: function (params) { return '/home/detail?id=' + params.phoneId; },
          controller: 'PhoneDetailCtrl'
      }).
      otherwise({
          redirectTo: '/phones'
      });
}


config.$inject=['$routeProvider'];

tutorialApp.controller('PhoneListCtrl', phoneListCtrl);
tutorialApp.controller('PhoneDetailCtrl', phoneDetailCtrl);

tutorialApp.config(config);
