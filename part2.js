var tasks = [];
//create an array of strings
function addTask(task) {
    tasks.push(task);
    console.log("____________New Task Added___________");
    console.log("Task " + task + " inserted into the list");
    return tasks.length;
}
//Create function that takes string, adds to array, returns length of array after its been added.
function listAllTasks() {
    console.log("START: All items in the array:");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: All items in the array:");
}
//For each.
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("___________Task Removed______________");
        console.log("Task " + task + " removed from the list");
    }
    return tasks.length;
}
//test code is working
addTask("Wake up");
addTask("Sleep");
listAllTasks();
deleteTask("Sleep");
