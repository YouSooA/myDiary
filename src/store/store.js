const store = {
  setLocalStorage(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('todoList'));
  },
};

export default store;
