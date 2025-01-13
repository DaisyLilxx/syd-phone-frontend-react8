import { createSlice } from "@reduxjs/toolkit";
export const headerSlice = createSlice({
  name: "header",
  initialState: {
    headers: { openId: "", channelCode: "" ,'wechat-token':''},
  },
  reducers: {
    setHeaderStore(state, action) {
      console.log("setHeaderStore", state, "action", action);
      state.headers = {...state.headers ,...action.payload}
    },
    clearHeaderStore(state) {
      state.headers = { openId: "", channelCode: "" ,'wechat-token':''};
    },
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setHeaderStore, clearHeaderStore } = headerSlice.actions;

export default headerSlice.reducer;
