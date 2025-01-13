import { createSlice } from "@reduxjs/toolkit";
export const serialNoSlice = createSlice({
  name: "serialNo",
  initialState: {
    serialNo: "",
  },
  reducers: {
    setSerialNoStore(state, action) {
      console.log("setHeaderStore", state, "action", action);
      state.serialNo = action.payload;
    },
    clearSerialNoStore(state) {
      state.serialNo = "";
    },
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setSerialNoStore, clearSerialNoStore } = serialNoSlice.actions;

export default serialNoSlice.reducer;
