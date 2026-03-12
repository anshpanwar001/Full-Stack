let addTaskBtn = document.querySelector("#addTaskBtn");
let taskInput = document.querySelector("#taskInput");
let list = document.querySelector("#list");
let filterDisplay = document.querySelector("#filterDisplay");

function applyFilter(){
    let selectedFilter = filterDisplay.value;
    let tasks = list.querySelectorAll("li");

    tasks.forEach(function(task){
        let isCompleted = task.style.textDecoration === "line-through" || task.classList.contains("completed");

        if(selectedFilter === "Show All"){
            task.style.display = "list-item";
        }
        if(selectedFilter === "Completed"){
            task.style.display = isCompleted ? "list-item" : "none";
        }
        if(selectedFilter === "Pending"){
            task.style.display = isCompleted ? "none" : "list-item";
        }
    });
}

filterDisplay.addEventListener("change", applyFilter);


addTaskBtn.addEventListener("click",function(){

   taskValue = taskInput.value;

   if(filterDisplay.value === "Completed"){
    
   }

   let priorityValue = document.querySelector("#dropdownPriority").value;
   if(taskValue === ""){
    alert("Please add a valid task");
   }
   let li = document.createElement("li");

   let deleteBtn = document.createElement("button");

   deleteBtn.classList.add("deleteBtn");

   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", function(event){
    event.stopPropagation();
    li.remove();
   });
   if(priorityValue === "null"){
    alert("Select Priority");
   }
   if(priorityValue === "High"){
    li.style.color = "red";
   }
   if(priorityValue === "Medium"){
    li.style.color = "orange"
   }
   if(priorityValue === "Low"){
    li.style.color = "yellow"
   }
   li.textContent = taskValue + ` ( ${priorityValue} )`;
   li.appendChild(deleteBtn);
   list.appendChild(li);

   li.addEventListener("click",function(){
    li.style.textDecoration = "line-through";
    li.classList.add("completed");
    applyFilter();
   });
   applyFilter();

});


// document.querySelector("li").addEventListener("click", function(){
//     this.style.textDecoration = "line-through";
// });

// document.querySelector(".deleteBtn").addEventListener("click",function(){
//     this.parentElement.remove();
// })
