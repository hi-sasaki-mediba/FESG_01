// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, TextField, Stack, List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';

function App() {
  const todoItems = [
    {
      id: 1,
      value: 'todo1'
    },
    {
      id: 2,
      value: 'todo2'
    },
    {
      id: 3,
      value: 'todo3'
    }
  ];
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <TextField id="standard-basic" label="タスクを追加" variant="outlined" />
        <Button variant="contained">追加</Button>
      </Stack>
      <List>
        {todoItems.map((todoItem) => {
          return (
            <ListItem key={todoItem.id}>
              <ListItemButton role={undefined} dense disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={todoItem.value} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  );
}

export default App;
