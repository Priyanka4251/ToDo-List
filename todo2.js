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
    
    // table2.innerHTML = html; 
}

////////////////////clock//////////////////////////////////////
setInterval(displayClock, 500);
function displayClock(){
const datePlace= document.querySelector(".date");
let today = new(Date);
let dd= today.getDate();
let mm= today.getMonth()+1;
let yyyy= today.getFullYear();
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let prepand = (hour>=12)?"PM" : "AM";

if (hour>12 ) {
    hour = hour - 12 ;
}else if (hour == 0) {
    hour = 12 ;
}


if (hour<10){
    hour = "0" + hour;
}else{
    hour = hour
}

if (min<10){
    min = "0" + min;
}else{
    min = min
}

if (sec<10){
    sec = "0" + sec;
}else{
    sec = sec
}
    
if (mm<10){
    mm = "0" + mm;
}else{
    mm = mm
}
if (dd<10){
    dd = "0" + dd;
}else{
    dd = dd
}

datePlace.innerHTML = dd + "/" + mm + "/" + yyyy + " Time is " + hour +":" +min +":" + sec + prepand;
}

displayClock();