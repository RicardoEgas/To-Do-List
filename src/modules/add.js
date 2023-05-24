let tasks = [];

export function storeTasks(storage) {
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
