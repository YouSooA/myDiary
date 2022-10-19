const store = {
  setLocalStorage(todos) {
    localStorage.setItem('todoList', JSON.stringify(todos));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('todoList'));
  },
};

export default store;
