var checkMarkFilter = function (input) {
    return input ? '\u2713' : '\u2718';
};

angular.module('phoneFilters', []).filter('checkmark', function () {
    return checkMarkFilter;
});