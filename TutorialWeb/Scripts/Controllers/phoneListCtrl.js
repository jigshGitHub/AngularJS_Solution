var phoneListCtrl = function ($scope, $http, serviceFactory) {

    //$scope.phones = [
    //    {
    //        'name': 'Nexus S',
    //        'snippet': 'Fast just got faster with Nexus S.',
    //        'qty': '5',
    //        'age': 2
    //    },
    //    {
    //        'name': 'Motorola XOOM™ with Wi-Fi',
    //        'snippet': 'The Next, Next Generation tablet.',
    //        'qty': '0',
    //        'age': 1
    //    },
    //    {
    //        'name': 'MOTOROLA XOOM™',
    //        'snippet': 'The Next, Next Generation tablet.',
    //        'qty': '4',
    //        'age': 2
    //    }
    //];

    //$http.get('phones.txt').success(function (data) {
    //    $scope.phones = data;
    //});
    $scope.phones = serviceFactory.query();
    $scope.orderProp = 'age';
}

phoneListCtrl.$inject = ['$scope', '$http','ServiceFactory'];
