const baseURL = 'https://666441d2932baf9032aa81f9.mockapi.io/api/v1/tasks';

const handleResponse = response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to fetch data from server');
};

export const getTasksFromDB = () => {
  return fetch(baseURL)
    .then(handleResponse)
    .catch(error => {
      console.error("Error fetching tasks:", error);
      throw error;
    });
};

export const createTaskInDB = event => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(event),
  })
  .then(handleResponse)
  .catch(error => {
    console.error("Error creating task:", error);
    throw error;
  });
};

export const deleteTaskInDB = id => {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to delete task with id: ${id}`);
    }
  })
  .catch(error => {
    console.error("Error deleting task:", error);
    throw error;
  });
};

export const updateTaskInDB = (id, event) => {
  return fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(event)
  })
  .then(handleResponse)
  .catch(error => {
    console.error("Error updating task:", error);
    throw error;
  });
};