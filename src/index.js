import { $, ERROR_INPUT_MESSAGE, DELETE_TODO_MASSAGE, EDIT_MESSAGE } from './utils/utils.js';
import store from './store/store.js';

export default function App() {
  this.todoList = [];
  this.init = () => {
    if (store.getLocalStorage()) {
      this.todoList = store.getLocalStorage();
    }
    showTodoList();
    initaddEventListeners();
  };
  const resetInput = () => {
    $('#todo-input').value = '';
    $('#todo-input').focus();
    $('#thema-select').options[0].selected = true;
  };
  const checkInput = (todoInput) => {
    if (todoInput.replace(/\s/g, '') === '') {
      resetInput();
      alert(ERROR_INPUT_MESSAGE.blank('입력'));
      return false;
    }
    return true;
  };
  const showCount = () => {
    const count = $('#todo-list').querySelectorAll('li').length;
    const completedCount = this.todoList.filter((todo) => todo.isCompleted === true).length;
    const notCompletedCount = count - completedCount;
    $('#todo-count').textContent = `진행: ${notCompletedCount}개 완료: ${completedCount}개`;
  };
  const showTodoList = () => {
    const todosTemplate = this.todoList
      .map((todo, index) => {
        return `
      <li data-todo-id="${index}" class="todo-item checked">
        <div class="${todo.isCompleted ? 'completed' : ''} checkbox">✔</div>
        <div class="${todo.isCompleted ? 'completed' : ''} todo">${todo.content}</div>
        <div class="todo-end">
          <span class="thema">${todo.thema}</span>
          <button class="delete-button">x</button>
        </div>
      </li>
      `;
      })
      .join('');
    $('#todo-list').innerHTML = todosTemplate;
    showCount();
  };
  const addTodo = () => {
    const todoInput = $('#todo-input').value;
    const thema = $('#thema-select').options[$('#thema-select').selectedIndex].text;
    if (!checkInput(todoInput)) {
      return;
    }
    this.todoList.push({ thema, content: todoInput, isCompleted: false });
    store.setLocalStorage(this.todoList);
    showTodoList();
    resetInput();
  };
  const deleteTodo = (todoId) => {
    if (confirm(DELETE_TODO_MASSAGE)) {
      this.todoList.splice(todoId, 1);
      store.setLocalStorage(this.todoList);
      showTodoList();
    }
  };
  const editContent = (todoId) => {
    const { content } = this.todoList[todoId];
    const editedContent = prompt(EDIT_MESSAGE('todo'), content);
    if (!editedContent || editedContent.replace(/\s/g, '') === '') {
      return alert(ERROR_INPUT_MESSAGE.blank('수정'));
    }
    this.todoList[todoId].content = editedContent;
    store.setLocalStorage(this.todoList);
    showTodoList();
  };
  const editThema = (todoId) => {
    const { thema } = this.todoList[todoId];
    const editedThema = prompt(EDIT_MESSAGE('테마'), thema);
    const themaCategory = ['공부', '개인 성장', '인맥 관리'];
    if (!themaCategory.includes(editedThema)) {
      return alert(ERROR_INPUT_MESSAGE.notInThemaOptions);
    }
    this.todoList[todoId].thema = editedThema;
    store.setLocalStorage(this.todoList);
    showTodoList();
  };
  const completeTodo = (todoId) => {
    this.todoList[todoId].isCompleted = !this.todoList[todoId].isCompleted;
    showTodoList();
  };
  const isCompleted = (todoId) => {
    return this.todoList[todoId].isCompleted === true;
  };
  const initaddEventListeners = () => {
    $('#todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      addTodo();
    });
    $('#todo-list').addEventListener('click', (e) => {
      const { todoId } = e.target.closest('li').dataset;
      if (e.target.classList.contains('delete-button')) {
        return deleteTodo(todoId);
      }
      if (e.target.classList.contains('todo') && !isCompleted(todoId)) {
        return editContent(todoId);
      }
      if (e.target.classList.contains('thema') && !isCompleted(todoId)) {
        return editThema(todoId);
      }
      if (e.target.classList.contains('checkbox')) {
        return completeTodo(todoId);
      }
    });
  };
}

const app = new App();
app.init();
