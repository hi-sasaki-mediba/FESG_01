import './App.css';
import { Button, Stack } from '@mui/material';
import { List } from './component/List';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { InputField } from './component/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { insertTodo, onChangeInputField } from './slice/todoSlice';
import { RootState } from './store/store';
export type TodoItem = { id: number; value: string };
function App() {
  const { inputFieldValue, todoItems } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const addTodo = useCallback(() => {
    dispatch(insertTodo());
  }, []);

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback((event) => {
    dispatch(onChangeInputField(event.currentTarget.value));
  }, []);
  console.log(todoItems);
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <InputField onChange={onChange} inputValue={inputFieldValue} />
        <Button onClick={addTodo} variant="contained">
          追加
        </Button>
      </Stack>
      <List todoItems={todoItems} />
    </div>
  );
}

export default App;
