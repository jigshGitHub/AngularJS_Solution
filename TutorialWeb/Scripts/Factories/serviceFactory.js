//var phoneServices = angular.module('phoneServices', ['ngResource']);

//phoneServices.factory('Phone', ['$resource',
//  function ($resource) {
//      return $resource('phones/:phoneId.json', {}, {
//          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
//      });
//  }]);

var serviceFactory = function ($resource) {
    return $resource(':phoneId.txt', {}, {
        query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
    });
};

serviceFactory.$inject = ['$resource'];

    
angular.module('phoneServices', ['ngResource']).factory('ServiceFactory', serviceFactory);