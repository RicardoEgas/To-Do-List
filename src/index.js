import './index.css';

const tasks = [
  {
    description: 'Cook Dinner',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a Shower',
    completed: true,
    index: 2,
  },
  {
    description: 'Vacuum the floor',
    completed: false,
    index: 3,
  },
  {
    description: 'Meet coding partner',
    completed: true,
    index: 4,
  },
];


const checkTasks = () => {
  const lists = document.querySelector('.lists');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    lists.insertAdjacentHTML('beforeend', `<li><input type="checkbox">${task.description}<i class="fa-solid fa-ellipsis-vertical"></i></li>`);
  });
};

checkTasks();