var landingPageController = function ($scope) {

    $scope.models = {
        helloAngular: 'I work!'
    };
    $scope.navbarProperties = {
        isCollapsed: false
    };

}

landingPageController.$inject = ['$scope'];