

/*let mytasks= [];


tasksFromLocalStorage = JSON.parse (localStorage.getItem("mytasks"))
// console.log(tasksFromLocalStorage)

if (tasksFromLocalStorage){
    mytasks= tasksFromLocalStorage
    list()
}


function list(){
    let listItem= ""
    for (let i=0 ; i < mytasks.length ; i++){
        listItem += 
        `<li>${mytasks[i]}</li>`
    }
    return incompleteTaskHolder.innerHTML = listItem
}

function dlt(){
    
}

addButton.addEventListener("click", function(){

    
    mytasks.push(taskInput.value);
    localStorage.setItem("mytasks", JSON.stringify(mytasks))

    list();
    localStorage.getItem("mytasks")
})*/

let taskInput = document.querySelector("#new-task");
let addButton = document.querySelector("button");
let incompleteTaskHolder = document.querySelector("#incomplete-tasks");
let completedTaskHolder = document.querySelector("#completed-tasks");

let createNewTaskElement = function (taskString) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label"); 
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    
    label.innerText = taskString;

    checkBox.type = "checkbox"    ;
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className ="edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}  
//////////////////////////////////////////////////////////////////
let addTask = function () {
    let listItem = createNewTaskElement(taskInput.value);
    if (taskInput.value == "") {
        return;
    }
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}
//////////////////////////////////////////////////////////////////
let editTask = function () {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");

    if (containsClass) {
        label.innerText = editInput.value;
    }else {
        editInput.value= label.innerText;
    }
    listItem.classList.toggle("editMode");
}
//////////////////////////////////////////////////////////////////
let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
//////////////////////////////////////////////////////////////////
let taskCompleted = function() {
    let listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncompleted);
}
//////////////////////////////////////////////////////////////////
let taskIncompleted = function() {
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}
//////////////////////////////////////////////////////////////////
addButton.onclick = addTask;

let bindTaskEvents = function (taskListItem, checkBoxEventHandeler) {
    let checkBox = taskListItem.querySelector("input[type=check]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandeler;
}
//////////////////////////////////////////////////////////////////
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);

}

for (let i = 0; i < completedTaskHolder.children.length; i++ ){
    bindTaskEvents(completedTaskHolder.children[i], taskIncompleted);
}