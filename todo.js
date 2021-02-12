"use strict";
exports.__esModule = true;
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.tasks = []; //first part of contract honored.
    }
    ToDo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("____________New Task Added___________");
        console.log("Task " + task + " inserted into the list");
        return this.tasks.length;
    };
    ToDo.prototype.listAllTasks = function () {
        console.log("START: All items in the array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in the array:");
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("___________Task Removed______________");
            console.log("Task " + task + " removed from the list");
        }
        return this.tasks.length;
    };
    return ToDo;
}());
var myToDos = new ToDo();
myToDos.addTask('eat');
myToDos.addTask('sleep');
myToDos.listAllTasks();
myToDos.deleteTask('sleep');
