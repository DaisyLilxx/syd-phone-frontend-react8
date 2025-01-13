import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 默认使用 localStorage
import headerSlice from "./modules/header";
import serialNoSlice from "./modules/serialNo";
import userMessSlice from "./modules/userMess";
// 配置持久化存储
const persistConfig = {
  key: 'root', // 设置唯一的 key 来标识存储数据
  storage, // 使用 localStorage 来持久化数据
  whitelist: ['headerSlice', 'serialNoSlice','userMessSlice'], // 需要持久化的Reducer 的名称
};

const rootReducer =combineReducers({//多个reducer情况下使用combineReducers包裹
  headerSlice,
  serialNoSlice,
  userMessSlice
});
// 包装多个 reducer 的持久化
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export default store
