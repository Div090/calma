// const input_box = document.getElementById("input_text");
// const listContainer = document.getElementById("list_container");
 
// function addTask(){
//     if(input_box.value === ""){
//         alert("you must enter a task!")
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = input_box.value;
//         listContainer.appendChild(li);
        // let img = document.createElement("span")
        // img.innerHTML = "./icon-cross.svg";
        // li.appendChild(span);
   // }
    //input_box.value = "";
    //saveData();
//}

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         //saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask();

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');   


addTaskBtn.addEventListener('click',   () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const deleteBtn   = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click',   () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
  }
});