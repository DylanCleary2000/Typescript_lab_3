export interface todoInterface{
    tasks: Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}
//Contract for a class, must have all of these elements.