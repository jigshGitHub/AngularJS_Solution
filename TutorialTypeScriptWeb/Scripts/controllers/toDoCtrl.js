var toDoSample;
(function (toDoSample) {
    'use strict';

    var toDoCtrl = (function () {
        function toDoCtrl($scope, $location, toDoService, filterFilter) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.toDoService = toDoService;
            this.filterFilter = filterFilter;
            this.toDoItems = $scope.toDoItems = toDoService.get();
            $scope.newToDo = '';
            $scope.editedToDo = null;
            $scope.vm = this;

            $scope.$watch('toDoItems', function () {
                return _this.onToDoTems();
            }, true);
            $scope.$watch('location.path()', function (path) {
                return _this.onPath(path);
            });

            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        toDoCtrl.prototype.onToDoTems = function () {
            this.$scope.remainingItems = this.filterFilter(this.toDoItems, { completed: false }).length;
            this.$scope.doneItems = this.toDoItems.length - this.$scope.remainingItems;
            this.$scope.allChecked = !this.$scope.remainingItems;
            this.toDoService.put(this.toDoItems);
        };

        toDoCtrl.prototype.onPath = function (path) {
            this.$scope.statusFilter = (path === '/active') ? { completed: false } : (path === '/completed') ? { completed: true } : null;
        };

        toDoCtrl.prototype.addToDo = function () {
            var newToDo = this.$scope.newToDo.trim();
            if (!newToDo.length)
                return;
            this.toDoItems.push(new toDoSample.toDoItem(newToDo, false));
            this.$scope.newToDo = '';
        };

        toDoCtrl.prototype.editToDo = function (_toDoItem) {
            this.$scope.editedToDo = _toDoItem;
        };

        toDoCtrl.prototype.doneEditing = function (_toDoItem) {
            this.$scope.editedToDo = null;
            _toDoItem.title = _toDoItem.title.trim();

            if (!_toDoItem.title)
                this.removeToDo(_toDoItem);
        };

        toDoCtrl.prototype.removeToDo = function (_toDoItem) {
            this.$scope.toDoItems.splice(this.toDoItems.indexOf(_toDoItem), 1);
        };

        toDoCtrl.prototype.clearDoneTodos = function () {
            this.$scope.toDoItems = this.toDoItems = this.toDoItems.filter(function (_toDoItem) {
                return !_toDoItem.completed;
            });
        };

        toDoCtrl.prototype.markAll = function (completed) {
            this.toDoItems.forEach(function (_toDoItem) {
                _toDoItem.completed = completed;
            });
        };
        toDoCtrl.$inject = ['$scope', '$location', 'toDoService', 'filterFilter'];
        return toDoCtrl;
    })();
    toDoSample.toDoCtrl = toDoCtrl;
})(toDoSample || (toDoSample = {}));
