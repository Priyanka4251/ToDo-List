const write = document.querySelector("#write");
const addBtn = document.querySelector("#btn");
const taskCompleted = document.querySelector("#completed");
const taskIncompleted = document.querySelector("#incompleted");
let myTasks = [];
const header = document.querySelector("h1");
const dltBtnPlace= document.querySelector(".comp");
let dlt = document.querySelector(".dlt");
// let li = document.querySelector("li");



//////////////////////////////////////////////////////////////////
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))
//////////////////////////////////////////////////////////////////
if (tasksFromLocalStorage){
    myTasks = tasksFromLocalStorage
    repeat()
    // dltBtnAdd()
    // greet()
    // greeting("Priyanka")
}
////////////////////////////////////////////////////////////////
greeting("Priyanka")
////////////////////////////////////////////////////////////////
addBtn.addEventListener("click", function(){
    myTasks.push(write.value)
   if (write.value == ""){
       alert("please fill with task")
   }else{
    localStorage.setItem("myTasks",JSON.stringify(myTasks))
    repeat()
    write.value=""
    dltBtnAdd()
   }
    
})
////////////////////////////////////////////////////////////////
// function greet(){

//     if (taskCompleted.innerHTML == ""){
//         greeting("Priyanka")
//     }
// }



////////////////////////////////////////////////////////////////
function repeat(){
    let li = document.querySelector("li");

    let listItem = ""
for (let i = 0; i < myTasks.length; i++) {
    listItem += "<li>" + myTasks[i] + "</li>"
}
taskCompleted.innerHTML = listItem 

}
////////////////////////////////////////////////////////////////
function greeting(name){
    
  header.innerHTML += "<li>" + "Welcome " + name + "!🤗" + "</li>"
    
}
////////////////////////////////////////////////////////////////
function dltBtnAdd(){
    // dlt.style.display= "inline-block";
    // li.appendChild("dlt")
    const button = document.createElement("button");
    button.innerText = "delete";
    button.onclick= function() {
        this.parentElement.remove()
    }
}
////////////////////////////////////////////////////////////////
