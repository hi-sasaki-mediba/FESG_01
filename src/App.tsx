import './App.css';
import { Box, Button, Slide, Snackbar, Stack, TextField, useTheme } from '@mui/material';
import { List } from './component/List';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertTodo, onChangeInputField } from './slice/todoSlice';
import { RootState } from './store/store';
import { useForm } from 'react-hook-form';
import { ChangeTheme } from './component/changeTheme';

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
  const [toastOpen, setToastOpen] = useState(false);

  const onSubmit = () => {
    addTodo();
  };
  const onError = () => {
    setToastOpen(true);
  };

  return (
    <Box>
      <ChangeTheme />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <TextField
            variant="filled"
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
      <Snackbar
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        autoHideDuration={1000}
        message="ちゃんと入力してください！！！"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        TransitionComponent={(props) => <Slide {...props} direction="up" />}
      />
    </Box>
  );
}

export default App;
