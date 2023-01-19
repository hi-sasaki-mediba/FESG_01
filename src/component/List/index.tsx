import * as React from 'react';
import { List as MuiList } from '@mui/material';
import { TodoItem } from '../../App';
import ListItem from './ListItem';

type Props = {
  todoItems: Array<TodoItem>;
};
export const List = ({ todoItems }: Props) => {
  return (
    <MuiList>
      {todoItems.map((todoItem) => {
        return <ListItem todoItem={todoItem} key={todoItem.id} />;
      })}
    </MuiList>
  );
};
