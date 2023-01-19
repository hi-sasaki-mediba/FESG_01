// @flow
import * as React from 'react';
import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

type Props = {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  inputValue: string;
};
export const InputField = ({ onChange, inputValue }: Props) => {
  return (
    <TextField id="standard-basic" label="タスクを追加" variant="outlined" onChange={onChange} value={inputValue} />
  );
};
