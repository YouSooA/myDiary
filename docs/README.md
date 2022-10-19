todo 추가 - addTodo 함수

1. 유효하지 않은 input값에 대한 에러메세지 호출 함수
- [x] input 값이 공백으로 이루어져 있다면 'alert'창을 띄우고 false를 반환한다.

2. 유효한 input 값을 저장하는 변수 생성
- [x] 입력을 받고 엔터키 입력으로 input값을 변수 'todo'에 저장한다.
- [x] 입력을 받고 +버튼 클릭으로 input값을 변수 'todo'에 저장한다.

3. select 값과 input 값을 초기화하는 함수
- [x] select은 '공부'로, input은 빈 값으로 초기화된다.

4. 추가된 todo 결과 출력 기능
- [x] 추가된 todo는 '<ul id="todo-list"></ul>'에 안에 넣어야 한다.
- [x] 진행하고 있는 todo 갯수와 완료한 todo 갯수를 화면에 표시한다.

todo 삭제
- [x] todo의 삭제 버튼 클릭 이벤트를 받고, todo를 삭제하는 모달창(confirm)을 띄운다.
- [x] confirm에 확인 버튼을 누르면 해당 todo는 삭제된다.
- [x] 진행하고 있는 todo 갯수와 완료한 todo 갯수를 수정한다.

todo content 수정
- [x] todo를 클릭하면 'prompt'창을 띄운다.
- [x] 'prompt'창에 todo를 수정하고, 확인을 누르면 todo가 수정된다.
 - [x] 유효하지 않은 todo는 'alert'창을 띄운다.

todo thema 수정
- [x] thema를 클릭하면 'prompt'창을 띄운다.
- [x] 'prompt'창에 thema를 수정하고, thema값이 공부, 개인 성장, 인맥 관리인지 확인한다.
  - [x] 유효하지 않은 thema는 'alert'창을 띄운다.
- [x] 수정하고 확인버튼을 누르면, thema가 수정된다. 

todo 완료
- [x] todo의 체크박스 버튼 클릭 이벤트를 받는다.
- [x] 해당 todo의 체크박스에 체크가 표시되고, content는 취소선이 나타난다.
- [x] 진행하고 있는 todo 갯수와 완료한 todo 갯수를 수정한다.
