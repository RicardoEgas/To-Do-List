let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function storeTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function checkTasks() {
  const lists = document.querySelector('.lists');

  tasks.forEach((task) => {
    lists.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item" contentEditable = "false"><input type="checkbox">${task.description}<i id="task-btn" class="fa-solid fa-ellipsis-vertical"></i></li>`,
    );
  });
}

export function editTask(index, description) {
  tasks[index].description = description;
  storeTasks();
}

export function checkedBox(index) {
  tasks[index].completed = true;
  storeTasks();
}

export function uncheckedBox(index) {
  tasks[index].completed = false;
  storeTasks();
}

export function clearTasks() {
  const uncheckedTasks = tasks.filter((task) => task.completed === false);
  uncheckedTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  tasks = uncheckedTasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}