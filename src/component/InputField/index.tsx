import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export const InputField = forwardRef((props: TextFieldProps) => {
  return <TextField id="standard-basic" label="タスクを追加" variant="outlined" {...props} />;
});
