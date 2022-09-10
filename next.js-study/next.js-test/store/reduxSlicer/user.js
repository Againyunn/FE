import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    thisUser: false,
  },
  reducers: {
    // 유저 로그인
    userLogin(state, action) {
      return {
        ...state,
        thisUser: action.payload,
      };
    },

    // 유저 로그아웃
    userLogout(state) {
      state.thisUser = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
