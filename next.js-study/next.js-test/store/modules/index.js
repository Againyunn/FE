import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// slicer 정의
import counter from "../reduxSlicer/counter";
import user from "../reduxSlicer/user";
import like from "../reduxSlicer/like";

const reducer = (state, action) => {
  // SSR작업 수행 시 HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 통합
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  // 리듀서 모듈들을 결합
  return combineReducers({
    counter,
    user,
    like,
  })(state, action);
};

export default reducer;
