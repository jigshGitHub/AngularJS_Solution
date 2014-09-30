module toDoSample {
	'use strict';

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
	 */
	export function toDoFocus($timeout: ng.ITimeoutService): ng.IDirective {
		return {
			link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
				$scope.$watch(attributes.toDoFocus, newval => {
					if (newval) {
						$timeout(() => element[0].focus(), 0, false);
					}
				});
			}
		};
	}

	toDoFocus.$inject = ['$timeout'];

} 