import { createSlice } from "@reduxjs/toolkit";
import { TodoItem } from "../App";

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
      state.todoItems = [...state.todoItems, {id: state.id, value: state.inputFieldValue}];
      state.id++;
    },
  }
})

export const { insertTodo } = todoSlice.actions;
export default todoSlice.reducer;
