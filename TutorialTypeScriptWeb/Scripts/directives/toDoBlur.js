var toDoSample;
(function (toDoSample) {
    'use strict';

    /**
    * Directive that executes an expression when the element it is applied to loses focus.
    */
    function toDoBlur() {
        return {
            link: function ($scope, element, attributes) {
                element.bind('blur', function () {
                    $scope.$apply(attributes.toDoBlur);
                });
            }
        };
    }
    toDoSample.toDoBlur = toDoBlur;
})(toDoSample || (toDoSample = {}));
