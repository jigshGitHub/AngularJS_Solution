module toDoSample{
    'use strict';
    
    export class toDoCtrl{
        toDoItems: toDoItem[];

        public static $inject = ['$scope','$location','toDoService','filterFilter'];

        constructor(private $scope:IToDoScope, private $location:ng.ILocationService,private toDoService:IToDoService,private filterFilter){
        this.toDoItems= $scope.toDoItems=toDoService.get();
        $scope.newToDo = '';
        $scope.editedToDo = null; 
        $scope.vm = this;


        $scope.$watch('toDoItems',()=>this.onToDoTems(),true);
        $scope.$watch('location.path()', path => this.onPath(path));

        if($location.path() === '') $location.path('/');
        $scope.location = $location;
        }

        onToDoTems(){
            this.$scope.remainingItems = this.filterFilter(this.toDoItems,{completed:false}).length;
            this.$scope.doneItems = this.toDoItems.length - this.$scope.remainingItems;
            this.$scope.allChecked = !this.$scope.remainingItems;
            this.toDoService.put(this.toDoItems);
        }
       
        onPath(path:string){
            this.$scope.statusFilter = (path === '/active') ? {completed:false}:(path === '/completed') ? {completed:true}:null;
        }

        addToDo(){
            var newToDo:string = this.$scope.newToDo.trim();
            if(!newToDo.length) return;
            this.toDoItems.push(new toDoItem(newToDo,false));
            this.$scope.newToDo = '';
        }

        editToDo(_toDoItem:toDoItem){
            this.$scope.editedToDo = _toDoItem;
        }

        doneEditing(_toDoItem:toDoItem){
            this.$scope.editedToDo = null;
            _toDoItem.title = _toDoItem.title.trim();

            if(!_toDoItem.title)
            this.removeToDo(_toDoItem);
        }

        removeToDo(_toDoItem:toDoItem){
            this.$scope.toDoItems.splice(this.toDoItems.indexOf(_toDoItem),1);
        }

        clearDoneTodos(){
            this.$scope.toDoItems = this.toDoItems = this.toDoItems.filter(_toDoItem => !_toDoItem.completed);
        }

        markAll(completed:boolean){
            this.toDoItems.forEach(_toDoItem => {_toDoItem.completed = completed;});
        }
    }
 } 