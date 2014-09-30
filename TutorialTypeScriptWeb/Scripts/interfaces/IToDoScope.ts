/// <reference path='../models/toDoItem.ts' />

module toDoSample {
    'use strict';
    export interface IToDoScope extends ng.IScope{
    toDoItems:toDoItem[];
    newToDo:string;
    editedToDo:toDoItem;
    remainingItems:number;
    doneItems:number;
    allChecked:boolean;
    statusFilter:{completed:boolean};
    location: ng.ILocationService;
    vm:toDoCtrl;
    }
    }

     