import { renderTasks } from './renderTasks.js';
import { setToLocalStorageData } from './storage.js';
import { deleteTaskInDB, getTasksFromDB, updateTaskInDB } from './tasksGateway.js';

const updateTaskList = () =>
  getTasksFromDB().then(tasks => {
    setToLocalStorageData('tasksList', tasks);
    renderTasks();
  });
  
const updateTask = clickedElement => {
  const isDone = clickedElement.checked;

  updateTaskInDB(clickedElement.dataset.id, {
    isDone,
    finishDate: isDone ? new Date() : null,
  }).then(() => updateTaskList());
};

const deleteTask = idTask => {
  deleteTaskInDB(idTask).then(() => updateTaskList());
};

export const onHandlerTask = event => {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('list__item-checkbox')) {
    updateTask(clickedElement);
  } else if (clickedElement.classList.contains('list__item-delete-btn')) {
    deleteTask(clickedElement.dataset.id);
  }
};
