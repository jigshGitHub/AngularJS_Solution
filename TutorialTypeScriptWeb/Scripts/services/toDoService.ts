module toDoSample {
'use strict';

    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    export class toDoService implements IToDoService {

        STORAGE_ID = 'todos-angularjs-typescript';

        get (): toDoItem[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(toDoSample: toDoItem[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(toDoSample));
        }
    }
} 