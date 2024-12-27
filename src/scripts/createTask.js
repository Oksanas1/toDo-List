import { renderTasks } from './renderTasks.js';
import { createTaskInDB, getTasksFromDB } from './tasksGateway.js';
import { setToLocalStorageData } from './storage.js';

const renderID = () => Math.random().toString(16).slice(2);

const createTask = text => {
  const newTask = {
      id: renderID(),
      text,
      done: false,
      criateDate: new Date(),
      finishDate: null,
    };

    createTaskInDB(newTask)
    .then(() => {
      getTasksFromDB().then(tasks => {
        setToLocalStorageData('tasksList', tasks);
        renderTasks();
      });
    });
};

export const addTasks = () => {
  const taskInputElement = document.querySelector('.task-input');

  if (!taskInputElement.value) {
    return;
  }

  createTask(taskInputElement.value);
  taskInputElement.value = '';
};
