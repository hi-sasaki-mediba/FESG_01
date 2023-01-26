import './App.css';
import { Button, Stack, TextField } from '@mui/material';
import { List } from './component/List';
import { ChangeEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertTodo, onChangeInputField } from './slice/todoSlice';
import { RootState } from './store/store';
import { useForm } from 'react-hook-form';

export type TodoItem = { id: number; value: string };

function App() {
  const { inputFieldValue, todoItems } = useSelector((state: RootState) => state.todo);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const addTodo = useCallback(() => {
    dispatch(insertTodo());
  }, [dispatch]);

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(
    (event) => {
      dispatch(onChangeInputField(event.currentTarget.value));
      setValue('title', event.currentTarget.value);
    },
    [dispatch, setValue]
  );

  const onSubmit = () => {
    addTodo();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, () => alert('ちゃんと入力してください!!!'))}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <TextField
            value={inputFieldValue}
            {...register('title', {
              required: true,
              onChange,
            })}
          />
          <Button type="submit" variant="contained">
            追加
          </Button>
        </Stack>
        <List todoItems={todoItems} />
      </form>
    </div>
  );
}

export default App;
