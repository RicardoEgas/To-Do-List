export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function storeTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function checkTasks() {
  const lists = document.querySelector('.lists');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    lists.insertAdjacentHTML('beforeend', `<li class="task-item" contentEditable = "false"><input type="checkbox">${task.description}<i id="task-btn" class="fa-solid fa-ellipsis-vertical"></i></li>`);
  });
}

export function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length,
  };
  tasks.push(task);
  storeTasks();
}

export function removeTask(index) {
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  storeTasks();
}

export function editTask(description) {
  tasks.description = description;
  storeTasks();
}