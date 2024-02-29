// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      
      // Add event listener to mark task as completed when clicked
      newTask.addEventListener("click", function() {
        this.classList.toggle("completed");
      });
      
      // Add event listener to delete task when double-clicked
      newTask.addEventListener("dblclick", function() {
        this.remove();
      });
      
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  // Function to clear all tasks
  function clearTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  }
  