var app = angular.module('app', ['ngRoute']);
app.controller('validationCtl', validationCtl);
app.controller('toDoCtrl', toDoSample.toDoCtrl);
app.directive('toDoFocus', toDoSample.toDoFocus);
app.directive('toDoBlur', toDoSample.toDoBlur);
app.service('toDoService', toDoSample.toDoService);


