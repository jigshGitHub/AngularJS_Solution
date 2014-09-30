 module toDoSample {
    'use strict';

    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    export function toDoBlur(): ng.IDirective {
        return {
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
                element.bind('blur', () => { $scope.$apply(attributes.toDoBlur); });
            }
        };
    }
}