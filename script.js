const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

addTaskButton.addEventListener('click', addTask);

// ... Your existing code ...

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === '') return;
  
    const currentDateTime = new Date();
    const formattedDateTime = formatDateTime(currentDateTime);
  
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="taskText">${taskText}</span>
      <span class="dateTime">${formattedDateTime}</span>
      <button class="editButton">Edit</button>
      <button class="completeButton">Complete</button>
      <button class="deleteButton">Delete</button>
    `;
  
    const editButton = taskItem.querySelector('.editButton');
    const completeButton = taskItem.querySelector('.completeButton');
    const deleteButton = taskItem.querySelector('.deleteButton');
  
    editButton.addEventListener('click', editTask);
    completeButton.addEventListener('click', completeTask);
    deleteButton.addEventListener('click', deleteTask);
  
    pendingTasksList.appendChild(taskItem);
    taskInput.value = '';
  }
  
  function editTask(event) {
    const taskItem = event.target.parentElement;
    const taskTextElement = taskItem.querySelector('.taskText');
    const newTaskText = prompt('Edit task:', taskTextElement.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskTextElement.textContent = newTaskText;
    }
  }
  
  // ... Rest of your existing code ...
  

function completeTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.add('completed');
  completedTasksList.appendChild(taskItem);
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

function formatDateTime(dateTime) {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return dateTime.toLocaleDateString('en-US', options);
}
