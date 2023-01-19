// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Button,
  TextField,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { MuiList } from './component/List';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { InputField } from './component/InputField';
export type TodoItem = { id: number; value: string };
function App() {
  const todoItems = [
    {
      id: 1,
      value: 'todo1',
    },
    {
      id: 2,
      value: 'todo2',
    },
    {
      id: 3,
      value: 'todo3',
    },
  ];
  const [todos, setTodos] = useState<Array<TodoItem>>(todoItems);
  const [newTodoContents, setNewTodoContents] = useState<string>('');

  const addTodo = useCallback(() => {
    const newTodoItem = { id: todos.length + 1, value: newTodoContents }; //idの振り方改善
    setTodos((currTodoList) => currTodoList.concat([newTodoItem]));
    setNewTodoContents('');
  }, [todos, newTodoContents]);

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback((event) => {
    setNewTodoContents(event.currentTarget.value);
  }, []);
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <InputField onChange={onChange} inputValue={newTodoContents} />
        <Button onClick={addTodo} variant="contained">
          追加
        </Button>
      </Stack>
      <MuiList todoItems={todos} />
    </div>
  );
}

export default App;
