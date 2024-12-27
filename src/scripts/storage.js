export const getLocalStorageData = key => JSON.parse(localStorage.getItem(key)) || [];

export const setToLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
