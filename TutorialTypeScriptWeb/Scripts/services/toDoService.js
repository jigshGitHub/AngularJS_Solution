var toDoSample;
(function (_toDoSample) {
    'use strict';

    /**
    * Services that persists and retrieves TODOs from localStorage.
    */
    var toDoService = (function () {
        function toDoService() {
            this.STORAGE_ID = 'todos-angularjs-typescript';
        }
        toDoService.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };

        toDoService.prototype.put = function (toDoSample) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(toDoSample));
        };
        return toDoService;
    })();
    _toDoSample.toDoService = toDoService;
})(toDoSample || (toDoSample = {}));
