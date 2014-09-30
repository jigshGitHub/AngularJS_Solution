/// <reference path='../models/toDoItem.ts' />

module toDoSample {
export interface IToDoService{
get():toDoItem[];
put(toDoSample:toDoItem[]);
}
} 