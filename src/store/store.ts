import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
