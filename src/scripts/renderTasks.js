import { getLocalStorageData } from './storage.js';

const listElement = document.querySelector('.list');

const createTaskCheckboxElement = (isDone, id) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = isDone;
  checkbox.dataset.id = id;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

const createDeleteBtnElem = id => {
  const deleteTaskBtnElem = document.createElement('button');
  deleteTaskBtnElem.textContent = 'x';
  deleteTaskBtnElem.classList.add('list__item-delete-btn')
  deleteTaskBtnElem.dataset.id = id;

  return deleteTaskBtnElem;
};

const createTextItemElem = text => {
  const textItemElem = document.createElement('p');
  textItemElem.textContent = text;
  textItemElem.classList.add('list__item-description')

  return textItemElem;
};

const createTaskItemElement = (text, isDone, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  listItemElem.setAttribute('id', id);

  if (isDone) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem
    .append(
      createTaskCheckboxElement(isDone, id),
      createTextItemElem(text),
      createDeleteBtnElem(id)
    );

  return listItemElem;
};

export function renderTasks() {
  listElement.textContent = '';

  getLocalStorageData('tasksList')
    .sort((a, b) => a.isDone - b.isDone)
    .map(
      ({ text, isDone, id }) => listElement.append(createTaskItemElement(text, isDone, id)));
}

window.addEventListener('storage', () => renderTasks());
