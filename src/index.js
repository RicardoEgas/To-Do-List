import './index.css';
import {
  tasks, addTask, removeTask, editTask,
} from './modules/tasks.js';

const lists = document.querySelector('.lists');
const addBtn = document.querySelector('#add-btn');

const checkTasks = () => {
  const lists = document.querySelector('.lists');

  tasks.forEach((task) => {
    lists.insertAdjacentHTML(
      'beforeend',
      `<li class="task-item" contentEditable = "false"><input type="checkbox">${task.description}<i id="task-btn" class="fa-solid fa-ellipsis-vertical"></i></li>`,
    );
  });
};

checkTasks();

addBtn.addEventListener('click', () => {
  const description = document.getElementById('add-input').value;
  addTask(description);
  lists.insertAdjacentHTML(
    'beforeend',
    `<li class="task-item" contentEditable = "false"><input type="checkbox">${description}<i id="task-btn" class="fa-solid fa-ellipsis-vertical"></i></li>`,
  );
  document.getElementById('add-input').value = '';
});

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    const lis = document.querySelectorAll('.task-item');
    let index = 0;
    for (let i = 0; i < lis.length; i += 1) {
      if (lis[i].textContent === e.target.parentElement.textContent) {
        index = i;
      }
    }
    e.target.parentElement.remove();
    removeTask(index);
  }

  if (e.target.classList.contains('fa-ellipsis-vertical')) {
    e.target.parentElement.contentEditable = 'true';
    e.target.classList.remove('fa-ellipsis-vertical');
    e.target.classList.add('fa-trash');
  }
});

document.querySelectorAll('.task-item').forEach((task) => {
  task.addEventListener('input', (e) => {
    const description = e.target.textContent;
    let index = [...task.parentElement.children].indexOf(task)-1;
    editTask(index, description);
  });
});
