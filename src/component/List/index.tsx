// @flow
import * as React from 'react';
import { Checkbox, List as MuiList, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TodoItem } from '../../App';

type Props = {
  todoItems: Array<TodoItem>;
};
export const List = ({ todoItems }: Props) => {
  return (
    <MuiList>
      {todoItems.map((todoItem) => {
        return (
          <ListItem key={todoItem.id}>
            <ListItemButton role={undefined} dense disableRipple>
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </ListItemIcon>
              <ListItemText primary={todoItem.value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </MuiList>
  );
};
