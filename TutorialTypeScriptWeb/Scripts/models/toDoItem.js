var toDoSample;
(function (toDoSample) {
    'use strict';

    var toDoItem = (function () {
        function toDoItem(title, completed) {
            this.title = title;
            this.completed = completed;
        }
        return toDoItem;
    })();
    toDoSample.toDoItem = toDoItem;
})(toDoSample || (toDoSample = {}));
