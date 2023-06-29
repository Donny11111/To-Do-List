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
    newTask.style.width = taskInput.offsetWidth + 'px';
      
    newTask.addEventListener('dblclick', () => {
        const confirmation = confirm("Are you sure you want to delete this task?");
        if (confirmation) {
            taskList.removeChild(newTask);
        }
    });
  }
}
