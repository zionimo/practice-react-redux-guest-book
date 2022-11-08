// 1. 초기값
const initialState = {
  memoList: [{ date: new Date(), name: "green", text: "방명록을 작성했습니다" }],
};

// 3. 액션함수
export const addmemo = (memo) => ({ type: "addmemo", payload: memo });

// 2. 리듀서 함수
// 가능한 파일 이름과 같게 생성
const memos = (state = initialState, action) => {
  switch (action.type) {
    case "addmemo":
      return { ...state, memoList: state.memoList.concat(action.payload) };
    default:
      return state;
  }
};

export default memos;
