const tasks = [];

function storeTasks(storage) {
  storage.setItem('tasks', JSON.stringify(tasks));
}

export function addTask(description, storage) {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  storeTasks(storage);
}
export function removeTask(index, storage) {
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  storeTasks(storage);
}
export function editTask(index, description, storage) {
  tasks[index].description = description;
  storeTasks(storage);
}
export function checkedBox(index, storage) {
  tasks[index].completed = true;
  storeTasks(storage);
}