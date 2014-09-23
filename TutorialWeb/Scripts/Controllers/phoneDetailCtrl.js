var phoneDetailCtrl = function ($scope, $routeParams, $http, serviceFactory) {

    //$http.get($routeParams.phoneId + '.txt').success(function (data) {        
    //    $scope.phone = data;
    //    $scope.mainImageUrl = data.images[0];
    //});

    $scope.phone = serviceFactory.get({ phoneId: $routeParams.phoneId }, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });
    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }

}

phoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http', 'ServiceFactory'];
