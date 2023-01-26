import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';
import themeReducer from '../slice/themeSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
