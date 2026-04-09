function addtask(){
    let taskInput=document.getElementById("taskInput");
    let taskText=taskInput.value;

    if(taskText==""){
        alert("Please enter a TASK");
        return;
    }
    let li=document.createElement("li");
     li.innerHTML=
     `<span onclick="completeTask(this)">${taskText}</span>
     <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

document.getElementById("taskList").appendChild(li);
taskInput.value="";
}
function completeTask(element){
    element.classList.toggle("completed");
}
function deleteTask(button){
    button.parentElement.remove();
}