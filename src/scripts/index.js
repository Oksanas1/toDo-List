import { renderTasks } from './renderTasks.js';
import { setToLocalStorageData } from './storage.js';
import { getTasksFromDB } from './tasksGateway.js';
import { initTodoListHendlers } from './todoList.js';

const initialPage = () => {
  getTasksFromDB().then(taskList => {
    setToLocalStorageData('tasksList', taskList);
    renderTasks();
    initTodoListHendlers();
  });
};

document.addEventListener('DOMContentLoaded', initialPage);
