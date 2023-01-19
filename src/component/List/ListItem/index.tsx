import * as React from 'react';
import { Button, Checkbox, ListItem as MuiListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { removeTodo } from '../../../slice/todoSlice';
import { TodoItem } from '../../../App';

const ListItem = ({ todoItem }: { todoItem: TodoItem }) => {
  const dispatch = useDispatch();

  const onRemoveTodo = useCallback(() => {
    dispatch(removeTodo(todoItem.id));
  }, [todoItem.id]);

  return (
    <MuiListItem
      key={todoItem.id}
      secondaryAction={
        <Button onClick={onRemoveTodo} variant="contained" color={'error'}>
          削除
        </Button>
      }
    >
      <ListItemButton role={undefined} dense disableRipple>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={todoItem.value} />
      </ListItemButton>
    </MuiListItem>
  );
};
export default ListItem;
