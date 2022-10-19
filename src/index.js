import { $ } from './utils/utils.js';
import store from './store/store.js';

export default function App() {
  this.todos = [];
  this.init = () => {
    if (store.getLocalStorage()) {
      this.todos = store.getLocalStorage();
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
      alert('다시 todo를 입력해주세요.');
      return false;
    }
    return true;
  };
  const showCount = () => {
    const count = $('#todo-list').querySelectorAll('li').length;
    const completedCount = this.todos.filter((todo) => todo.isCompleted === true).length;
    const notCompletedCount = count - completedCount;
    $('#todo-count').textContent = `진행: ${notCompletedCount}개 완료: ${completedCount}개`;
  };
  const showTodoList = () => {
    const todosTemplate = this.todos
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
    this.todos.push({ thema, content: todoInput, isCompleted: false });
    store.setLocalStorage(this.todos);
    showTodoList();
    resetInput();
  };
  const removeTodo = (e) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      const todoId = e.target.closest('li').dataset.todoId;
      this.todos.splice(todoId, 1);
      store.setLocalStorage(this.todos);
      showTodoList();
    }
  };
  const editTodoContent = (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    const todoContent = e.target.textContent;
    const editedTodo = prompt('수정할 todo를 입력해주세요.', todoContent);
    if (!editedTodo || editedTodo.replace(/\s/g, '') === '') {
      return alert('다시 todo를 수정해주세요.');
    }
    this.todos[todoId].content = editedTodo;
    store.setLocalStorage(this.todos);
    showTodoList();
  };
  const editTodoThema = (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    const thema = e.target.textContent;
    const editedThema = prompt('수정할 todo를 입력해주세요.', thema);
    if (!['공부', '개인 성장', '인맥 관리'].includes(editedThema)) {
      return alert('공부, 개인 성장, 인맥 관리 중 하나를 선택하세요.');
    }
    this.todos[todoId].thema = editedThema;
    store.setLocalStorage(this.todos);
    showTodoList();
  };
  const completeTodo = (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    this.todos[todoId].isCompleted = !this.todos[todoId].isCompleted;
    showTodoList();
  };
  const isCompleted = (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    return this.todos[todoId].isCompleted === true;
  };
  const initaddEventListeners = () => {
    $('#todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      addTodo();
    });
    $('#todo-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-button')) {
        return removeTodo(e);
      }
      if (e.target.classList.contains('todo') && !isCompleted(e)) {
        return editTodoContent(e);
      }
      if (e.target.classList.contains('thema') && !isCompleted(e)) {
        return editTodoThema(e);
      }
      if (e.target.classList.contains('checkbox')) {
        return completeTodo(e);
      }
    });
  };
}

const app = new App();
app.init();
