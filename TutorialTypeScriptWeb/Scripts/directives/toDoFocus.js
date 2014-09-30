var toDoSample;
(function (toDoSample) {
    'use strict';

    /**
    * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
    */
    function toDoFocus($timeout) {
        return {
            link: function ($scope, element, attributes) {
                $scope.$watch(attributes.toDoFocus, function (newval) {
                    if (newval) {
                        $timeout(function () {
                            return element[0].focus();
                        }, 0, false);
                    }
                });
            }
        };
    }
    toDoSample.toDoFocus = toDoFocus;

    toDoFocus.$inject = ['$timeout'];
})(toDoSample || (toDoSample = {}));
