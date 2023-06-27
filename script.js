const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', event => event.key === 'Enter' ? addTask() : null);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
    li.style.width = input.offsetWidth + 'px';  
  }
}

taskList.addEventListener('dblclick', removeTask);

function removeTask() {
    const clickedTask = event.target;
    if (clickedTask.tagName === 'LI') {
        const shouldRemove = confirm('Remove this task?');
        
    if (shouldRemove) {
        clickedTask.remove();
        }
    }
}


