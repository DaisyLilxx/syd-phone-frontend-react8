import { createSlice } from "@reduxjs/toolkit";
export const userMessSlice = createSlice({
  name: "userMess",
  initialState: {
    userMess: { username: "" },
  },
  reducers: {
    setUserMessStore(state, action) {
      console.log("setuserMessStore", state, "action", action);
      state.userMess = action.payload;
    },
    clearUserMessStore(state) {
      state.userMess = { username: "" };
    },
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setUserMessStore, clearUserMessStore } = userMessSlice.actions;

export default userMessSlice.reducer;
