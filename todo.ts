import {todoInterface} from './todointerface';

class ToDo implements todoInterface{
    constructor()
    {
    }

    tasks: Array<string>=[]; //first part of contract honored.

        addTask(task:string):number{
        this.tasks.push(task);
        console.log("____________New Task Added___________");
        console.log("Task " +task+ " inserted into the list");
        return this.tasks.length;
    }

    listAllTasks():void{
        console.log("START: All items in the array:")
        this.tasks.forEach(function(task)
        {
            console.log(task);
        })
        console.log("END: All items in the array:")
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1)
        {
            this.tasks.splice(index,1);
            console.log("___________Task Removed______________");
            console.log("Task " +task+ " removed from the list");
            
        }
        return this.tasks.length;
        
    }

}

let myToDos = new ToDo();
myToDos.addTask('eat');
myToDos.addTask('sleep');

myToDos.listAllTasks();

myToDos.deleteTask('sleep');