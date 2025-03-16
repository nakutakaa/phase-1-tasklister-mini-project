document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.title = "EVIDENCE";

  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  //an event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Capture the input value
    const taskDescription = taskInput.value;
    // Create a new list
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    taskList.appendChild(newTask);
    // Clear the input field
    taskInput.value = "";
    document.getElementById("main-content").innerText = "EVIDENCE";
  });
});
