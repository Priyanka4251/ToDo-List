 showTask();
let write = document.querySelector("#write");
let addBtn = document.querySelector("#btn");
let saveBtn = document.querySelector("#saveBtn");
let dltAll = document.querySelector("#dltAll");
let task = document.querySelector(".task");
////////////////////////////////////////////////////////////////
addBtn.addEventListener("click", function(){
    taskVal = write.value;
    if (taskVal){
        let webTask = localStorage.getItem("localTask");
        if (webTask == null) {
            taskObj = [];
        }else{
            taskObj = JSON.parse(webTask);
        }
        taskObj.push(taskVal);
        localStorage.setItem("localTask", JSON.stringify (taskObj));
    }else{
        alert("Please fill a task")
    }
   
    showTask();
    write.value= "";
})
////////////////////////////////////////////////////////////////
function showTask() {
    let webTask = localStorage.getItem("localTask");
    if (webTask == null) {
        taskObj = [];
    }else{
        taskObj = JSON.parse(webTask);
    }
    let html= "";
    let table = document.getElementById("tableAdded");
    taskObj.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>
        <td class="task">${item}</td>
        <td > <button type="button" onclick="editTask(${index})" class="edit"> Edit </button> </td>    
        <td> <button type="button" onclick="doneTask(${index})" class="done"> Done </button>  </td>
        <td> <button type="button" onclick="dltTask(${index})" class="dlt"> Delete </button>  </td>
      </tr> `

    });
    table.innerHTML = html;

}
////////////////////////Edit////////////////////////////////////

function editTask(index){
    let saveIndex = document.querySelector("#saveIndex");
    saveIndex.value = index;
    let webTask = localStorage.getItem("localTask");
    let taskObj = JSON.parse(webTask);
    write.value = taskObj [index];
    addBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    
}
/////////////////////////////Save////////////////////////////////
// saveTask(){
//     taskObj[index] = write.value
// }
/////////////////////////////////////////////////////////////////
saveBtn.addEventListener("click", function(){
    let webTask = localStorage.getItem("localTask");
    let taskObj = JSON.parse(webTask);
    let saveIndex = document.querySelector("#saveIndex").value;
    taskObj [saveIndex]  = write.value;
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    showTask();
    addBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
    write.value="";
})
/////////////////////////////delete 1by1/////////////////////////
function dltTask(index){
    let webTask = localStorage.getItem("localTask");
    let taskObj = JSON.parse(webTask);
    taskObj.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    showTask();
}
//////////////////////////Delete All/////////////////////////////
dltAll.addEventListener("dblclick", function(){
    let webTask = localStorage.getItem("localTask");
    let taskObj = JSON.parse(webTask);
    // localStorage.clear();
    if (webTask==null){
        taskObj=[]
    }else{
        taskObj = [];
    }
    write.value="";
    saveBtn.style.display="none";
    addBtn.style.display="inline-block";
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    showTask();

})
/////////////////////////////doneTask/////////////////////////
function doneTask(index) {
    
    table2.innerHTML = html; 
}