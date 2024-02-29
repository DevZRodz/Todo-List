// Function to add a new task
function addTask() {
    // Get the input element and its value
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    // If the input is not empty, add the task to the list
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      taskList.appendChild(newTask);
      taskInput.value = ""; // Clear the input field
    }
  }
  