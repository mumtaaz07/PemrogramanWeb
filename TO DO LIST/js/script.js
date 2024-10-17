// Display current date
const currentDate = document.getElementById('currentDate');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.innerHTML = today.toLocaleDateString(undefined, options);

// Add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    li.onclick = function() {
      li.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = "";
  }
}
