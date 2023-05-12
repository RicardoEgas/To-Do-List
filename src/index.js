import './index.css';
import {
  tasks,
  checkTasks,
  addTask,
  removeTask,
  editTask,
} from './modules/tasks.js';

const lists = document.querySelector('.lists');
const addBtn = document.querySelector('#add-btn');

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
    e.target.parentElement.remove();
    removeTask(tasks.index);
  }
  if (e.target.classList.contains('fa-ellipsis-vertical')) {
    e.target.parentElement.contentEditable = 'true';
    e.target.classList.remove('fa-ellipsis-vertical');
    e.target.classList.add('fa-trash');
  }
  editTask(tasks.description);
});
