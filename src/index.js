import { $ } from './utils/utils.js';

export default function App() {
  const resetInput = () => {
    $('#todo-input').value = '';
    $('#todo-input').focus();
    $('#thema-select').options[0].selected = true;
  };
  const checkInput = (todo) => {
    if (todo.replace(/\s/g, '') === '') {
      resetInput();
      alert('다시 todo를 입력해주세요.');
      return false;
    }
    return true;
  };
  const showTodoList = (todo, thema) => {
    const todoTemplate = (todoItem, themaState) => {
      return `
      <li class="todo-item checked">
        <div class="checkbox">✔</div>
        <div class="todo">${todoItem}</div>
        <div class="todo-end">
          <span id="thema">${themaState}</span>
          <button id="delete-button">x</button>
        </div>
      </li>
      `;
    };
    $('#todo-list').insertAdjacentHTML('beforeend', todoTemplate(todo, thema));
  };
  const showCount = () => {
    const count = $('#todo-list').querySelectorAll('li').length;
    $('#todo-count').textContent = `진행: ${count}개 완료: 0개`;
  }
  const addTodo = () => {
    const todo = $('#todo-input').value;
    const thema = $('#thema-select').options[$('#thema-select').selectedIndex].text;
    if (!checkInput(todo)) {
      return;
    }
    showTodoList(todo, thema);
    resetInput();
    showCount();
  };
  $('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
  });
}

new App();
