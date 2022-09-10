import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likeNumber: 0,
  },
  reducers: {
    plusFuntion(state) {
      state.likeNumber += 1;
    },
  },
});

export const { plusFuntion } = likeSlice.actions;
export default likeSlice.reducer;
