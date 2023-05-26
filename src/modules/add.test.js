/** @jest-environment jsdom */

import { addTask, removeTask } from './add-remove.js';

describe('addTask', () => {
  let mockStorage;

  beforeEach(() => {
    mockStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
    mockStorage.getItem.mockReturnValue(JSON.stringify([]));
  });

  it('Add a task to the tasks array', () => {
    addTask('Test code', mockStorage);

    // Assert that the task was added to the tasks array
    expect(mockStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify([{ description: 'Test code', completed: false, index: 1 }]),
    );
  });
  it('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    addTask('Test code', mockStorage);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
  it('Remove item from the list', () => {
    addTask('Test code', mockStorage);
    addTask('Test code', mockStorage);
    addTask('Test code', mockStorage);
    removeTask(0, mockStorage);
    expect(mockStorage.getItem()).toHaveLength(2);
  });
});
