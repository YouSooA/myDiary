const EDIT_MESSAGE = (prop) => `수정할 ${prop}를 입력해주세요.`;
const ERROR_INPUT_MESSAGE = {
  blank(state) {
    return `todo를 입력하셨나요? todo를 다시 ${state}해주세요.`;
  },
  notInCategoryOptions: '공부, 개인 성장, 인맥 관리 중 하나를 선택하세요.',
};
const DELETE_TODO_MASSAGE = '정말로 삭제하시겠습니까?';

export { ERROR_INPUT_MESSAGE, DELETE_TODO_MASSAGE, EDIT_MESSAGE };
