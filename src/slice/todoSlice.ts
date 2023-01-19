import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../App';

interface InitialState {
  todoItems: Array<TodoItem>;
  inputFieldValue: string;
  id: number;
}

const initialState: InitialState = {
  todoItems: [],
  inputFieldValue: '',
  id: 1,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // addTodo(state, action: PayloadAction<TodoItem>) {
    //   state.todoItems = [...state.todoItems, action.payload];
    // },
    insertTodo(state) {
      state.todoItems = [...state.todoItems, { id: state.id, value: state.inputFieldValue }];
      state.inputFieldValue = '';
      state.id++;
    },
    onChangeInputField(state, { payload: inputValue }: PayloadAction<string>) {
      state.inputFieldValue = inputValue;
    },
    removeTodo(state, { payload: todoId }: PayloadAction<number>) {
      state.todoItems = state.todoItems.filter((item) => item.id !== todoId);
    },
  },
});

export const { insertTodo, onChangeInputField, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
