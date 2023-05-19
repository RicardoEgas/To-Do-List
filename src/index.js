import './index.css';
import {
  addTask, removeTask, editTask, checkTasks, checkedBox, uncheckedBox, clearTasks,
} from './modules/tasks.js';

const lists = document.querySelector('.lists');
const addBtn = document.querySelector('#add-btn');
const resetBtn = document.querySelector('.reset-btn');

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

    document.querySelectorAll('.task-item').forEach((task) => {
      const index = [...task.parentElement.children].indexOf(task) - 1;

      task.addEventListener('input', (e) => {
        const description = e.target.textContent;
        editTask(index, description);
      });
    });
  }
  document.querySelectorAll('.task-item').forEach((task) => {
    const index = [...task.parentElement.children].indexOf(task) - 1;
    task.addEventListener('change', () => {
      const myCheck = task.firstElementChild;

      if (myCheck.checked) {
        checkedBox(index);
      } else {
        uncheckedBox(index);
      }
    });
  });
});

resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.task-item').forEach((task) => {
    const myCheck = task.firstElementChild;

    if (myCheck.checked) {
      task.remove();
    }
  });
  clearTasks();
});
